/*

undefined
Remote request schema, e.g. how TSP should call MaaS-backend

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';

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
  'http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'EXPIRED' | 'CANCELLED' | 'REJECTED';
    leg?: BookingOption_.LegDelta;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
  } & {
    tspId: Defined;
    state: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
        t.literal('REJECTED'),
      ]),
      leg: BookingOption_.LegDelta,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      token: Booking_.Token,
    }),
    t.type({
      tspId: Defined,
      state: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ACTIVATED'
        | 'EXPIRED'
        | 'CANCELLED'
        | 'REJECTED';
      leg?: BookingOption_.LegDelta;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
    } & {
      tspId: Defined;
      state: Defined;
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
