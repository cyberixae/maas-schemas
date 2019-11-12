/*

undefined
MaaS customer stats. Give lifetime stats of customer e.g total number of bookings and itineraries

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

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
  'http://maasglobal.com/maas-backend/customers/stats/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    lifetimeBookingsCount?: number;
    lifetimeItinerariesCount?: number;
    profileCreationTimestamp?: Units_.Time;
  } & {
    identityId: Defined;
    lifetimeBookingsCount: Defined;
    lifetimeItinerariesCount: Defined;
    profileCreationTimestamp: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      lifetimeBookingsCount: t.number,
      lifetimeItinerariesCount: t.number,
      profileCreationTimestamp: Units_.Time,
    }),
    t.type({
      identityId: Defined,
      lifetimeBookingsCount: Defined,
      lifetimeItinerariesCount: Defined,
      profileCreationTimestamp: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      lifetimeBookingsCount?: number;
      lifetimeItinerariesCount?: number;
      profileCreationTimestamp?: Units_.Time;
    } & {
      identityId: Defined;
      lifetimeBookingsCount: Defined;
      lifetimeItinerariesCount: Defined;
      profileCreationTimestamp: Defined;
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
