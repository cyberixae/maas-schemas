/*

undefined
Request schema for bookings-agency-products

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

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
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-products/request.json';
// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    agencyId?: Common_.AgencyId;
  } & {
    agencyId: Defined;
  },
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.partial({
      agencyId: Common_.AgencyId,
    }),
    t.type({
      agencyId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
    } & {
      agencyId: Defined;
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}
export const jsonPayloadExamples: Array<unknown> = [];
export const safePayloadExamples = t.array(Payload).decode(jsonPayloadExamples);
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
