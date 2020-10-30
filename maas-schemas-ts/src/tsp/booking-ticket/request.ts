/*

undefined
Request schema for retrieving a ticket from booking through a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/tsp/booking-ticket/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    tspId?: Booking_.TspId;
    ticket?: string | Array<string>;
    token?: Booking_.Token;
  } & Record<string, unknown>) & {
    ticket: Defined;
    token: Defined;
    tspId: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            tspId: typeof Booking_.TspId;
            ticket: t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>;
            token: typeof Booking_.Token;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ticket: typeof Defined;
        token: typeof Defined;
        tspId: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        tspId: Booking_.TspId,
        ticket: t.union([t.string, t.array(t.string)]),
        token: Booking_.Token,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ticket: Defined,
      token: Defined,
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      tspId?: Booking_.TspId;
      ticket?: string | Array<string>;
      token?: Booking_.Token;
    } & Record<string, unknown>) & {
      ticket: Defined;
      token: Defined;
      tspId: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
