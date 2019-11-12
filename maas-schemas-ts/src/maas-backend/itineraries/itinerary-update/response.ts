/*

undefined
Maas Itinerary update request

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Itinerary_ from 'maas-schemas-ts/core/itinerary';

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
  'http://maasglobal.com/maas-backend/itineraries/itinerary-update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    itinerary?: Itinerary_.Default;
  } & {
    itinerary: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      itinerary: Itinerary_.Default,
    }),
    t.type({
      itinerary: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itinerary?: Itinerary_.Default;
    } & {
      itinerary: Defined;
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
