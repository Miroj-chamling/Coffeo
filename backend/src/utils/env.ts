import dotenv from "dotenv"
import z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  MONGO_URL: z.string(),
  SMTP_HOST:z.string(),
  SMTP_MAIL: z.string(),
  SMTP_PASSWORD:z.string(),
  SMTP_PORT:z.string(),
//   NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});
export const env = envSchema.parse(process.env);