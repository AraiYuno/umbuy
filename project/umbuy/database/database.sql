-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema project4350
-- -----------------------------------------------------
-- 
-- 

-- -----------------------------------------------------
-- Schema project4350
--
-- 
-- 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project4350` DEFAULT CHARACTER SET utf8 ;
USE `project4350` ;

-- -----------------------------------------------------
-- Table `project4350`.`advertisements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project4350`.`advertisements` (
  `advertisementId` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(50) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(750) NOT NULL,
  `price` DOUBLE NOT NULL,
  `created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `imageUrl` VARCHAR(100) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`advertisementId`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
