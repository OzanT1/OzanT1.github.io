import assert from 'node:assert/strict';
import test from 'node:test';
import { getInitialLanguage, resolveLanguage, saveLanguagePreference, LANGUAGE_STORAGE_KEY } from '../src/lib/language.ts';

test('explicit selections take priority over browser preferences', () => {
  assert.equal(resolveLanguage('en', ['tr-TR']), 'en');
  assert.equal(resolveLanguage('tr', ['en-US']), 'tr');
});

test('first visits use the first supported browser language, including regional locales', () => {
  assert.equal(resolveLanguage(null, ['tr-TR', 'en-US']), 'tr');
  assert.equal(resolveLanguage(null, ['en-GB', 'tr-TR']), 'en');
  assert.equal(resolveLanguage(null, ['de-DE', 'tr']), 'tr');
  assert.equal(resolveLanguage(null, ['TR_tr']), 'tr');
});

test('invalid saved data is ignored and unsupported languages fall back to English', () => {
  assert.equal(resolveLanguage('fr', ['tr-TR']), 'tr');
  assert.equal(resolveLanguage('', ['fr-FR']), 'en');
  assert.equal(resolveLanguage(null, []), 'en');
  assert.equal(getInitialLanguage(), 'en');
});

test('saved language survives a new visit and does not overwrite unrelated storage', () => {
  const values = new Map([['unrelated-setting', 'keep']]);
  const environment = {
    navigator: { languages: ['tr-TR'], language: 'tr-TR' },
    localStorage: {
      getItem: key => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
  };
  assert.equal(getInitialLanguage(environment), 'tr');
  assert.equal(values.has(LANGUAGE_STORAGE_KEY), false, 'detection alone must not save a preference');
  assert.equal(saveLanguagePreference('en', environment), true);
  assert.equal(getInitialLanguage(environment), 'en');
  assert.equal(values.get('unrelated-setting'), 'keep');
  values.delete(LANGUAGE_STORAGE_KEY);
  assert.equal(getInitialLanguage(environment), 'tr', 'clearing the preference restores browser detection');
});

test('blocked storage still allows browser detection without throwing', () => {
  const environment = {
    navigator: { languages: ['tr-TR'], language: 'tr-TR' },
    get localStorage() { throw new Error('Storage blocked'); },
  };
  assert.equal(getInitialLanguage(environment), 'tr');
  assert.equal(saveLanguagePreference('en', environment), false);
});

test('storage quota errors are safe and legacy browser language is supported', () => {
  const environment = {
    navigator: { languages: [], language: 'tr-TR' },
    localStorage: {
      getItem: () => null,
      setItem: () => { throw new Error('Quota exceeded'); },
    },
  };
  assert.equal(getInitialLanguage(environment), 'tr');
  assert.equal(saveLanguagePreference('en', environment), false);
});
