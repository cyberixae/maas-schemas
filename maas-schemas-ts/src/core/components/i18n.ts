/*

undefined
MaaS internationalization schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/i18n.json';
// Locale
// The purpose of this remains a mystery
export type Locale = t.Branded<string, LocaleBrand>;
export const Locale = t.brand(
  t.string,
  (x): x is t.Branded<string, LocaleBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$', 'u')) !== null,
  'Locale',
);
export interface LocaleBrand {
  readonly Locale: unique symbol;
}
export const jsonLocaleExamples: Array<unknown> = [];
export const safeLocaleExamples = t.array(Locale).decode(jsonLocaleExamples);
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
