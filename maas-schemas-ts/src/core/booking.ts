/*

undefined
The base booking object with all fields, to be inherited

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Leg_ from 'maas-schemas-ts/core/leg';
import * as Terms_ from 'maas-schemas-ts/core/components/terms';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as StateLog_ from 'maas-schemas-ts/core/components/state-log';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Customer_ from 'maas-schemas-ts/core/customer';
import * as Product_ from 'maas-schemas-ts/core/product';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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

export const schemaId = 'http://maasglobal.com/core/booking.json#';

// Id
// The purpose of this remains a mystery
export type Id = Units_.Uuid;
export const Id = Units_.Uuid;

// Fares
// The purpose of this remains a mystery
export type Fares = Fare_.FareArray;
export const Fares = Fare_.FareArray;

// Cost
// The purpose of this remains a mystery
export type Cost = Cost_.Cost;
export const Cost = Cost_.Cost;

// Configurator
// The purpose of this remains a mystery
export type Configurator = Configurator_.Configurator;
export const Configurator = Configurator_.Configurator;

// TspId
// The purpose of this remains a mystery
export type TspId = t.Branded<string, TspIdBrand>;
export const TspId = t.brand(
  t.string,
  (x): x is t.Branded<string, TspIdBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 256),
  'TspId',
);
export interface TspIdBrand {
  readonly TspId: unique symbol;
}

// Leg
// MaaS response may return any subset of legCore
export type Leg = t.Branded<
  {
    signature?: Common_.Signature;
    state?: Leg_.State;
    from?: Leg_.From;
    to?: Leg_.To;
    startTime?: Leg_.StartTime;
    endTime?: Leg_.EndTime;
    mode?: Leg_.Mode;
    stops?: Leg_.Stops;
    departureDelay?: Leg_.DepartureDelay;
    arrivalDelay?: Leg_.ArrivalDelay;
    distance?: Leg_.Distance;
    route?: Leg_.Route;
    routeShortName?: Leg_.RouteShortName;
    routeLongName?: Leg_.RouteLongName;
    agencyId?: Leg_.AgencyId;
    legGeometry?: Leg_.LegGeometry;
    tspProduct?: Leg_.TspProduct;
    productOption?: Leg_.ProductOption;
  },
  LegBrand
>;
export const Leg = t.brand(
  t.partial({
    signature: Common_.Signature,
    state: Leg_.State,
    from: Leg_.From,
    to: Leg_.To,
    startTime: Leg_.StartTime,
    endTime: Leg_.EndTime,
    mode: Leg_.Mode,
    stops: Leg_.Stops,
    departureDelay: Leg_.DepartureDelay,
    arrivalDelay: Leg_.ArrivalDelay,
    distance: Leg_.Distance,
    route: Leg_.Route,
    routeShortName: Leg_.RouteShortName,
    routeLongName: Leg_.RouteLongName,
    agencyId: Leg_.AgencyId,
    legGeometry: Leg_.LegGeometry,
    tspProduct: Leg_.TspProduct,
    productOption: Leg_.ProductOption,
  }),
  (
    x,
  ): x is t.Branded<
    {
      signature?: Common_.Signature;
      state?: Leg_.State;
      from?: Leg_.From;
      to?: Leg_.To;
      startTime?: Leg_.StartTime;
      endTime?: Leg_.EndTime;
      mode?: Leg_.Mode;
      stops?: Leg_.Stops;
      departureDelay?: Leg_.DepartureDelay;
      arrivalDelay?: Leg_.ArrivalDelay;
      distance?: Leg_.Distance;
      route?: Leg_.Route;
      routeShortName?: Leg_.RouteShortName;
      routeLongName?: Leg_.RouteLongName;
      agencyId?: Leg_.AgencyId;
      legGeometry?: Leg_.LegGeometry;
      tspProduct?: Leg_.TspProduct;
      productOption?: Leg_.ProductOption;
    },
    LegBrand
  > => true,
  'Leg',
);
export interface LegBrand {
  readonly Leg: unique symbol;
}

// Terms
// The purpose of this remains a mystery
export type Terms = Terms_.Terms;
export const Terms = Terms_.Terms;

// Token
// The validity token (such as booking ID, travel ticket etc.) that MaaS clients will display to validate the trip when starting the leg.
export type Token = t.Branded<
  {
    validityDuration?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
    };
    data?: {};
    meta?: {};
  },
  TokenBrand
>;
export const Token = t.brand(
  t.partial({
    validityDuration: t.partial({
      startTime: Units_.Time,
      endTime: Units_.Time,
    }),
    data: t.type({}),
    meta: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      validityDuration?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
      };
      data?: {};
      meta?: {};
    },
    TokenBrand
  > => true,
  'Token',
);
export interface TokenBrand {
  readonly Token: unique symbol;
}

// Booking
// The default export. More information at the top.
export type Booking = t.Branded<
  {
    id?: Id;
    tspId?: TspId;
    state?: State_.BookingState;
    stateLog?: StateLog_.StateLog;
    fares?: Fares;
    cost?: Cost;
    leg?: Leg;
    token?: Token;
    meta?: BookingMeta_.BookingMeta;
    terms?: Terms;
    customer?: Customer_.Customer & {
      identityId: Defined;
    };
    product?: Product_.Product;
    signature?: Common_.Signature;
    configurator?: Configurator;
    customerSelection?: CustomerSelection_.CustomerSelection;
  } & {
    id: Defined;
    state: Defined;
    leg: Defined;
    meta: Defined;
    terms: Defined;
    token: Defined;
    customer: Defined;
  },
  BookingBrand
>;
export const Booking = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      tspId: TspId,
      state: State_.BookingState,
      stateLog: StateLog_.StateLog,
      fares: Fares,
      cost: Cost,
      leg: Leg,
      token: Token,
      meta: BookingMeta_.BookingMeta,
      terms: Terms,
      customer: t.intersection([
        Customer_.Customer,
        t.type({
          identityId: Defined,
        }),
      ]),
      product: Product_.Product,
      signature: Common_.Signature,
      configurator: Configurator,
      customerSelection: CustomerSelection_.CustomerSelection,
    }),
    t.type({
      id: Defined,
      state: Defined,
      leg: Defined,
      meta: Defined,
      terms: Defined,
      token: Defined,
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Id;
      tspId?: TspId;
      state?: State_.BookingState;
      stateLog?: StateLog_.StateLog;
      fares?: Fares;
      cost?: Cost;
      leg?: Leg;
      token?: Token;
      meta?: BookingMeta_.BookingMeta;
      terms?: Terms;
      customer?: Customer_.Customer & {
        identityId: Defined;
      };
      product?: Product_.Product;
      signature?: Common_.Signature;
      configurator?: Configurator;
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & {
      id: Defined;
      state: Defined;
      leg: Defined;
      meta: Defined;
      terms: Defined;
      token: Defined;
      customer: Defined;
    },
    BookingBrand
  > => true,
  'Booking',
);
export interface BookingBrand {
  readonly Booking: unique symbol;
}
/** examplesBooking // => { _tag: 'Right', right: examplesBookingJson } */
export const examplesBookingJson: NonEmptyArray<unknown> = [
  {
    id: '12345678-ABCD-1234-ABCD-123456789ABC',
    state: 'EXPIRED',
    leg: {
      to: {
        lat: 60.184333,
        lon: 24.835972,
        name: 'Otaranta 6, Espoo',
        address:
          'streetName:Otaranta|streetNumber:6|city:Espoo|zipCode:02150|country:Suomi',
      },
      from: {
        lat: 60.168442,
        lon: 24.932205,
        name: 'Urho Kekkosen katu 1, Helsinki',
        address:
          'streetName:Urho Kekkosen katu|streetNumber:1|city:Helsinki|zipCode:00100|country:Suomi',
      },
      mode: 'TAXI',
      endTime: 1553092978009,
      agencyId: 'Valopilkku',
      startTime: 1553092978009,
      departureDelay: 123456,
    },
    token: { type: 'SECURITY_CODE', value: '12345' },
    terms: {
      reusable: false,
      validity: { endTime: 1553092978009, startTime: 1553092978009 },
      reconcilable: false,
    },
    meta: {
      raw: {
        data: { lat: 60.168442, lon: 24.932205, vehicle_id: '123' },
        order_id: 12345,
        timestamp: '2019-03-20T10:10:12+00:00',
        localized_description: 'Tilaus on valmis.',
      },
      MODE_TAXI: {
        vehicleId: '123',
        taxiCenter: { name: 'Lähitaksi', phone: '+3581007300' },
        vehicleType: 'any',
        vehicleLocation: { lat: 60.245254, lon: 24.989604 },
      },
      timestamp: 1553092978009,
      valopilkku: {
        prepaid: true,
        locations: [
          {
            type: 'pickup',
            address: { city: 'Helsinki', street_address: 'Urho Kekkosen katu 1' },
            contacts: [
              { name: 'John Doe', passenger_count: 1, provider_order_id: 'MaaS-12345' },
            ],
            coordinate: { lat: 60.168442, lon: 24.932205 },
            passenger_count: 1,
          },
          {
            type: 'destination',
            address: { city: 'Espoo', street_address: 'Otaranta 6' },
            drop_off: ['MaaS-12345'],
            coordinate: { lat: 60.184333, lon: 24.835972 },
            passenger_count: 1,
          },
        ],
        submitted: '2019-03-21T11:13:19.753Z',
      },
      description: 'Tilaus on valmis.',
    },
    created: '2019-03-20 10:10:12.123456',
    modified: '2019-03-20 18:30:12.123456',
    cost: { amount: 0, currency: 'EUR' },
    stateLog: [
      {
        reason: {},
        invalid: false,
        newState: 'PENDING',
        oldState: 'START',
        timestamp: 1553092178009,
      },
      {
        reason: {},
        invalid: false,
        newState: 'PAID',
        oldState: 'PENDING',
        timestamp: 1553092278009,
      },
      {
        reason: {},
        invalid: false,
        newState: 'RESERVED',
        oldState: 'PAID',
        timestamp: 1553092378009,
      },
      {
        reason: {},
        invalid: false,
        newState: 'CONFIRMED',
        oldState: 'RESERVED',
        timestamp: 1553092478009,
      },
      {
        reason: {},
        invalid: false,
        newState: 'ACTIVATED',
        oldState: 'CONFIRMED',
        timestamp: 1553092578009,
      },
      {
        reason: {},
        invalid: false,
        newState: 'EXPIRED',
        oldState: 'ACTIVATED',
        timestamp: 1553092678009,
      },
    ],
    productId: 'valopilkku-any',
    fares: [{ type: 'charge', amount: 1000, currency: 'WMP', productionAmount: 1234 }],
    cancelling: false,
    customer: { identityId: 'eu-west-1:4828507e-683f-41bf-9d87-689808fbf958' },
  },
];
export const examplesBooking = nonEmptyArray(Booking).decode(examplesBookingJson);

export default Booking;

// Success
