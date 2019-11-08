/*

undefined
OpenTripPlanner itinerary, augmented with leg bookings per leg

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Leg_ from 'maas-schemas-ts/core/leg';
import * as ProductOption_ from 'maas-schemas-ts/core/product-option';
import * as Booking_ from 'maas-schemas-ts/core/booking';

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

export const schemaId = 'http://maasglobal.com/core/itinerary.json';
// Id
// The purpose of this remains a mystery
export type Id = Units_.Uuid;
export const Id = Units_.Uuid;
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: Id;
    sourcePlanId?: Units_.Uuid;
    isOvertaken?: boolean;
    identityId?: Units_.IdentityId;
    signature?: Common_.Signature;
    state?: State_.ItineraryState;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    co2?: number;
    fares?: Array<Fare_.Default>;
    legs?: Array<Leg_.Default>;
    productOptions?: Array<ProductOption_.Default>;
    type?: 'outward' | 'return';
    bookings?: Array<Booking_.Default>;
  } & {
    startTime: Defined;
    endTime: Defined;
    legs: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      sourcePlanId: Units_.Uuid,
      isOvertaken: t.boolean,
      identityId: Units_.IdentityId,
      signature: Common_.Signature,
      state: State_.ItineraryState,
      startTime: Units_.Time,
      endTime: Units_.Time,
      co2: t.number,
      fares: t.array(Fare_.Default),
      legs: t.array(Leg_.Default),
      productOptions: t.array(ProductOption_.Default),
      type: t.union([t.literal('outward'), t.literal('return')]),
      bookings: t.array(Booking_.Default),
    }),
    t.type({
      startTime: Defined,
      endTime: Defined,
      legs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Id;
      sourcePlanId?: Units_.Uuid;
      isOvertaken?: boolean;
      identityId?: Units_.IdentityId;
      signature?: Common_.Signature;
      state?: State_.ItineraryState;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      co2?: number;
      fares?: Array<Fare_.Default>;
      legs?: Array<Leg_.Default>;
      productOptions?: Array<ProductOption_.Default>;
      type?: 'outward' | 'return';
      bookings?: Array<Booking_.Default>;
    } & {
      startTime: Defined;
      endTime: Defined;
      legs: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
