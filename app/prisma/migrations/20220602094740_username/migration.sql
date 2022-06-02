/*
  Warnings:

  - You are about to drop the column `description` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `context` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contact` DROP COLUMN `description`,
    DROP COLUMN `slug`,
    DROP COLUMN `title`,
    DROP COLUMN `year`,
    ADD COLUMN `context` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
