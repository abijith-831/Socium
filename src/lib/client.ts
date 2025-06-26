// import { Pool } from 'pg';
// import dotenv from "dotenv";


// dotenv.config();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// export default pool;

// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma



// DATABASE_URL=postgres://postgres:8891@localhost:5432/Widget