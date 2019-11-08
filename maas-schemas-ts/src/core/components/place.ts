/*

undefined
A place, as a location-name pair with name and address

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';
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

export const schemaId = 'http://maasglobal.com/core/components/place.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {} & {
    lat: Defined;
    lon: Defined;
  } & (UnitsGeo_.RelaxedLocation & {
      name?: Address_.PlaceName;
      address?: Address_.ComponentAddress;
      localeAddress?: string;
      stopId?: string;
      stopCode?: string;
      stationId?: string;
      facilities?: Array<string>;
      openingHours?: Station_.OpeningHours;
      zone?: Station_.Zone;
    }),
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({}),
    t.type({
      lat: Defined,
      lon: Defined,
    }),
    t.intersection([
      UnitsGeo_.RelaxedLocation,
      t.partial({
        name: Address_.PlaceName,
        address: Address_.ComponentAddress,
        localeAddress: t.string,
        stopId: t.string,
        stopCode: t.string,
        stationId: t.string,
        facilities: t.array(t.string),
        openingHours: Station_.OpeningHours,
        zone: Station_.Zone,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {} & {
      lat: Defined;
      lon: Defined;
    } & (UnitsGeo_.RelaxedLocation & {
        name?: Address_.PlaceName;
        address?: Address_.ComponentAddress;
        localeAddress?: string;
        stopId?: string;
        stopCode?: string;
        stationId?: string;
        facilities?: Array<string>;
        openingHours?: Station_.OpeningHours;
        zone?: Station_.Zone;
      }),
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
