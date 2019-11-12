/*

undefined
Response schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';

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

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId?: Booking_.TspId;
    state?: State_.BookingState;
    cost?: Booking_.Cost;
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Default;
    customerSelection?: CustomerSelection_.Default;
    customer?: BookingOption_.Customer;
  } & {
    tspId: Defined;
    state: Defined;
    meta: Defined;
    terms: Defined;
    token: Defined;
    tspProduct: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      state: State_.BookingState,
      cost: Booking_.Cost,
      leg: BookingOption_.Leg,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
      configurator: Configurator_.Default,
      customerSelection: CustomerSelection_.Default,
      customer: BookingOption_.Customer,
    }),
    t.type({
      tspId: Defined,
      state: Defined,
      meta: Defined,
      terms: Defined,
      token: Defined,
      tspProduct: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      state?: State_.BookingState;
      cost?: Booking_.Cost;
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Default;
      customerSelection?: CustomerSelection_.Default;
      customer?: BookingOption_.Customer;
    } & {
      tspId: Defined;
      state: Defined;
      meta: Defined;
      terms: Defined;
      token: Defined;
      tspProduct: Defined;
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
