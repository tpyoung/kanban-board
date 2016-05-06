DROP DATABASE IF EXISTS tasks_test;
DROP DATABASE IF EXISTS tasks_development;
DROP DATABASE IF EXISTS tasks_production;

DROP USER IF EXISTS owner;
CREATE USER owner;

CREATE DATABASE tasks_test OWNER owner;
CREATE DATABASE tasks_development OWNER owner;
CREATE DATABASE tasks_production OWNER owner;