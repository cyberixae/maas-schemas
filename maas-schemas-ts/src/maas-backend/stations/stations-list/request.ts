/*

undefined
Request schema for stations list

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
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
  'http://maasglobal.com/maas-backend/stations/stations-list/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?:
      | ({
          agencyId?: Common_.AgencyId;
          lat?: UnitsGeo_.RelaxedLatitude;
          lon?: UnitsGeo_.RelaxedLatitude;
          radius?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & {
          agencyId: Defined;
          lat: Defined;
          lon: Defined;
          type: Defined;
        })
      | ({
          agencyId?: Common_.AgencyId;
          name?: string;
          count?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & {
          agencyId: Defined;
          name: Defined;
          count: Defined;
          type: Defined;
        });
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.union([
        t.intersection([
          t.partial({
            agencyId: Common_.AgencyId,
            lat: UnitsGeo_.RelaxedLatitude,
            lon: UnitsGeo_.RelaxedLatitude,
            radius: t.number,
            type: t.union([
              t.literal('origin'),
              t.literal('destination'),
              t.literal('viaAvoid'),
            ]),
          }),
          t.type({
            agencyId: Defined,
            lat: Defined,
            lon: Defined,
            type: Defined,
          }),
        ]),
        t.intersection([
          t.partial({
            agencyId: Common_.AgencyId,
            name: t.string,
            count: t.number,
            type: t.union([
              t.literal('origin'),
              t.literal('destination'),
              t.literal('viaAvoid'),
            ]),
          }),
          t.type({
            agencyId: Defined,
            name: Defined,
            count: Defined,
            type: Defined,
          }),
        ]),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?:
        | ({
            agencyId?: Common_.AgencyId;
            lat?: UnitsGeo_.RelaxedLatitude;
            lon?: UnitsGeo_.RelaxedLatitude;
            radius?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & {
            agencyId: Defined;
            lat: Defined;
            lon: Defined;
            type: Defined;
          })
        | ({
            agencyId?: Common_.AgencyId;
            name?: string;
            count?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & {
            agencyId: Defined;
            name: Defined;
            count: Defined;
            type: Defined;
          });
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
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
