/*

undefined
Response schema for profile-info

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-info/response.json';
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
export const jsonDefaultExamples: Array<unknown> = [null];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
