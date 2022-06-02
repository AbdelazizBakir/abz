/*
  Warnings:

  - You are about to drop the column `createdMsg` on the `message` table. All the data in the column will be lost.
  - Added the required column `obs` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `message` DROP COLUMN `createdMsg`,
    ADD COLUMN `obs` VARCHAR(191) NOT NULL;
