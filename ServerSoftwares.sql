DROP DATABASE IF EXISTS ServerSoftwares;

CREATE DATABASE ServerSoftwares;

USE ServerSoftwares;

CREATE TABLE produtos (
  id INT NOT NULL auto_increment,
  codigo INT NOT NULL,
  descricao VARCHAR(100) NOT NULL,
  preco INT NOT NULL,
  data_cadastro DATETIME
  PRIMARY KEY(id)
) ENGINE=INNODB;