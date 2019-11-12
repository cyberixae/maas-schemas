/*

undefined
Response schema for profile-webhook

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Profile_ from 'maas-schemas-ts/core/profile';

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-webhook/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    profile?: Profile_.Default;
    maas?: {};
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    profile: Profile_.Default,
    maas: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      profile?: Profile_.Default;
      maas?: {};
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
