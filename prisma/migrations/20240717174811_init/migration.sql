/*
  Warnings:

  - Added the required column `password` to the `FoodPantry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `FoodPantry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodPantry" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "profile_photo" DROP NOT NULL;
