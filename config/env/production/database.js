const path = require("path");
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
    const dbUrl = env('DATABASE_URL')
    const config = parse(dbUrl);
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    };
};
