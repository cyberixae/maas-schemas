/*

undefined
Request schema for auth-sms-request-code

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
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
  'http://maasglobal.com/maas-backend/auth/auth-sms-request.code/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    payload?: {
      phone?: Common_.RawPhone;
    } & {
      phone: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          phone: Common_.RawPhone,
        }),
        t.type({
          phone: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        phone?: Common_.RawPhone;
      } & {
        phone: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const jsonDefaultExamples: Array<unknown> = [];
export const safeDefaultExamples = t.array(Default).decode(jsonDefaultExamples);

export default Default;

// Success
