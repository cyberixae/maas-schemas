'use strict';

const schema = require('../../../schemas/core/components/common.json');
const customerSchema = require('../../../schemas/core/customer.json');
const { generateTestCases } = require('../../test-lib');

const { expect } = require('chai');
const main = require('../index');
const ValidationError = require('../lib/ValidationError');
const { transform } = require('../utils/transform-unicode-patterns');

describe('schema schema', () => {
  expect(main.validate(transform(schema), value)).to.exist;
}

module.exports = { generateTestCases };
