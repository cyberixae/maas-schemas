/*

undefined
Response schema for itineraries-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PaymentParameters_ from 'maas-schemas-ts/core/components/payment-parameters';
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
  'http://maasglobal.com/maas-backend/itineraries/itinerary-create/response.json';

// PaymentParameter
// The purpose of this remains a mystery
export type PaymentParameter = t.Branded<
  {
    avainpay?: PaymentParameters_.AvainpayPaymentParameters;
    stripe?: PaymentParameters_.StripePaymentParameters;
  },
  PaymentParameterBrand
>;
export const PaymentParameter = t.brand(
  t.partial({
    avainpay: PaymentParameters_.AvainpayPaymentParameters,
    stripe: PaymentParameters_.StripePaymentParameters,
  }),
  (
    x,
  ): x is t.Branded<
    {
      avainpay?: PaymentParameters_.AvainpayPaymentParameters;
      stripe?: PaymentParameters_.StripePaymentParameters;
    },
    PaymentParameterBrand
  > => true,
  'PaymentParameter',
);
export interface PaymentParameterBrand {
  readonly PaymentParameter: unique symbol;
}

// PaymentParameters
// Payment parameters for asynchronous payment methods
export type PaymentParameters = t.Branded<
  PaymentParameter | Array<PaymentParameter>,
  PaymentParametersBrand
>;
export const PaymentParameters = t.brand(
  t.union([PaymentParameter, t.array(PaymentParameter)]),
  (
    x,
  ): x is t.Branded<PaymentParameter | Array<PaymentParameter>, PaymentParametersBrand> =>
    true,
  'PaymentParameters',
);
export interface PaymentParametersBrand {
  readonly PaymentParameters: unique symbol;
}

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  | ({
      itinerary?: Itinerary_.Default;
      paymentParameters?: PaymentParameters;
    } & {
      itinerary: Defined;
    })
  | ({
      outward?: Itinerary_.Default;
      return?: Itinerary_.Default;
      paymentParameters?: PaymentParameters;
    } & {
      outward: Defined;
    }),
  DefaultBrand
>;
export const Default = t.brand(
  t.union([
    t.intersection([
      t.partial({
        itinerary: Itinerary_.Default,
        paymentParameters: PaymentParameters,
      }),
      t.type({
        itinerary: Defined,
      }),
    ]),
    t.intersection([
      t.partial({
        outward: Itinerary_.Default,
        return: Itinerary_.Default,
        paymentParameters: PaymentParameters,
      }),
      t.type({
        outward: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    | ({
        itinerary?: Itinerary_.Default;
        paymentParameters?: PaymentParameters;
      } & {
        itinerary: Defined;
      })
    | ({
        outward?: Itinerary_.Default;
        return?: Itinerary_.Default;
        paymentParameters?: PaymentParameters;
      } & {
        outward: Defined;
      }),
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
