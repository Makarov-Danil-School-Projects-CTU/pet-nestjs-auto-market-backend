// Base config 
var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

// Adding properties for each case
switch (process.env.NODE_ENV) {
  case 'development':
    // SQLite configuration
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    // SQLite configuration
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],

      // all of our migrations run before each test
      migrationsRun: true
    });
    break;
  case 'production':
    // Postgres configuration
    Object.assign(dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      // heroku special object
      ssl: {
        rejectUnauthorized: false
      }
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
