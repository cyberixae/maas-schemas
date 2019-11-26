/*

undefined
The base environments object with several environment groups and related meta data

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
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

export const schemaId = 'http://maasglobal.com/environments/environments.json';
// Developer
// The purpose of this remains a mystery
export type Developer = t.Branded<
  {
    name?: Common_.PersonalName;
    email?: Common_.Email;
  } & {
    name: Defined;
  },
  DeveloperBrand
>;
export const Developer = t.brand(
  t.intersection([
    t.partial({
      name: Common_.PersonalName,
      email: Common_.Email,
    }),
    t.type({
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: Common_.PersonalName;
      email?: Common_.Email;
    } & {
      name: Defined;
    },
    DeveloperBrand
  > => true,
  'Developer',
);
export interface DeveloperBrand {
  readonly Developer: unique symbol;
}
// EnvironmentId
// The purpose of this remains a mystery
export type EnvironmentId = t.Branded<string, EnvironmentIdBrand>;
export const EnvironmentId = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentIdBrand> => true,
  'EnvironmentId',
);
export interface EnvironmentIdBrand {
  readonly EnvironmentId: unique symbol;
}
// EnvironmentUrl
// The purpose of this remains a mystery
export type EnvironmentUrl = t.Branded<string & Units_.Url, EnvironmentUrlBrand>;
export const EnvironmentUrl = t.brand(
  t.intersection([t.string, Units_.Url]),
  (x): x is t.Branded<string & Units_.Url, EnvironmentUrlBrand> =>
    typeof x !== 'string' || x.match(RegExp('^https:')) !== null,
  'EnvironmentUrl',
);
export interface EnvironmentUrlBrand {
  readonly EnvironmentUrl: unique symbol;
}
// EnvironmentLive
// Live environments are connected to actual payment and TSP services
export type EnvironmentLive = t.Branded<boolean, EnvironmentLiveBrand>;
export const EnvironmentLive = t.brand(
  t.boolean,
  (x): x is t.Branded<boolean, EnvironmentLiveBrand> => true,
  'EnvironmentLive',
);
export interface EnvironmentLiveBrand {
  readonly EnvironmentLive: unique symbol;
}
// EnvironmentName
// The purpose of this remains a mystery
export type EnvironmentName = t.Branded<string, EnvironmentNameBrand>;
export const EnvironmentName = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentNameBrand> => true,
  'EnvironmentName',
);
export interface EnvironmentNameBrand {
  readonly EnvironmentName: unique symbol;
}
// EnvironmentDescription
// The purpose of this remains a mystery
export type EnvironmentDescription = t.Branded<string, EnvironmentDescriptionBrand>;
export const EnvironmentDescription = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentDescriptionBrand> => true,
  'EnvironmentDescription',
);
export interface EnvironmentDescriptionBrand {
  readonly EnvironmentDescription: unique symbol;
}
// Environment
// The purpose of this remains a mystery
export type Environment = t.Branded<
  {
    id?: EnvironmentId;
    api?: EnvironmentUrl;
    live?: EnvironmentLive;
    contact?: Developer;
    name?: EnvironmentName;
    description?: EnvironmentDescription;
  } & {
    id: Defined;
    api: Defined;
    live: Defined;
    contact: Defined;
  },
  EnvironmentBrand
>;
export const Environment = t.brand(
  t.intersection([
    t.partial({
      id: EnvironmentId,
      api: EnvironmentUrl,
      live: EnvironmentLive,
      contact: Developer,
      name: EnvironmentName,
      description: EnvironmentDescription,
    }),
    t.type({
      id: Defined,
      api: Defined,
      live: Defined,
      contact: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: EnvironmentId;
      api?: EnvironmentUrl;
      live?: EnvironmentLive;
      contact?: Developer;
      name?: EnvironmentName;
      description?: EnvironmentDescription;
    } & {
      id: Defined;
      api: Defined;
      live: Defined;
      contact: Defined;
    },
    EnvironmentBrand
  > => true,
  'Environment',
);
export interface EnvironmentBrand {
  readonly Environment: unique symbol;
}
export const examplesEnvironmentJson: Array<unknown> = [
  {
    id: 'production',
    api: 'https://production.example.com/api/',
    live: true,
    contact: { name: 'Alisha Admin', email: 'admin@example.com' },
    description: 'Production environment',
  },
];
export const examplesEnvironment = t.array(Environment).decode(examplesEnvironmentJson);
// DevEnvironment
// The purpose of this remains a mystery
export type DevEnvironment = t.Branded<
  Environment &
    ({
      live?: false;
    } & {
      live: Defined;
    }),
  DevEnvironmentBrand
>;
export const DevEnvironment = t.brand(
  t.intersection([
    Environment,
    t.intersection([
      t.partial({
        live: t.literal(false),
      }),
      t.type({
        live: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    Environment &
      ({
        live?: false;
      } & {
        live: Defined;
      }),
    DevEnvironmentBrand
  > => true,
  'DevEnvironment',
);
export interface DevEnvironmentBrand {
  readonly DevEnvironment: unique symbol;
}
export const examplesDevEnvironmentJson: Array<unknown> = [
  {
    id: 'testing',
    api: 'https://testing.example.com/api/',
    live: false,
    contact: { name: 'Alisha Admin' },
    description: 'Testing environment',
  },
];
export const examplesDevEnvironment = t
  .array(DevEnvironment)
  .decode(examplesDevEnvironmentJson);
// EnvironmentGroupName
// The purpose of this remains a mystery
export type EnvironmentGroupName = t.Branded<string, EnvironmentGroupNameBrand>;
export const EnvironmentGroupName = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupNameBrand> => true,
  'EnvironmentGroupName',
);
export interface EnvironmentGroupNameBrand {
  readonly EnvironmentGroupName: unique symbol;
}
// EnvironmentGroupDescription
// The purpose of this remains a mystery
export type EnvironmentGroupDescription = t.Branded<
  string,
  EnvironmentGroupDescriptionBrand
>;
export const EnvironmentGroupDescription = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupDescriptionBrand> => true,
  'EnvironmentGroupDescription',
);
export interface EnvironmentGroupDescriptionBrand {
  readonly EnvironmentGroupDescription: unique symbol;
}
// EnvironmentGroup
// The purpose of this remains a mystery
export type EnvironmentGroup = t.Branded<
  {
    name?: EnvironmentGroupName;
    envs?: Array<Environment>;
    description?: EnvironmentGroupDescription;
  } & {
    name: Defined;
    envs: Defined;
  },
  EnvironmentGroupBrand
>;
export const EnvironmentGroup = t.brand(
  t.intersection([
    t.partial({
      name: EnvironmentGroupName,
      envs: t.array(Environment),
      description: EnvironmentGroupDescription,
    }),
    t.type({
      name: Defined,
      envs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: EnvironmentGroupName;
      envs?: Array<Environment>;
      description?: EnvironmentGroupDescription;
    } & {
      name: Defined;
      envs: Defined;
    },
    EnvironmentGroupBrand
  > => true,
  'EnvironmentGroup',
);
export interface EnvironmentGroupBrand {
  readonly EnvironmentGroup: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    index?: Array<EnvironmentGroup>;
  } & {
    index: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      index: t.array(EnvironmentGroup),
    }),
    t.type({
      index: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      index?: Array<EnvironmentGroup>;
    } & {
      index: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}
export const examplesDefaultJson: Array<unknown> = [
  {
    index: [
      {
        name: 'Core Environments',
        envs: [
          {
            id: 'production',
            api: 'https://production.example.com/api/',
            live: true,
            contact: { name: 'Alisha Admin', email: 'admin@example.com' },
            description: 'Production environment',
          },
          {
            id: 'testing',
            api: 'https://testing.example.com/api/',
            live: false,
            contact: { name: 'Alisha Admin' },
            description: 'Testing environment',
          },
        ],
      },
      {
        name: 'Development Environments',
        envs: [
          {
            id: 'fantasyTopping',
            api: 'https://fantasy.example.com/api/',
            live: false,
            contact: { name: 'Dennis Developer' },
            name: 'Fantasy Topping',
            description: 'Add support for pizza customization',
          },
        ],
      },
    ],
  },
];
export const examplesDefault = t.array(Default).decode(examplesDefaultJson);

export default Default;

// Success
