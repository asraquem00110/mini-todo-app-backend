import { config } from 'dotenv';
import { z } from 'zod';
config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NODE_PORT: z.coerce.number().default(3000),
  PROTOCOL: z.enum(['http', 'https']).default('http'),
});

export const envConfig = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NODE_PORT: process.env.NODE_PORT,
  PROTOCOL: process.env.PROTOCOL,
});

export type EnvConfig = z.infer<typeof envSchema>;
export const isHttps = envConfig.PROTOCOL === 'https';
