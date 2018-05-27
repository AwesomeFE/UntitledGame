import env from 'dotenv';
import path from 'path';

const { NODE_ENV, PRODUCT } = process.env;
const envImport = () => env.config({path: path.resolve(`common/config/${PRODUCT}/${NODE_ENV}.env`)});

export default envImport();