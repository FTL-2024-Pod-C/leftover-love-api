/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `FoodPantry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FoodPantry_username_key" ON "FoodPantry"("username");
