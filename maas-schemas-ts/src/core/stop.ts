/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Place_ from 'maas-schemas-ts/core/components/place';
import * as Units_ from 'maas-schemas-ts/core/components/units';

export const schemaId = 'http://maasglobal.com/core/stop.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  Place_.Default & {
    startTime?: Units_.Time;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    Place_.Default,
    t.partial({
      startTime: Units_.Time,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    Place_.Default & {
      startTime?: Units_.Time;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [null];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
