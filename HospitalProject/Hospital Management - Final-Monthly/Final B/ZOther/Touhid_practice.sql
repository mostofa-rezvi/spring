-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: practice
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
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6ipktqj9ronn3o0j1px31w7au` (`category_id`),
  CONSTRAINT `FK6ipktqj9ronn3o0j1px31w7au` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'Dhanmondi Branch','Dhaka',NULL),(2,'Bonani Branch','Dhaka',NULL);
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ccyt'),(2,'q3wt');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `cell` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `expiry_date` date DEFAULT NULL,
  `manufacture_date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `stock` int NOT NULL,
  `unitprice` int NOT NULL,
  `branch_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7yh1cmuib7hnrbu4ntka4v7ro` (`branch_id`),
  KEY `FKowomku74u72o6h8q0khj7id8q` (`category_id`),
  KEY `FKhiwr0cl8fpxh1xm9y17wo5up0` (`supplier_id`),
  CONSTRAINT `FK7yh1cmuib7hnrbu4ntka4v7ro` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `FKhiwr0cl8fpxh1xm9y17wo5up0` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `FKowomku74u72o6h8q0khj7id8q` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2024-10-10','2024-09-01','Napa','Napa_ccf7a7e3-ff55-461e-881a-602d96de8747',0,90,12,1,1,1),(2,'2024-10-10','2024-09-01','Paracitamol','Paracitamol_9cfaae71-2769-4cd5-acfc-e4799e4a027c',0,100,10,2,2,2),(3,'2024-10-12','2024-09-01','Serzel','Serzel_682999ba-174a-4854-a288-76a92be4eabb',0,95,15,1,2,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customername` varchar(255) DEFAULT NULL,
  `discount` float NOT NULL,
  `quantity` int NOT NULL,
  `salesdate` date DEFAULT NULL,
  `totalprice` int NOT NULL,
  `branch_id` int DEFAULT NULL,
  `sales_details_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrhimhek4ehsu31ujgod41qnhx` (`branch_id`),
  KEY `FKb6pnjoyoc51ead5sdtsixkuht` (`sales_details_id`),
  CONSTRAINT `FKb6pnjoyoc51ead5sdtsixkuht` FOREIGN KEY (`sales_details_id`) REFERENCES `sales_details` (`id`),
  CONSTRAINT `FKrhimhek4ehsu31ujgod41qnhx` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'raju',0,0,'2024-09-29',44,NULL,NULL),(2,'raju',0,0,'2024-09-29',44,NULL,NULL),(3,'raju',0,0,'2024-09-29',44,NULL,NULL),(4,'raju',0,0,'2024-09-29',44,NULL,NULL),(5,'yitr',0,0,'2024-09-29',23,NULL,NULL),(6,'Shabab',0,0,'2024-09-29',12,NULL,NULL),(7,'Shabab',0,0,'2024-09-29',195,NULL,NULL);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_details`
--

DROP TABLE IF EXISTS `sales_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `discount` float NOT NULL,
  `quantity` int NOT NULL,
  `total_price` float NOT NULL,
  `unit_price` float NOT NULL,
  `product_id` int NOT NULL,
  `sales_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfro6i33ctcc7us92q7j85j41m` (`product_id`),
  KEY `FK9k57fsnt2gom2tvbrft8p9q0x` (`sales_id`),
  CONSTRAINT `FK9k57fsnt2gom2tvbrft8p9q0x` FOREIGN KEY (`sales_id`) REFERENCES `sales` (`id`),
  CONSTRAINT `FKfro6i33ctcc7us92q7j85j41m` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_details`
--

LOCK TABLES `sales_details` WRITE;
/*!40000 ALTER TABLE `sales_details` DISABLE KEYS */;
INSERT INTO `sales_details` VALUES (1,0,10,120,12,1,7),(2,0,5,75,15,3,7);
/*!40000 ALTER TABLE `sales_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_product`
--

DROP TABLE IF EXISTS `sales_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_product` (
  `sales_id` int NOT NULL,
  `product_id` int NOT NULL,
  KEY `FK7dl4fmr89kvli7uaj1u19306i` (`product_id`),
  KEY `FK18ebowds3h9totm6kall9ovbh` (`sales_id`),
  CONSTRAINT `FK18ebowds3h9totm6kall9ovbh` FOREIGN KEY (`sales_id`) REFERENCES `sales` (`id`),
  CONSTRAINT `FK7dl4fmr89kvli7uaj1u19306i` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_product`
--

LOCK TABLES `sales_product` WRITE;
/*!40000 ALTER TABLE `sales_product` DISABLE KEYS */;
INSERT INTO `sales_product` VALUES (1,1),(1,2),(2,1),(2,2),(3,1),(3,2),(4,1),(4,2),(5,1),(6,1),(7,1),(7,3);
/*!40000 ALTER TABLE `sales_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `cell` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'gefh',4845,'acme@gmail.com','Acme'),(2,'ewgy',4158419,'ibnsena@gmail.com','IbnSena');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_logged_out` bit(1) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKj8rfw4x0wjjyibfqq566j4qng` (`user_id`),
  CONSTRAINT `FKj8rfw4x0wjjyibfqq566j4qng` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3MzUwNDMzLCJleHAiOjE3Mjc0MzY4MzN9.w3KHuzQRh5VOq9gQBsucU6DG8eBKlicFOsfuIMMjsTMgFqMqcBDR9ilxhmVB3YnK',1),(2,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3MzUxOTkxLCJleHAiOjE3Mjc0MzgzOTF9.G1sb8zy_EU-5DZS8cHIOlr4clplAfS0TEQllC3hfme5MuGSmQfmNdG0QFbUOMQBQ',1),(3,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTEzNzM3LCJleHAiOjE3Mjc2MDAxMzd9.lBnaOTq4txtHFk9FRltU4q_e_qISvKQtAU37eF6Ae7pfpXb8e_grPWNdZn7MRs_v',1),(4,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTEzODgyLCJleHAiOjE3Mjc2MDAyODJ9.TAvxl-daZkqn1fD3ztvzSN4wav9KGrd0meoCzXyQsQ0XHMO0ZF2A-7FhmDvkfsKD',1),(5,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTE0MTU5LCJleHAiOjE3Mjc2MDA1NTl9.rqpw5Ys1dZNHkh-nRGB6bkMjKpIdnFBFSXN3usrvhEk9hvrLHUSNY-OJEqF4xcKp',1),(6,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTE1NjUwLCJleHAiOjE3Mjc2MDIwNTB9.6v-LqVReNlCYf8kxZqcMHaE5Uixh4pfcIoqeseMmLe1QhrsMR-bRI32lrZx4woVA',1),(7,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTE3NjI4LCJleHAiOjE3Mjc2MDQwMjh9.GXGL6XsVr4zW1P8FADUKIHR8d717CX9xwkK9ZbkZmPfXAjUxoVBlecCxUbLtVURR',1),(8,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTE5OTAzLCJleHAiOjE3Mjc2MDYzMDN9.AlcSA3rLILXc8xHtAIg0LczbX8QCZZ-JCvcRWcds9Iix57PTGMTualhsUwHsJK9J',1),(9,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTIwODg4LCJleHAiOjE3Mjc2MDcyODh9.OXmMAPHGH51aVjZCY6iwcsnikWlLRvFAqkNHksIn-4miyugWZkruYlQGSuNqyB2Z',1),(10,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTIxMDgzLCJleHAiOjE3Mjc2MDc0ODN9.AKEWzA5wr5fNmYKF04F9zfXjyff9PjF7xL3GBp3knb2Ok0kkMlKMlNhO8QaLSGhA',1),(11,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTIxMjIxLCJleHAiOjE3Mjc2MDc2MjF9.rt89LBRB9y_lCTC9av16tT7FQkwF8CNA8F7alv1X2TmJ-cKsAIxV3ZznpaUgv65_',1),(12,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTIxOTMyLCJleHAiOjE3Mjc2MDgzMzJ9.wfR9sJqx6UnwfA8A9vR0Hii3N4paGuMkm9fTP2hfvyF1P7espaCqqbPi4ob37btQ',1),(13,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTI2MzYwLCJleHAiOjE3Mjc2MTI3NjB9.eTtGNgM-LGpe7OTtKXXKrN0V0uCbMLRIWt0u9vfElve_CzNwOcnks1vH8PAIxVIy',1),(14,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NTI5NDA0LCJleHAiOjE3Mjc2MTU4MDR9.GqjBt28jwamd_oNl-gfTGdnJSsLfhZs5jdNR42wh0yzT19SUC4rrsj1l7sJIEtlr',1),(15,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjAwNjE0LCJleHAiOjE3Mjc2ODcwMTR9.p9fVXfLfJQa4N5YhHehRYQiJI9aoT9400PFMPzLrgYJsW84MNuFaaH4MG4YGusdZ',1),(16,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjAwNzY2LCJleHAiOjE3Mjc2ODcxNjZ9.sAVI7Ih61a2r2MLvXIW7B4GydxgrNd-tQS_bC0nD939-eixUofFcTD8xK7LMMvBd',1),(17,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjA5MDkzLCJleHAiOjE3Mjc2OTU0OTN9.Pa0q-QZ9xC9TrcnrmSHh-gZ_zjUpZLFmaa4mCrp5YLTyPeBFB1iayn0CKqbcVn91',1),(18,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjExODQ3LCJleHAiOjE3Mjc2OTgyNDd9.F_HloTBk_YV1HPFS6jN2m-x-WoOl6qh46G9RG1HiKWjy4GpreyHl_oBzDX0S0c4d',1),(19,_binary '','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjEzMTk4LCJleHAiOjE3Mjc2OTk1OTh9.gtBFvVydxa05OcobhQW75Mp2cI7xEHMQuZA5OBCjzP0HcWZT1lKsczVEltZwCyIb',1),(20,_binary '\0','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhbGFtbWR0b3doaWR1bDlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI3NjEzODE4LCJleHAiOjE3Mjc3MDAyMTh9.PVRN1yQUWMOPdRU6t5dOhnP2sP05pgFG34JdSbLxuZhqQVMVmyGqE4gzBnmsTJLn',1);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cell` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','PHARMACIST','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK3wfgv34acy32imea493ekogs5` (`cell`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '',NULL,'123654789',NULL,'alammdtowhidul9@gmail.com',NULL,NULL,'Towhid','$2a$10$9/ShqAq/l8YmvznZGHC8Ee38YnWHOodqq0euskBKdfo7bEOBFhZUa','ADMIN');
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

-- Dump completed on 2024-09-29 18:51:44
