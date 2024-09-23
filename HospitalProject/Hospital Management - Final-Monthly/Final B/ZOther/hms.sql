/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.11-MariaDB : Database - hms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`hms` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `hms`;

/*Table structure for table `appointments` */

DROP TABLE IF EXISTS `appointments`;

CREATE TABLE `appointments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `age` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `date` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6u6s6egu60m2cbdjno44jbipa` (`doctor_id`),
  KEY `FK886ced1atxgvnf1o3oxtj5m4s` (`user_id`),
  CONSTRAINT `FK6u6s6egu60m2cbdjno44jbipa` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK886ced1atxgvnf1o3oxtj5m4s` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `appointments` */

insert  into `appointments`(`id`,`age`,`birthday`,`date`,`email`,`gender`,`name`,`notes`,`phone`,`time`,`doctor_id`,`user_id`) values 
(1,'24','2024-09-12','2024-09-25','sabab239.1@gmail.com','Male','Shabab Ahmed','TEST','01710295968','10:00:00.000000',NULL,1),
(2,'24','2024-09-04','2024-09-25','sabab239.1@gmail.com','Male','Shabab Ahmed','TEST','01710295968','09:30:00.000000',NULL,NULL);

/*Table structure for table `bills` */

DROP TABLE IF EXISTS `bills`;

CREATE TABLE `bills` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount_paid` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_date` datetime(6) DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` int(11) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `patient_id` bigint(20) NOT NULL,
  `pharmacist_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd88qt0tci2ldbdfoxf3jwo8ex` (`doctor_id`),
  KEY `FKcx8jlvokigwpm7p31mp010tf` (`patient_id`),
  KEY `FKom9su2loms1fxtaf5phpuvkf1` (`pharmacist_id`),
  CONSTRAINT `FKcx8jlvokigwpm7p31mp010tf` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKd88qt0tci2ldbdfoxf3jwo8ex` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKom9su2loms1fxtaf5phpuvkf1` FOREIGN KEY (`pharmacist_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `bills` */

/*Table structure for table `departments` */

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `departments` */

insert  into `departments`(`id`,`department_name`,`description`) values 
(1,'Cardiology','Department for heart-related issues');

/*Table structure for table `diagnostics` */

DROP TABLE IF EXISTS `diagnostics`;

CREATE TABLE `diagnostics` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `test_date` datetime(6) DEFAULT NULL,
  `test_result` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsvqrfpgsyk9ldau6sslrfpd1g` (`doctor_id`),
  KEY `FK5i4ajlrsscp591luyt8as3okr` (`patient_id`),
  CONSTRAINT `FK5i4ajlrsscp591luyt8as3okr` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKsvqrfpgsyk9ldau6sslrfpd1g` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `diagnostics` */

/*Table structure for table `manufacturers` */

DROP TABLE IF EXISTS `manufacturers`;

CREATE TABLE `manufacturers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manufacturer_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `manufacturers` */

insert  into `manufacturers`(`id`,`address`,`contact_number`,`created_at`,`deleted_at`,`email`,`manufacturer_name`,`updated_at`) values 
(1,'Dhaka City','1234567890','2024-09-23 10:54:41.688632',NULL,'contact@abc.com','ABC Pharmaceuticals','2024-09-23 10:54:41.688632'),
(2,'Dhaka City 1','1234567890-1','2024-09-23 10:55:20.657081',NULL,'contact@one.com','One Pharmaceuticals','2024-09-23 11:12:28.644201'),
(3,'Dhaka City 2','1234567890-2','2024-09-23 10:56:42.234064',NULL,'contact@two.com','Two Pharmaceuticals','2024-09-23 10:56:42.234064'),
(4,'Dhaka City 3','1234567890-3','2024-09-23 10:57:01.034153',NULL,'contact@three.com','Three Pharmaceuticals','2024-09-23 10:57:01.034153'),
(5,'Dhaka City 4','1234567890-4','2024-09-23 10:57:20.657155',NULL,'contact@four.com','Four Pharmaceuticals','2024-09-23 10:57:20.657155'),
(6,'Dhaka City 5','1234567890-5','2024-09-23 10:57:36.674868','2024-09-23 11:05:49.396905','contact@five.com','Five Pharmaceuticals','2024-09-23 10:57:36.674868'),
(7,'Dhaka City 6','1234567890-6','2024-09-23 11:08:44.746292',NULL,'contact@six.com','Six Pharmaceuticals','2024-09-23 11:08:44.746292');

/*Table structure for table `medicines` */

DROP TABLE IF EXISTS `medicines`;

CREATE TABLE `medicines` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `dosage_form` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instructions` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_strength` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `manufacturer_id` bigint(20) DEFAULT NULL,
  `prescription_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtll02mqten1cvmn7wcqpxmwgv` (`manufacturer_id`),
  KEY `FKrqhwsxfcnuyfqxueeitym2t4w` (`prescription_id`),
  CONSTRAINT `FKrqhwsxfcnuyfqxueeitym2t4w` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `FKtll02mqten1cvmn7wcqpxmwgv` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `medicines` */

insert  into `medicines`(`id`,`created_at`,`dosage_form`,`instructions`,`medicine_name`,`medicine_strength`,`price`,`updated_at`,`manufacturer_id`,`prescription_id`) values 
(1,'2024-09-23 10:00:00.000000','Tablet','Take with food','Aspirin','500mg',20,'2024-09-23 10:00:00.000000',1,NULL),
(3,'2024-09-23 11:29:16.979575','Tablet','Take with food','Aspirin','750mg',30,'2024-09-23 11:29:16.979575',1,NULL),
(4,'2024-09-23 11:35:36.948114','Tablet','Take with water','Ibuprofen','500mg',30,'2024-09-23 11:35:36.948114',3,NULL),
(5,'2024-09-23 11:54:33.456660','Tablet','Take with food','Ibuprofen','400mg',18,'2024-09-23 12:00:00.529285',3,NULL);

/*Table structure for table `prescriptions` */

DROP TABLE IF EXISTS `prescriptions`;

CREATE TABLE `prescriptions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prescription_date` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2hdpvkpjjx3plf21194oxjskt` (`doctor_id`),
  KEY `FK7sia9wnwh9j5hwrta9k8q0rbq` (`patient_id`),
  CONSTRAINT `FK2hdpvkpjjx3plf21194oxjskt` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK7sia9wnwh9j5hwrta9k8q0rbq` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `prescriptions` */

/*Table structure for table `reports` */

DROP TABLE IF EXISTS `reports`;

CREATE TABLE `reports` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_finalized` bit(1) NOT NULL,
  `report_name` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by` bigint(20) NOT NULL,
  `diagnostics_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1rtk3jxoltr9pkb3bw0y20tvf` (`created_by`),
  KEY `FK4t5r473pmt6lsharvtactqko4` (`diagnostics_id`),
  CONSTRAINT `FK1rtk3jxoltr9pkb3bw0y20tvf` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  CONSTRAINT `FK4t5r473pmt6lsharvtactqko4` FOREIGN KEY (`diagnostics_id`) REFERENCES `diagnostics` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `reports` */

/*Table structure for table `tests` */

DROP TABLE IF EXISTS `tests`;

CREATE TABLE `tests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `instructions` varchar(255) DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `test_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `diagnostics_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4j986r6lct28wn79mx7yqgnpa` (`diagnostics_id`),
  CONSTRAINT `FK4j986r6lct28wn79mx7yqgnpa` FOREIGN KEY (`diagnostics_id`) REFERENCES `diagnostics` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tests` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(11) NOT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `cell` int(11) NOT NULL,
  `doctor_degree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_license` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_speciality` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_degree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_license` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_speciality` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ADMIN','DOCTOR','NURSE','PATIENT','PHARMACIST','RECEPTIONIST') COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  KEY `FKsbg59w8q63i0oo53rlgvlcnjq` (`department_id`),
  CONSTRAINT `FKsbg59w8q63i0oo53rlgvlcnjq` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`address`,`age`,`birthday`,`cell`,`doctor_degree`,`doctor_license`,`doctor_speciality`,`email`,`gender`,`image`,`name`,`nurse_degree`,`nurse_license`,`nurse_speciality`,`password`,`role`,`department_id`) values 
(1,'Azimpur',25,NULL,1521417316,NULL,NULL,NULL,'admin@gmail.com','Male',NULL,'Admin',NULL,NULL,NULL,'$2a$12$RZPNlMTk4yH8BngDSMoQGudJpqQt.rlbh2xPHPv3mPV2Njg.vcA2a','ADMIN',NULL),
(2,'Dhaka',26,'2024-09-01 06:00:00.000000',1200000000,NULL,NULL,NULL,'patient@gmail.com','male',NULL,'Patient',NULL,NULL,NULL,NULL,'PATIENT',NULL),
(4,'Dhaka',40,'2024-09-03 06:00:00.000000',1478520,'Okay','Okay','Okay','doctor@gmail.com','male',NULL,'Doctor',NULL,NULL,NULL,NULL,'DOCTOR',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
