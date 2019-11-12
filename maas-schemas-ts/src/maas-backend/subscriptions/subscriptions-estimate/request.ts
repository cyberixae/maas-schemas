/*

undefined
Request schema for subscriptions-estimate

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';
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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-estimate/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    immediate?: boolean;
    replace?: boolean;
    payload?: Subscription_.SubscriptionUpdatePayload;
    headers?: ApiCommon_.Headers;
  } & {
    customerId: Defined;
    userId: Defined;
    payload: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      immediate: t.boolean,
      replace: t.boolean,
      payload: Subscription_.SubscriptionUpdatePayload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: Defined,
      userId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      immediate?: boolean;
      replace?: boolean;
      payload?: Subscription_.SubscriptionUpdatePayload;
      headers?: ApiCommon_.Headers;
    } & {
      customerId: Defined;
      userId: Defined;
      payload: Defined;
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
