CREATE DATABASE mydash;

USE mydash;

CREATE TABLE test.Panels (
	ID int(11) auto_increment NOT NULL,
	section varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL NULL,
	label varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL NULL,
	url varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL NULL,
	visited int(11) DEFAULT 0 NULL COMMENT 'Times Visited',
	CONSTRAINT `PRIMARY` PRIMARY KEY (ID)
)