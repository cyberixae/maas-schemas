/*

undefined
Response schema for getting active itinerary tracking object

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/tracking/tracking-active-itinerary-get/response.json';
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
