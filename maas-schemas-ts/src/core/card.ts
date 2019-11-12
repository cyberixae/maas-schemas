/*

undefined
MaaS region schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Address_ from 'maas-schemas-ts/core/components/address';

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

export const schemaId = 'http://maasglobal.com/core/card.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    issuer?: string;
    expiryMonth?: number;
    expiryYear?: number;
    maskedNumber?: string;
    fundingType?: string &
      ('credit' | 'debit' | 'prepaid' | 'not_known' | 'not_applicable');
    billingCity?: Address_.City;
    billingCountry?: Address_.Country;
    billingZip?: Address_.ZipCode;
  } & {
    id: Defined;
    customerId: Defined;
    status: Defined;
    valid: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      issuer: t.string,
      expiryMonth: t.number,
      expiryYear: t.number,
      maskedNumber: t.string,
      fundingType: t.intersection([
        t.string,
        t.union([
          t.literal('credit'),
          t.literal('debit'),
          t.literal('prepaid'),
          t.literal('not_known'),
          t.literal('not_applicable'),
        ]),
      ]),
      billingCity: Address_.City,
      billingCountry: Address_.Country,
      billingZip: Address_.ZipCode,
    }),
    t.type({
      id: Defined,
      customerId: Defined,
      status: Defined,
      valid: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      issuer?: string;
      expiryMonth?: number;
      expiryYear?: number;
      maskedNumber?: string;
      fundingType?: string &
        ('credit' | 'debit' | 'prepaid' | 'not_known' | 'not_applicable');
      billingCity?: Address_.City;
      billingCountry?: Address_.Country;
      billingZip?: Address_.ZipCode;
    } & {
      id: Defined;
      customerId: Defined;
      status: Defined;
      valid: Defined;
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
