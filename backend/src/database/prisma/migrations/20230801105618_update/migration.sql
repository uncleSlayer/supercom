-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BASIC');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'BASIC';
