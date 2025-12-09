export const typeormConfig = () => ({
  database: {
    type: process.env.POSTGRES_DIALECT,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: false,
    synchronize: false,
    logging: false,
    migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
    entities: []
  }
});
