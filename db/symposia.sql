/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : localhost:3306
 Source Schema         : symposia

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 29/11/2021 09:21:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (5, '2021_11_01_190700_laratrust_setup_tables', 1);
INSERT INTO `migrations` VALUES (6, '2021_11_01_235701_laratrust_setup_teams', 2);
COMMIT;

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permission_role
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_role_id_foreign` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permission_role
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permission_user
-- ----------------------------
DROP TABLE IF EXISTS `permission_user`;
CREATE TABLE `permission_user` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `team_id` int(10) unsigned DEFAULT NULL,
  UNIQUE KEY `permission_user_user_id_permission_id_user_type_team_id_unique` (`user_id`,`permission_id`,`user_type`,`team_id`),
  KEY `permission_user_permission_id_foreign` (`permission_id`),
  KEY `permission_user_team_id_foreign` (`team_id`),
  CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `permission_user_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permission_user
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user` (
  `role_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `team_id` int(10) unsigned DEFAULT NULL,
  UNIQUE KEY `role_user_user_id_role_id_user_type_team_id_unique` (`user_id`,`role_id`,`user_type`,`team_id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  KEY `role_user_team_id_foreign` (`team_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_user_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_user
-- ----------------------------
BEGIN;
INSERT INTO `role_user` VALUES (5, 1, 'App\\Models\\User', NULL);
INSERT INTO `role_user` VALUES (6, 2, 'App\\Models\\User', NULL);
INSERT INTO `role_user` VALUES (8, 2, 'App\\Models\\User', NULL);
INSERT INTO `role_user` VALUES (7, 3, 'App\\Models\\User', NULL);
INSERT INTO `role_user` VALUES (6, 4, 'App\\Models\\User', NULL);
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES (5, 'admin', 'Administrator', 'System Administrator', '2021-11-02 12:18:59', '2021-11-02 12:18:59');
INSERT INTO `roles` VALUES (6, 'author', 'Author', 'Article author', '2021-11-02 12:20:01', '2021-11-02 12:20:01');
INSERT INTO `roles` VALUES (7, 'committee', 'Committee', 'Conference committee', '2021-11-02 12:36:55', '2021-11-02 12:36:55');
INSERT INTO `roles` VALUES (8, 'reviewer', 'Reviewer', 'Reviewer of ISMEE', '2021-11-08 01:18:46', '2021-11-08 01:18:46');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_config
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_config`;
CREATE TABLE `sympozia_config` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` char(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` char(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sympozia_config
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_config` VALUES (1, 'FRP', 'Front page', 1, '2021-11-12 09:53:58', '2021-11-12 09:54:01');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_file_type
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_file_type`;
CREATE TABLE `sympozia_file_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(3) DEFAULT NULL,
  `description` varchar(25) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_file_type
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_file_type` VALUES (1, 'REV', 'Review manuscript', '2021-11-29 08:32:58', '2021-11-29 08:33:01');
INSERT INTO `sympozia_file_type` VALUES (2, 'FUL', 'Full manuscript', '2021-11-29 08:33:20', '2021-11-29 08:33:22');
INSERT INTO `sympozia_file_type` VALUES (3, 'COP', 'Copyright', '2021-11-29 08:33:44', '2021-11-29 08:33:46');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_manuscript
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_manuscript`;
CREATE TABLE `sympozia_manuscript` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `paper_code` varchar(10) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `abstract` text,
  `milestone_id` int(1) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_manuscript
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_manuscript` VALUES (8, 4, 'ISMEE-4-1', 'Test', NULL, NULL, NULL, '2021-11-29 02:06:01', '2021-11-29 02:06:01');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_manuscript_author
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_manuscript_author`;
CREATE TABLE `sympozia_manuscript_author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manuscript_id` int(10) DEFAULT NULL,
  `author_id` int(10) DEFAULT NULL,
  `presenter` int(1) DEFAULT NULL,
  `contact` int(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_manuscript_author
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for sympozia_manuscript_file
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_manuscript_file`;
CREATE TABLE `sympozia_manuscript_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manuscript_id` int(10) DEFAULT NULL,
  `file_type` int(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_manuscript_file
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_manuscript_file` VALUES (1, 8, 1, 'submitedManuscript/ISMEE-4-1-manuscript.pdf', '2021-11-29 02:06:01', '2021-11-29 02:06:01');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_manuscript_milestone
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_manuscript_milestone`;
CREATE TABLE `sympozia_manuscript_milestone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(3) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_manuscript_milestone
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_manuscript_milestone` VALUES (1, 'CRE', 'Create', '2021-10-26 22:39:48', '2021-10-26 22:39:51');
INSERT INTO `sympozia_manuscript_milestone` VALUES (2, 'SUB', 'Submitted', '2021-10-26 22:40:19', '2021-10-26 22:40:21');
INSERT INTO `sympozia_manuscript_milestone` VALUES (3, 'REV', 'Review', '2021-10-26 22:40:48', '2021-10-26 22:40:50');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_manuscript_status
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_manuscript_status`;
CREATE TABLE `sympozia_manuscript_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(3) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sympozia_manuscript_status
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_manuscript_status` VALUES (1, 'CRE', 'Create', '2021-10-26 22:39:48', '2021-10-26 22:39:51');
INSERT INTO `sympozia_manuscript_status` VALUES (2, 'SUB', 'Submitted', '2021-10-26 22:40:19', '2021-10-26 22:40:21');
INSERT INTO `sympozia_manuscript_status` VALUES (3, 'REV', 'Review', '2021-10-26 22:40:48', '2021-10-26 22:40:50');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_news
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_news`;
CREATE TABLE `sympozia_news` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sympozia_news
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_news` VALUES (10, 'Attendance\'s payment deadline', 'Invoice of attendance\'s payment should be paid on Thursday October 28, 2021', '2021-10-25 01:07:40', '2021-10-25 01:19:52');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_profile
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_profile`;
CREATE TABLE `sympozia_profile` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `user_code` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `afiliation` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_number` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sympozia_profile
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_profile` VALUES (1, 4, NULL, NULL, NULL, 'Didin Wahyudin', NULL, NULL, NULL, NULL, NULL, '2021-11-08 09:07:26', '2021-11-08 02:07:26');
COMMIT;

-- ----------------------------
-- Table structure for sympozia_profile_title
-- ----------------------------
DROP TABLE IF EXISTS `sympozia_profile_title`;
CREATE TABLE `sympozia_profile_title` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sympozia_profile_title
-- ----------------------------
BEGIN;
INSERT INTO `sympozia_profile_title` VALUES (1, 'Dr.', '2021-11-03 13:34:08', '2021-11-03 13:34:11');
INSERT INTO `sympozia_profile_title` VALUES (2, 'Mr.', '2021-11-03 13:34:18', '2021-11-03 13:34:20');
INSERT INTO `sympozia_profile_title` VALUES (3, 'Mrs.', '2021-11-03 13:34:28', '2021-11-03 13:34:30');
INSERT INTO `sympozia_profile_title` VALUES (4, 'Ms.', '2021-11-03 13:34:46', '2021-11-03 13:34:48');
INSERT INTO `sympozia_profile_title` VALUES (5, 'Prof.', '2021-11-03 13:34:55', '2021-11-03 13:34:57');
COMMIT;

-- ----------------------------
-- Table structure for teams
-- ----------------------------
DROP TABLE IF EXISTS `teams`;
CREATE TABLE `teams` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teams_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of teams
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'Didin', 'deewahyu@upi.edu', NULL, '$2y$10$3bqL8aIQW3o9hFBywQyxF.mQyfB.AQceMuBGc.W7XfVNxfHFybFSa', NULL, '2021-11-01 19:15:14', '2021-11-01 19:15:14');
INSERT INTO `users` VALUES (2, 'Syafiq', 'deewahyu@jaist.ac.jp', NULL, '$2y$10$rp1nkeInaQMJb1vd.lC.u.d.JhJpGnjDJw2zPTrptzDqWr3I3y2gO', NULL, '2021-11-01 20:10:24', '2021-11-01 20:10:24');
INSERT INTO `users` VALUES (3, 'Shafwan', 'shafwan@jaist.ac.jp', NULL, '$2y$10$xVdqi1Edk12T/BbVaFt5S.136B641xqAsAVMtVqqOHI96uNq6MGDS', NULL, '2021-11-02 13:42:26', '2021-11-02 13:42:26');
INSERT INTO `users` VALUES (4, 'Syafiq', 'syafiq@ee.upi.edu', NULL, '$2y$10$2VGu/adCRoh59EDo3u3ODO8LvgJ134W0/DLvC8WcSGx0jOdTSAXse', NULL, '2021-11-08 01:09:27', '2021-11-08 01:09:27');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
