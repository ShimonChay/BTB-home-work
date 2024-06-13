import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  SECRET_ACCESS_TOKEN: process.env.SECRET_ACCESS_TOKEN || 'chay@@@',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173'
} 