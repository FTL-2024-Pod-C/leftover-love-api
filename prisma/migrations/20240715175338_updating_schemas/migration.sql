/*
  Warnings:

  - You are about to drop the column `photo` on the `Listing` table. All the data in the column will be lost.
  - Made the column `description` on table `FoodPantry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profile_photo` on table `FoodPantry` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `photo_url` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Listing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profile_photo` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FoodPantry" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "profile_photo" SET NOT NULL;

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "photo",
ADD COLUMN     "photo_url" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "profile_photo" SET NOT NULL;
