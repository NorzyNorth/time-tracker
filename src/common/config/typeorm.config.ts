import { DataSource } from 'typeorm';
import { TimeTracks } from '../../time-track/entities/time-tracks.entity';
import * as path from 'path';

export const typeormConfig = () => ({
  database: AppDataSource.options
});

export const AppDataSource = new DataSource({
  type: (process.env.POSTGRES_DIALECT as any) || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT as string, 10) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'time_tracker',
  synchronize: false,
  logging: false,
  entities: [TimeTracks],
  migrations: [path.join(__dirname, '../../../database/migrations/*{.ts,.js}')]
});
