/*

undefined
Subscription option's point cost

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/point-cost.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<number, DefaultBrand>;
export const Default = t.brand(
  t.number,
  (x): x is t.Branded<number, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [null];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
