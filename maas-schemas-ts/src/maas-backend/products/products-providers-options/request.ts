/*

undefined
Request schema for products-providers-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
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
  'http://maasglobal.com/maas-backend/products/products-providers-options/request.json';
// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    lat?: UnitsGeo_.RelaxedLatitude;
    lon?: UnitsGeo_.RelaxedLongitude;
  } & {
    lat: Defined;
    lon: Defined;
  },
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.partial({
      lat: UnitsGeo_.RelaxedLatitude,
      lon: UnitsGeo_.RelaxedLongitude,
    }),
    t.type({
      lat: Defined,
      lon: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
    } & {
      lat: Defined;
      lon: Defined;
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}
export const jsonPayloadExamples: Array<unknown> = [null];
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
export const jsonDefaultExamples: Array<unknown> = [null];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
