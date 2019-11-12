/*

undefined
MaaS stations query response schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Station_ from 'maas-schemas-ts/core/components/station';

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

export const schemaId = 'http://maasglobal.com/tsp/stations-list/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    stations?: Array<
      {
        id?: Station_.Id;
        code?: Station_.Code;
        name?: Station_.Name;
        location?: Station_.Location;
        agencyId?: Station_.AgencyId;
        services?: Station_.Services;
        address?: Station_.Address;
        city?: Station_.City;
        country?: Station_.Country;
        zone?: Station_.Zone;
        platformCode?: Station_.PlatformCode;
      } & {
        id: Defined;
        location: Defined;
        agencyId: Defined;
        services: Defined;
      }
    >;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    stations: t.array(
      t.intersection([
        t.partial({
          id: Station_.Id,
          code: Station_.Code,
          name: Station_.Name,
          location: Station_.Location,
          agencyId: Station_.AgencyId,
          services: Station_.Services,
          address: Station_.Address,
          city: Station_.City,
          country: Station_.Country,
          zone: Station_.Zone,
          platformCode: Station_.PlatformCode,
        }),
        t.type({
          id: Defined,
          location: Defined,
          agencyId: Defined,
          services: Defined,
        }),
      ]),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      stations?: Array<
        {
          id?: Station_.Id;
          code?: Station_.Code;
          name?: Station_.Name;
          location?: Station_.Location;
          agencyId?: Station_.AgencyId;
          services?: Station_.Services;
          address?: Station_.Address;
          city?: Station_.City;
          country?: Station_.Country;
          zone?: Station_.Zone;
          platformCode?: Station_.PlatformCode;
        } & {
          id: Defined;
          location: Defined;
          agencyId: Defined;
          services: Defined;
        }
      >;
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
