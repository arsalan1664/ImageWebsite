import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as any as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;

// const prisma = new PrismaClient();

// export const db = prisma;
