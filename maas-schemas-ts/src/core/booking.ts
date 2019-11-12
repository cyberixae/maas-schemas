/*

undefined
The base booking object with all fields, to be inherited

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as t from 'io-ts';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Leg_ from 'maas-schemas-ts/core/leg';
import * as Terms_ from 'maas-schemas-ts/core/components/terms';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as StateLog_ from 'maas-schemas-ts/core/components/state-log';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Customer_ from 'maas-schemas-ts/core/customer';
import * as Product_ from 'maas-schemas-ts/core/product';
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

export const schemaId = 'http://maasglobal.com/core/booking.json#';
// Id
// The purpose of this remains a mystery
export type Id = Units_.Uuid;
export const Id = Units_.Uuid;
export const jsonIdExamples: Array<unknown> = [];
export const safeIdExamples = t.array(Id).decode(jsonIdExamples);
// Fares
// The purpose of this remains a mystery
export type Fares = t.Branded<Array<Fare_.Default>, FaresBrand>;
export const Fares = t.brand(
  t.array(Fare_.Default),
  (x): x is t.Branded<Array<Fare_.Default>, FaresBrand> => true,
  'Fares',
);
export interface FaresBrand {
  readonly Fares: unique symbol;
}
export const jsonFaresExamples: Array<unknown> = [];
export const safeFaresExamples = t.array(Fares).decode(jsonFaresExamples);
// Cost
// The purpose of this remains a mystery
export type Cost = Cost_.Default;
export const Cost = Cost_.Default;
export const jsonCostExamples: Array<unknown> = [];
export const safeCostExamples = t.array(Cost).decode(jsonCostExamples);
// Configurator
// The purpose of this remains a mystery
export type Configurator = Configurator_.Default;
export const Configurator = Configurator_.Default;
export const jsonConfiguratorExamples: Array<unknown> = [];
export const safeConfiguratorExamples = t
  .array(Configurator)
  .decode(jsonConfiguratorExamples);
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
export const jsonTspIdExamples: Array<unknown> = [];
export const safeTspIdExamples = t.array(TspId).decode(jsonTspIdExamples);
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
export const jsonLegExamples: Array<unknown> = [];
export const safeLegExamples = t.array(Leg).decode(jsonLegExamples);
// Terms
// The purpose of this remains a mystery
export type Terms = Terms_.Default;
export const Terms = Terms_.Default;
export const jsonTermsExamples: Array<unknown> = [];
export const safeTermsExamples = t.array(Terms).decode(jsonTermsExamples);
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
export const jsonTokenExamples: Array<unknown> = [];
export const safeTokenExamples = t.array(Token).decode(jsonTokenExamples);
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: Id;
    tspId?: TspId;
    state?: State_.BookingState;
    stateLog?: StateLog_.Default;
    fares?: Fares;
    cost?: Cost;
    leg?: Leg;
    token?: Token;
    meta?: BookingMeta_.Default;
    terms?: Terms;
    customer?: Customer_.Default & {
      identityId: Defined;
    };
    product?: Product_.Default;
    signature?: Common_.Signature;
    configurator?: Configurator;
    customerSelection?: CustomerSelection_.Default;
  } & {
    id: Defined;
    state: Defined;
    leg: Defined;
    meta: Defined;
    terms: Defined;
    token: Defined;
    customer: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      tspId: TspId,
      state: State_.BookingState,
      stateLog: StateLog_.Default,
      fares: Fares,
      cost: Cost,
      leg: Leg,
      token: Token,
      meta: BookingMeta_.Default,
      terms: Terms,
      customer: t.intersection([
        Customer_.Default,
        t.type({
          identityId: Defined,
        }),
      ]),
      product: Product_.Default,
      signature: Common_.Signature,
      configurator: Configurator,
      customerSelection: CustomerSelection_.Default,
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
      stateLog?: StateLog_.Default;
      fares?: Fares;
      cost?: Cost;
      leg?: Leg;
      token?: Token;
      meta?: BookingMeta_.Default;
      terms?: Terms;
      customer?: Customer_.Default & {
        identityId: Defined;
      };
      product?: Product_.Default;
      signature?: Common_.Signature;
      configurator?: Configurator;
      customerSelection?: CustomerSelection_.Default;
    } & {
      id: Defined;
      state: Defined;
      leg: Defined;
      meta: Defined;
      terms: Defined;
      token: Defined;
      customer: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [
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
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
