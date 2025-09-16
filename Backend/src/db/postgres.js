const app = express();

const { Pool } = require('pg');

const pool = new Pool(); // reads from process.env

