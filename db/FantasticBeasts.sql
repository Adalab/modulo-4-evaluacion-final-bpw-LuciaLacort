CREATE DATABASE FantasticBeasts;
USE FantasticBeasts;

CREATE TABLE finder (
    finderId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    country VARCHAR(200) NOT NULL,
    finderImage TEXT
);

CREATE TABLE beasts (
    beastId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    beastImage TEXT,
    fkFinder INT,
    FOREIGN KEY (fkFinder) REFERENCES finder (finderId)
);

