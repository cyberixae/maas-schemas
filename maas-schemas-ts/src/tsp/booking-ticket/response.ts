/*

undefined
Response schema for retrieving a ticket from booking through a TSP adapter

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

export const schemaId = 'http://maasglobal.com/tsp/bookings-ticket/response.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    ticket?: string;
    type?: string & ('html' | 'pdf' | 'svg');
    contentType?: string & ('application/pdf' | 'image/svg+xml' | 'text/html');
    refreshAt?: Units_.Time;
  } & {
    ticket: Defined;
    type: Defined;
    contentType: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      ticket: t.string,
      type: t.intersection([
        t.string,
        t.union([t.literal('html'), t.literal('pdf'), t.literal('svg')]),
      ]),
      contentType: t.intersection([
        t.string,
        t.union([
          t.literal('application/pdf'),
          t.literal('image/svg+xml'),
          t.literal('text/html'),
        ]),
      ]),
      refreshAt: Units_.Time,
    }),
    t.type({
      ticket: Defined,
      type: Defined,
      contentType: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      ticket?: string;
      type?: string & ('html' | 'pdf' | 'svg');
      contentType?: string & ('application/pdf' | 'image/svg+xml' | 'text/html');
      refreshAt?: Units_.Time;
    } & {
      ticket: Defined;
      type: Defined;
      contentType: Defined;
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
