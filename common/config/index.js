import env from 'dotenv';
import path from 'path';

const envImport = () => env.config({path: path.resolve(`common/config/${process.env.NODE_ENV}.env`)});

export default envImport();