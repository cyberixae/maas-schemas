/*

undefined
MaaS subscription schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Contact_ from 'maas-schemas-ts/maas-backend/subscriptions/contact';
import * as PointCost_ from 'maas-schemas-ts/core/components/point-cost';
import * as Region_ from 'maas-schemas-ts/core/region';
import * as SubscriptionAddress_ from 'maas-schemas-ts/maas-backend/subscriptions/subscriptionAddress';
import * as SubscriptionChangeState_ from 'maas-schemas-ts/core/components/subscriptionChangeState';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscription.json';
// SubscriptionItemId
// Identifier for matching the plans (Chargebee compat.)
export type SubscriptionItemId = t.Branded<string, SubscriptionItemIdBrand>;
export const SubscriptionItemId = t.brand(
  t.string,
  (x): x is t.Branded<string, SubscriptionItemIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[^\\s\\/]{1,50}$')) !== null,
  'SubscriptionItemId',
);
export interface SubscriptionItemIdBrand {
  readonly SubscriptionItemId: unique symbol;
}
// Price
// The purpose of this remains a mystery
export type Price = Cost_.Default;
export const Price = Cost_.Default;
// Plan
// Customer subscription plan
export type Plan = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
    price?: Price;
  } & {
    id: Defined;
  },
  PlanBrand
>;
export const Plan = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
      price: Price,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
      price?: Price;
    } & {
      id: Defined;
    },
    PlanBrand
  > => true,
  'Plan',
);
export interface PlanBrand {
  readonly Plan: unique symbol;
}
// Addon
// Customer subscription add-ons
export type Addon = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
    quantity?: number;
    unitPrice?: Price;
    image?: Units_.Url;
  } & {
    id: Defined;
    quantity: Defined;
  },
  AddonBrand
>;
export const Addon = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
      quantity: t.number,
      unitPrice: Price,
      image: Units_.Url,
    }),
    t.type({
      id: Defined,
      quantity: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
      quantity?: number;
      unitPrice?: Price;
      image?: Units_.Url;
    } & {
      id: Defined;
      quantity: Defined;
    },
    AddonBrand
  > => true,
  'Addon',
);
export interface AddonBrand {
  readonly Addon: unique symbol;
}
// Coupon
// Additional coupon that may provide discounts
export type Coupon = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
  } & {
    id: Defined;
  },
  CouponBrand
>;
export const Coupon = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
    } & {
      id: Defined;
    },
    CouponBrand
  > => true,
  'Coupon',
);
export interface CouponBrand {
  readonly Coupon: unique symbol;
}
// Terms
// Terms related to this subscription
export type Terms = t.Branded<
  {
    activated?: Units_.Time;
    modified?: Units_.Time;
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
    scheduledChanges?: boolean;
  } & {
    validity: Defined;
  },
  TermsBrand
>;
export const Terms = t.brand(
  t.intersection([
    t.partial({
      activated: Units_.Time,
      modified: Units_.Time,
      validity: t.intersection([
        t.partial({
          startTime: Units_.Time,
          endTime: Units_.Time,
        }),
        t.type({
          startTime: Defined,
          endTime: Defined,
        }),
      ]),
      scheduledChanges: t.boolean,
    }),
    t.type({
      validity: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      activated?: Units_.Time;
      modified?: Units_.Time;
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
      scheduledChanges?: boolean;
    } & {
      validity: Defined;
    },
    TermsBrand
  > => true,
  'Terms',
);
export interface TermsBrand {
  readonly Terms: unique symbol;
}
// SubscriptionBase
// The purpose of this remains a mystery
export type SubscriptionBase = t.Branded<
  {
    id?: Contact_.IdentityId;
    customerId?: Contact_.IdentityId;
    plan?: Plan;
    addons?: Array<Addon>;
    coupons?: Array<Coupon>;
    terms?: Terms;
    pointCost?: PointCost_.Default;
    region?: Region_.Default;
    shippingAddress?: SubscriptionAddress_.Default;
    availability?: {};
    name?: string;
    description?: string;
    meta?: {};
    level?: number;
    wmpGrant?: number;
    active?: boolean;
    hidden?: boolean;
    selectable?: boolean;
    topUpId?: string;
    changeState?: SubscriptionChangeState_.Default;
  },
  SubscriptionBaseBrand
>;
export const SubscriptionBase = t.brand(
  t.partial({
    id: Contact_.IdentityId,
    customerId: Contact_.IdentityId,
    plan: Plan,
    addons: t.array(Addon),
    coupons: t.array(Coupon),
    terms: Terms,
    pointCost: PointCost_.Default,
    region: Region_.Default,
    shippingAddress: SubscriptionAddress_.Default,
    availability: t.type({}),
    name: t.string,
    description: t.string,
    meta: t.type({}),
    level: t.number,
    wmpGrant: t.number,
    active: t.boolean,
    hidden: t.boolean,
    selectable: t.boolean,
    topUpId: t.string,
    changeState: SubscriptionChangeState_.Default,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: Contact_.IdentityId;
      customerId?: Contact_.IdentityId;
      plan?: Plan;
      addons?: Array<Addon>;
      coupons?: Array<Coupon>;
      terms?: Terms;
      pointCost?: PointCost_.Default;
      region?: Region_.Default;
      shippingAddress?: SubscriptionAddress_.Default;
      availability?: {};
      name?: string;
      description?: string;
      meta?: {};
      level?: number;
      wmpGrant?: number;
      active?: boolean;
      hidden?: boolean;
      selectable?: boolean;
      topUpId?: string;
      changeState?: SubscriptionChangeState_.Default;
    },
    SubscriptionBaseBrand
  > => true,
  'SubscriptionBase',
);
export interface SubscriptionBaseBrand {
  readonly SubscriptionBase: unique symbol;
}
// Subscription
// The purpose of this remains a mystery
export type Subscription = SubscriptionBase;
export const Subscription = SubscriptionBase;
// SubscriptionCreatePayload
// The purpose of this remains a mystery
export type SubscriptionCreatePayload = SubscriptionBase;
export const SubscriptionCreatePayload = SubscriptionBase;
// SubscriptionUpdatePayload
// The purpose of this remains a mystery
export type SubscriptionUpdatePayload = SubscriptionBase;
export const SubscriptionUpdatePayload = SubscriptionBase;
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
