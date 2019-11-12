/*

GeoJSON Geometry
GeoJSON geometry, forked from https://github.com/fge/sample-json-schemas/ under BSD license

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

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

export const schemaId = 'http://maasglobal.com/geojson/geometry.json';
// Position
// A single position
export type Position = t.Branded<[number, number], PositionBrand>;
export const Position = t.brand(
  t.tuple([t.number, t.number]),
  (x): x is t.Branded<[number, number], PositionBrand> =>
    Array.isArray(x) === false || x.length >= 2,
  'Position',
);
export interface PositionBrand {
  readonly Position: unique symbol;
}
export const jsonPositionExamples: Array<unknown> = [null];
export const safePositionExamples = t.array(Position).decode(jsonPositionExamples);

// PositionArray
// An array of positions
export type PositionArray = t.Branded<Array<Position>, PositionArrayBrand>;
export const PositionArray = t.brand(
  t.array(Position),
  (x): x is t.Branded<Array<Position>, PositionArrayBrand> => true,
  'PositionArray',
);
export interface PositionArrayBrand {
  readonly PositionArray: unique symbol;
}
export const jsonPositionArrayExamples: Array<unknown> = [null];
export const safePositionArrayExamples = t
  .array(PositionArray)
  .decode(jsonPositionArrayExamples);

// LineString
// An array of two or more positions
export type LineString = t.Branded<PositionArray & unknown, LineStringBrand>;
export const LineString = t.brand(
  t.intersection([PositionArray, t.unknown]),
  (x): x is t.Branded<PositionArray & unknown, LineStringBrand> => true,
  'LineString',
);
export interface LineStringBrand {
  readonly LineString: unique symbol;
}
export const jsonLineStringExamples: Array<unknown> = [null];
export const safeLineStringExamples = t.array(LineString).decode(jsonLineStringExamples);

// LinearRing
// An array of four positions where the first equals the last
export type LinearRing = t.Branded<PositionArray & unknown, LinearRingBrand>;
export const LinearRing = t.brand(
  t.intersection([PositionArray, t.unknown]),
  (x): x is t.Branded<PositionArray & unknown, LinearRingBrand> => true,
  'LinearRing',
);
export interface LinearRingBrand {
  readonly LinearRing: unique symbol;
}
export const jsonLinearRingExamples: Array<unknown> = [null];
export const safeLinearRingExamples = t.array(LinearRing).decode(jsonLinearRingExamples);

// Polygon
// An array of linear rings
export type Polygon = t.Branded<Array<LinearRing>, PolygonBrand>;
export const Polygon = t.brand(
  t.array(LinearRing),
  (x): x is t.Branded<Array<LinearRing>, PolygonBrand> => true,
  'Polygon',
);
export interface PolygonBrand {
  readonly Polygon: unique symbol;
}
export const jsonPolygonExamples: Array<unknown> = [null];
export const safePolygonExamples = t.array(Polygon).decode(jsonPolygonExamples);

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {} & {
    type: Defined;
    coordinates: Defined;
  } & (unknown | unknown | unknown | unknown | unknown | unknown),
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({}),
    t.type({
      type: Defined,
      coordinates: Defined,
    }),
    t.union([t.unknown, t.unknown, t.unknown, t.unknown, t.unknown, t.unknown]),
  ]),
  (
    x,
  ): x is t.Branded<
    {} & {
      type: Defined;
      coordinates: Defined;
    } & (unknown | unknown | unknown | unknown | unknown | unknown),
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
