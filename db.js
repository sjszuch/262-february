const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'me',
    // host: 'localhost',
    // password: 'password',
    database: 'inventory',
    port: 5432,
}  );

module.exports = pool;