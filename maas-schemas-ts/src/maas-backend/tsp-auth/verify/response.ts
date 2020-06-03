/*

undefined
Response schema for tsp-auth verify

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Definitions_ from 'maas-schemas-ts/maas-backend/tsp-auth/verify/definitions';

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
  'http://maasglobal.com/maas-backend/tsp-auth/verify/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    allProductsVerified?: boolean;
    products?: Definitions_.VerifiedProducts;
    verificationFailureKey?: Definitions_.VerificationFailureKey;
  } & {
    allProductsVerified: Defined;
    products: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      allProductsVerified: t.boolean,
      products: Definitions_.VerifiedProducts,
      verificationFailureKey: Definitions_.VerificationFailureKey,
    }),
    t.type({
      allProductsVerified: Defined,
      products: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      allProductsVerified?: boolean;
      products?: Definitions_.VerifiedProducts;
      verificationFailureKey?: Definitions_.VerificationFailureKey;
    } & {
      allProductsVerified: Defined;
      products: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
