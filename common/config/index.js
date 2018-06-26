const env = require('dotenv');
const path = require('path');

// process.env.PRODUCT = 'Fantasyland';
process.env.PRODUCT = 'FantasylandAdmin';

const { NODE_ENV, PRODUCT } = process.env;
const envImport = () => env.config({path: path.resolve(`common/config/${PRODUCT}/${NODE_ENV}.env`)});

module.exports = envImport();