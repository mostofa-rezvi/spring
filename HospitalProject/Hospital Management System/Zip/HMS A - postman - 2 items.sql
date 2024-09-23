-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hms
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `age` varchar(255) DEFAULT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `deparatments` int DEFAULT NULL,
  `doctors` bigint DEFAULT NULL,
  `users` bigint DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsx7gohhi00yuxgjvhqjjsm8my` (`deparatments`),
  KEY `FKg67yymi2xsfv28m1p87vlanbe` (`doctors`),
  KEY `FKhpb0j1sn2mrup5bygghoeu9ya` (`users`),
  KEY `FK6u6s6egu60m2cbdjno44jbipa` (`doctor_id`),
  KEY `FK886ced1atxgvnf1o3oxtj5m4s` (`user_id`),
  CONSTRAINT `FK6u6s6egu60m2cbdjno44jbipa` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK886ced1atxgvnf1o3oxtj5m4s` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKg67yymi2xsfv28m1p87vlanbe` FOREIGN KEY (`doctors`) REFERENCES `users` (`id`),
  CONSTRAINT `FKhpb0j1sn2mrup5bygghoeu9ya` FOREIGN KEY (`users`) REFERENCES `users` (`id`),
  CONSTRAINT `FKsx7gohhi00yuxgjvhqjjsm8my` FOREIGN KEY (`deparatments`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount_paid` int NOT NULL,
  `balance` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `invoice_date` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_amount` int NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint NOT NULL,
  `pharmacist_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd88qt0tci2ldbdfoxf3jwo8ex` (`doctor_id`),
  KEY `FKcx8jlvokigwpm7p31mp010tf` (`patient_id`),
  KEY `FKom9su2loms1fxtaf5phpuvkf1` (`pharmacist_id`),
  CONSTRAINT `FKcx8jlvokigwpm7p31mp010tf` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKd88qt0tci2ldbdfoxf3jwo8ex` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKom9su2loms1fxtaf5phpuvkf1` FOREIGN KEY (`pharmacist_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Cardiology','Department for heart-related issues');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostics`
--

DROP TABLE IF EXISTS `diagnostics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostics` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `price` int NOT NULL,
  `test_date` datetime(6) DEFAULT NULL,
  `test_result` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsvqrfpgsyk9ldau6sslrfpd1g` (`doctor_id`),
  KEY `FK5i4ajlrsscp591luyt8as3okr` (`patient_id`),
  CONSTRAINT `FK5i4ajlrsscp591luyt8as3okr` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKsvqrfpgsyk9ldau6sslrfpd1g` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostics`
--

LOCK TABLES `diagnostics` WRITE;
/*!40000 ALTER TABLE `diagnostics` DISABLE KEYS */;
/*!40000 ALTER TABLE `diagnostics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `manufacturer_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'Dhaka City','1234567890','2024-09-23 10:54:41.688632',NULL,'contact@abc.com','ABC Pharmaceuticals','2024-09-23 10:54:41.688632'),(2,'Dhaka City 1','1234567890-1','2024-09-23 10:55:20.657081',NULL,'contact@one.com','One Pharmaceuticals','2024-09-23 11:12:28.644201'),(3,'Dhaka City 2','1234567890-2','2024-09-23 10:56:42.234064',NULL,'contact@two.com','Two Pharmaceuticals','2024-09-23 10:56:42.234064'),(4,'Dhaka City 3','1234567890-3','2024-09-23 10:57:01.034153',NULL,'contact@three.com','Three Pharmaceuticals','2024-09-23 10:57:01.034153'),(5,'Dhaka City 4','1234567890-4','2024-09-23 10:57:20.657155',NULL,'contact@four.com','Four Pharmaceuticals','2024-09-23 10:57:20.657155'),(6,'Dhaka City 5','1234567890-5','2024-09-23 10:57:36.674868','2024-09-23 11:05:49.396905','contact@five.com','Five Pharmaceuticals','2024-09-23 10:57:36.674868'),(7,'Dhaka City 6','1234567890-6','2024-09-23 11:08:44.746292',NULL,'contact@six.com','Six Pharmaceuticals','2024-09-23 11:08:44.746292');
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `dosage_form` varchar(255) DEFAULT NULL,
  `instructions` varchar(255) DEFAULT NULL,
  `medicine_name` varchar(255) DEFAULT NULL,
  `medicine_strength` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `manufacturer_id` bigint DEFAULT NULL,
  `prescription_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtll02mqten1cvmn7wcqpxmwgv` (`manufacturer_id`),
  KEY `FKrqhwsxfcnuyfqxueeitym2t4w` (`prescription_id`),
  CONSTRAINT `FKrqhwsxfcnuyfqxueeitym2t4w` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `FKtll02mqten1cvmn7wcqpxmwgv` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (1,'2024-09-23 10:00:00.000000','Tablet','Take with food','Aspirin','500mg',20,'2024-09-23 10:00:00.000000',1,NULL),(3,'2024-09-23 11:29:16.979575','Tablet','Take with food','Aspirin','750mg',30,'2024-09-23 11:29:16.979575',1,NULL),(4,'2024-09-23 11:35:36.948114','Tablet','Take with water','Ibuprofen','500mg',30,'2024-09-23 11:35:36.948114',3,NULL),(5,'2024-09-23 11:54:33.456660','Tablet','Take with food','Ibuprofen','400mg',18,'2024-09-23 12:00:00.529285',3,NULL);
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `prescription_date` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2hdpvkpjjx3plf21194oxjskt` (`doctor_id`),
  KEY `FK7sia9wnwh9j5hwrta9k8q0rbq` (`patient_id`),
  CONSTRAINT `FK2hdpvkpjjx3plf21194oxjskt` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK7sia9wnwh9j5hwrta9k8q0rbq` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `age` int NOT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `cell` int NOT NULL,
  `doctor_degree` varchar(255) DEFAULT NULL,
  `doctor_license` varchar(255) DEFAULT NULL,
  `doctor_speciality` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nurse_degree` varchar(255) DEFAULT NULL,
  `nurse_license` varchar(255) DEFAULT NULL,
  `nurse_speciality` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','DOCTOR','NURSE','PATIENT','PHARMACIST','RECEPTIONIST') NOT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  KEY `FKsbg59w8q63i0oo53rlgvlcnjq` (`department_id`),
  CONSTRAINT `FKsbg59w8q63i0oo53rlgvlcnjq` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Azimpur',25,NULL,1521417316,NULL,NULL,NULL,'admin@gmail.com','Male',NULL,'Admin',NULL,NULL,NULL,'$2a$12$RZPNlMTk4yH8BngDSMoQGudJpqQt.rlbh2xPHPv3mPV2Njg.vcA2a','ADMIN',NULL),(2,'Dhaka',26,'2024-09-01 06:00:00.000000',1200000000,NULL,NULL,NULL,'patient@gmail.com','male',NULL,'Patient',NULL,NULL,NULL,NULL,'PATIENT',NULL),(4,'Dhaka',40,'2024-09-03 06:00:00.000000',1478520,'Okay','Okay','Okay','doctor@gmail.com','male',NULL,'Doctor',NULL,NULL,NULL,NULL,'DOCTOR',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-23 13:16:38
