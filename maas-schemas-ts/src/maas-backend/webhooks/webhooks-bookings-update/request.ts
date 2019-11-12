/*

undefined
MaaS webhook to update bookings for tsp adapter callback request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as RemoteRequest_ from 'maas-schemas-ts/tsp/webhooks-bookings-update/remote-request';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-update/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    agencyId?: string;
    payload?: RemoteRequest_.Default;
  } & {
    agencyId: Defined;
    payload: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      agencyId: t.string,
      payload: RemoteRequest_.Default,
    }),
    t.type({
      agencyId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: string;
      payload?: RemoteRequest_.Default;
    } & {
      agencyId: Defined;
      payload: Defined;
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
