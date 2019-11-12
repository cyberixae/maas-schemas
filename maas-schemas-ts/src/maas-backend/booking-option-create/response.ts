/*

undefined
Response schema for booking-option-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';

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
  'http://maasglobal.com/maas-backend/booking-option-create/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  | ({
      booking?: Booking_.Default;
    } & {
      booking: Defined;
    })
  | ({
      error?: {
        message?: string;
      };
    } & {
      error: Defined;
    }),
  DefaultBrand
>;
export const Default = t.brand(
  t.union([
    t.intersection([
      t.partial({
        booking: Booking_.Default,
      }),
      t.type({
        booking: Defined,
      }),
    ]),
    t.intersection([
      t.partial({
        error: t.partial({
          message: t.string,
        }),
      }),
      t.type({
        error: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    | ({
        booking?: Booking_.Default;
      } & {
        booking: Defined;
      })
    | ({
        error?: {
          message?: string;
        };
      } & {
        error: Defined;
      }),
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
