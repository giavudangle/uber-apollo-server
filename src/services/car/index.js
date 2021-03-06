import { type } from 'os';

const { readFileSync } = require('fs')

const schema = require('./car.schema.graphql');

const userType = readFileSync(schema).toString('utf-8')


module.exports = userType;