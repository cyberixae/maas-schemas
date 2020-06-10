/*

undefined
MaaS customer favorite location adding response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as PartialFavoriteLocation_ from '../../../../core/partialFavoriteLocation';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/favorite-locations/add/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    favoriteLocation?: PartialFavoriteLocation_.PartialFavoriteLocation;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.partial({
    favoriteLocation: PartialFavoriteLocation_.PartialFavoriteLocation,
  }),
  (
    x,
  ): x is t.Branded<
    {
      favoriteLocation?: PartialFavoriteLocation_.PartialFavoriteLocation;
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
