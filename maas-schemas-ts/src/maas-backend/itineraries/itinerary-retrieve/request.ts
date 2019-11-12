/*

undefined
Request schema for itinerary-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
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
  'http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    itineraryId?: Units_.Uuid;
    originalFare?: string;
    headers?: ApiCommon_.Headers;
  } & {
    itineraryId: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      itineraryId: Units_.Uuid,
      originalFare: t.string,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      itineraryId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itineraryId?: Units_.Uuid;
      originalFare?: string;
      headers?: ApiCommon_.Headers;
    } & {
      itineraryId: Defined;
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
