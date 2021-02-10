/*

undefined
MaaS customer schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Fare_ from './components/fare';
import * as Common_ from './components/common';
import * as Address_ from './components/address';
import * as I18n_ from './components/i18n';
import * as PersonalDocument_ from './personal-document';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/core/customer.json';

// Balances
// The purpose of this remains a mystery
export type Balances = t.Branded<
  Record<Units_.Currency | Fare_.TokenId | Common_.MetaCurrencyWMP, unknown> &
    Record<
      string,
      {
        currency?: Units_.Currency | Common_.MetaCurrencyTOKEN | Common_.MetaCurrencyWMP;
        amount?: number;
        tokenId?: Fare_.TokenId;
      } & {
        currency: Defined;
        amount: Defined;
      }
    >,
  BalancesBrand
>;
export type BalancesC = t.BrandC<
  t.IntersectionC<
    [
      t.RecordC<
        t.UnionC<
          [typeof Units_.Currency, typeof Fare_.TokenId, typeof Common_.MetaCurrencyWMP]
        >,
        t.UnknownC
      >,
      t.RecordC<
        t.StringC,
        t.IntersectionC<
          [
            t.PartialC<{
              currency: t.UnionC<
                [
                  typeof Units_.Currency,
                  typeof Common_.MetaCurrencyTOKEN,
                  typeof Common_.MetaCurrencyWMP,
                ]
              >;
              amount: t.NumberC;
              tokenId: typeof Fare_.TokenId;
            }>,
            t.TypeC<{
              currency: typeof Defined;
              amount: typeof Defined;
            }>,
          ]
        >
      >,
    ]
  >,
  BalancesBrand
>;
export const Balances: BalancesC = t.brand(
  t.intersection([
    t.record(
      t.union([Units_.Currency, Fare_.TokenId, Common_.MetaCurrencyWMP]),
      t.unknown,
    ),
    t.record(
      t.string,
      t.intersection([
        t.partial({
          currency: t.union([
            Units_.Currency,
            Common_.MetaCurrencyTOKEN,
            Common_.MetaCurrencyWMP,
          ]),
          amount: t.number,
          tokenId: Fare_.TokenId,
        }),
        t.type({
          currency: Defined,
          amount: Defined,
        }),
      ]),
    ),
  ]),
  (
    x,
  ): x is t.Branded<
    Record<Units_.Currency | Fare_.TokenId | Common_.MetaCurrencyWMP, unknown> &
      Record<
        string,
        {
          currency?:
            | Units_.Currency
            | Common_.MetaCurrencyTOKEN
            | Common_.MetaCurrencyWMP;
          amount?: number;
          tokenId?: Fare_.TokenId;
        } & {
          currency: Defined;
          amount: Defined;
        }
      >,
    BalancesBrand
  > => true,
  'Balances',
);
export interface BalancesBrand {
  readonly Balances: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Balances)).decodeSync(examplesBalances) // => examplesBalances */
export const examplesBalances: NonEmptyArray<Balances> = ([
  {
    WMP: { currency: 'WMP', amount: 1234 },
    'cx-test-token_v2': { currency: 'TOKEN', tokenId: 'cx-test-token_v2', amount: 1 },
  },
] as unknown) as NonEmptyArray<Balances>;
/** require('io-ts-validator').validator(Balances).decodeSync(defaultBalances) // => defaultBalances */
export const defaultBalances: Balances = ({} as unknown) as Balances;

// Customer
// The default export. More information at the top.
export type Customer = t.Branded<
  {
    identityId?: Units_.IdentityId;
    honorifics?: string;
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    firstNameLocalized?: Common_.PersonalName;
    lastNameLocalized?: Common_.PersonalName;
    sex?: string;
    phone?: Common_.Phone;
    email?: Common_.Email;
    address?: Address_.Address;
    city?: Address_.City;
    state?: Address_.State;
    country?: Address_.Country;
    zipCode?: Address_.ZipCode;
    locale?: I18n_.Locale;
    appInstanceId?: Common_.AppInstanceId;
    opaqueId?: Common_.OpaqueId;
    clientId?: Common_.ClientId;
    dob?: boolean | Units_.IsoDate;
    ssid?: boolean | Common_.Ssid;
    documents?: Array<PersonalDocument_.PersonalDocument>;
    balances?: Balances;
    referral?: {
      code?: string;
    };
    subscriberType?: string;
    authToken?: Common_.EncodedQueryParam;
    cugHome?: string;
  },
  CustomerBrand
>;
export type CustomerC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_.IdentityId;
    honorifics: t.StringC;
    firstName: typeof Common_.PersonalName;
    lastName: typeof Common_.PersonalName;
    firstNameLocalized: typeof Common_.PersonalName;
    lastNameLocalized: typeof Common_.PersonalName;
    sex: t.StringC;
    phone: typeof Common_.Phone;
    email: typeof Common_.Email;
    address: typeof Address_.Address;
    city: typeof Address_.City;
    state: typeof Address_.State;
    country: typeof Address_.Country;
    zipCode: typeof Address_.ZipCode;
    locale: typeof I18n_.Locale;
    appInstanceId: typeof Common_.AppInstanceId;
    opaqueId: typeof Common_.OpaqueId;
    clientId: typeof Common_.ClientId;
    dob: t.UnionC<[t.BooleanC, typeof Units_.IsoDate]>;
    ssid: t.UnionC<[t.BooleanC, typeof Common_.Ssid]>;
    documents: t.ArrayC<typeof PersonalDocument_.PersonalDocument>;
    balances: typeof Balances;
    referral: t.PartialC<{
      code: t.StringC;
    }>;
    subscriberType: t.StringC;
    authToken: typeof Common_.EncodedQueryParam;
    cugHome: t.StringC;
  }>,
  CustomerBrand
>;
export const Customer: CustomerC = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    honorifics: t.string,
    firstName: Common_.PersonalName,
    lastName: Common_.PersonalName,
    firstNameLocalized: Common_.PersonalName,
    lastNameLocalized: Common_.PersonalName,
    sex: t.string,
    phone: Common_.Phone,
    email: Common_.Email,
    address: Address_.Address,
    city: Address_.City,
    state: Address_.State,
    country: Address_.Country,
    zipCode: Address_.ZipCode,
    locale: I18n_.Locale,
    appInstanceId: Common_.AppInstanceId,
    opaqueId: Common_.OpaqueId,
    clientId: Common_.ClientId,
    dob: t.union([t.boolean, Units_.IsoDate]),
    ssid: t.union([t.boolean, Common_.Ssid]),
    documents: t.array(PersonalDocument_.PersonalDocument),
    balances: Balances,
    referral: t.partial({
      code: t.string,
    }),
    subscriberType: t.string,
    authToken: Common_.EncodedQueryParam,
    cugHome: t.string,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      honorifics?: string;
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      firstNameLocalized?: Common_.PersonalName;
      lastNameLocalized?: Common_.PersonalName;
      sex?: string;
      phone?: Common_.Phone;
      email?: Common_.Email;
      address?: Address_.Address;
      city?: Address_.City;
      state?: Address_.State;
      country?: Address_.Country;
      zipCode?: Address_.ZipCode;
      locale?: I18n_.Locale;
      appInstanceId?: Common_.AppInstanceId;
      opaqueId?: Common_.OpaqueId;
      clientId?: Common_.ClientId;
      dob?: boolean | Units_.IsoDate;
      ssid?: boolean | Common_.Ssid;
      documents?: Array<PersonalDocument_.PersonalDocument>;
      balances?: Balances;
      referral?: {
        code?: string;
      };
      subscriberType?: string;
      authToken?: Common_.EncodedQueryParam;
      cugHome?: string;
    },
    CustomerBrand
  > => true,
  'Customer',
);
export interface CustomerBrand {
  readonly Customer: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Customer)).decodeSync(examplesCustomer) // => examplesCustomer */
export const examplesCustomer: NonEmptyArray<Customer> = ([
  {
    identityId: 'eu-west-1:4828507e-683f-41bf-9d87-689808fbf958',
    id: 1234,
    favoriteLocations: [],
    phone: '+358407654321',
    email: 'bob.customer@example.com',
    honorifics: 'mr',
    sex: 'male',
    firstName: 'Bob',
    lastName: 'Customer',
    created: 1553687004207,
    modified: 1553688004207,
    paymentMethod: { type: 'unknown', valid: false },
    subscriptionInstance: {
      id: 10,
      name: 'Whim to Go',
      plan: { id: 'fi-whim-payg_v2' },
      addons: { '0': 'eur-whim-rollover-100_v1', '1': 'fi-whim-car' },
      region: {
        id: 'fi-helsinki',
        name: 'Helsinki Region',
        active: true,
        hidden: false,
        created: '2019-03-27T14:00:00.12345+00:00',
        zipCode: '00100',
        currency: 'EUR',
        location: { lat: 60.1699, lon: 24.9384 },
        geometryId: 2,
        countryCode: 'FI',
        countryDefault: true,
      },
      coupons: [],
      topUpId: 'fi-whim-top-up',
      wmpGrant: 0,
      pointCost: 0.01,
      description: 'Pay for each trip as you go',
    },
    balances: {
      WMP: { currency: 'WMP', amount: 1234 },
      'cx-test-token_v2': { currency: 'TOKEN', tokenId: 'cx-test-token_v2', amount: 1 },
    },
    referral: { code: 'XXXX-XXXX-XXXX-XXXX' },
    regionId: 'fi-helsinki',
    region: {
      id: 'fi-helsinki',
      name: 'Helsinki Region',
      countryCode: 'FI',
      countryDefault: true,
      zipCode: '00100',
      location: { lat: 60.1699, lon: 24.9384 },
      active: true,
      hidden: false,
      geometryId: 2,
      created: 1553687004207,
      modified: 0,
      currency: 'EUR',
    },
  },
] as unknown) as NonEmptyArray<Customer>;

export default Customer;

// Success
