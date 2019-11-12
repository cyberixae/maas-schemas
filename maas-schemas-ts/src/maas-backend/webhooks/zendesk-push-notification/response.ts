/*

undefined
MaaS Zendesk push notification forwarder response schema.

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

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/zendesk-push-notification/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    results?: {
      successCount: Defined;
      failureCount: Defined;
    };
  } & {
    results: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      results: t.type({
        successCount: Defined,
        failureCount: Defined,
      }),
    }),
    t.type({
      results: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      results?: {
        successCount: Defined;
        failureCount: Defined;
      };
    } & {
      results: Defined;
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
