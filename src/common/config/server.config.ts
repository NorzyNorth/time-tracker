import { ServerMode } from '../types/server-mods.type';

export const serverConfig = () => ({
  server: {
    port: process.env.SERVER_PORT ?? 3000,
    mode: (process.env.SERVER_MODE ?? 'dev') as ServerMode
  },

  swagger: {
    user: process.env.SWAGGER_USER ?? 'admin',
    password: process.env.SWAGGER_PASSWORD ?? 'admin'
  },

  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: process.env.REDIS_PORT ?? 6379,
    password: process.env.REDIS_PASSWORD ?? ''
  },

  telegraf: {
    token: process.env.TELEGRAM_BOT_TOKEN ?? ''
  }
});
