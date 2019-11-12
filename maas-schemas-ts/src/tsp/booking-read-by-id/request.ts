/*

undefined
Request schema for getting a specific booking with a TSP ID from a TSP adapter

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

export const schemaId = 'http://maasglobal.com/tsp/bookings-read-by-id/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId?: Booking_.TspId;
    query?: {};
  } & {
    tspId: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      query: t.type({}),
    }),
    t.type({
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      query?: {};
    } & {
      tspId: Defined;
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
