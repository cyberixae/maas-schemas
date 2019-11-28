/*

undefined
Request schema for retrieving a ticket from booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
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

export const schemaId = 'http://maasglobal.com/tsp/bookings-ticket/request.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId?: Booking_.TspId;
    ticket?: string | Array<string>;
    token?: Booking_.Token;
  } & {
    ticket: Defined;
    token: Defined;
    tspId: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      ticket: t.union([t.string, t.array(t.string)]),
      token: Booking_.Token,
    }),
    t.type({
      ticket: Defined,
      token: Defined,
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      ticket?: string | Array<string>;
      token?: Booking_.Token;
    } & {
      ticket: Defined;
      token: Defined;
      tspId: Defined;
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
