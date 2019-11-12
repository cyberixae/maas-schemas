/*

undefined
Response schema for tsp-auth init

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/maas-backend/tsp-auth/init/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    authUrl?: Units_.Url;
  } & {
    authUrl: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      authUrl: Units_.Url,
    }),
    t.type({
      authUrl: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      authUrl?: Units_.Url;
    } & {
      authUrl: Defined;
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
