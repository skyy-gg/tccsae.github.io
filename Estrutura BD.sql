CREATE DATABASE SITE;
USE SITE;

CREATE TABLE tbCadastro (
  Id_cadastro INTEGER PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(80) NOT NULL,
  Data_nascimento date NOT NULL,
  Email VARCHAR(100) NOT NULL UNIQUE,
  Senha VARCHAR(50)
);

CREATE TABLE tbOrientador(
    Id_orientador INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(80) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(30) NOT NULL,
    Id_cadastro_FK INTEGER, 
    FOREIGN KEY (Id_cadastro_FK) 
    references tbCadastro(Id_cadastro)
);

CREATE TABLE tbProjeto(
  Id_projeto INTEGER PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(40) NOT NULL,
  Orientador VARCHAR(80) NOT NULL,
  Id_orientador_FK INTEGER,
    FOREIGN KEY (Id_orientador_FK)
    references tbOrientador(Id_orientador)
);

CREATE TABLE tbDocumentos(
    Id_documento INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Participantes VARCHAR(200),
    Versao VARCHAR(10) NOT NULL,
    Data_publicacao date NOT NULL,
    Id_projeto_FK INTEGER,
    FOREIGN KEY (Id_projeto_FK) references tbProjeto(Id_projeto)
);

CREATE TABLE tbParticipantes(
    Id_participantes INTEGER PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(100) UNIQUE,
    Nome VARCHAR(80) NOT NULL,
    Id_projeto_FK INTEGER,
    FOREIGN KEY (Id_projeto_FK) references tbProjeto(Id_projeto)
);

CREATE TABLE tbAluno(
    Id_aluno INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(80) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Nivel_de_acesso INTEGER DEFAULT(1),
    Senha VARCHAR(30) NOT NULL,
    Id_participantes_FK INTEGER,
    Id_cadastro_FK INTEGER,
    FOREIGN KEY (Id_participantes_FK) references tbParticipantes(Id_participantes),
    FOREIGN KEY (Id_cadastro_FK) references tbCadastro(Id_Cadastro)
);

CREATE TABLE  tbLinks(
    Id_link INTEGER PRIMARY KEY AUTO_INCREMENT,
    URL VARCHAR(100) NOT NULL,
    Nome_documento VARCHAR(50),
    Id_documento_FK INTEGER,
    FOREIGN KEY (Id_documento_FK) references tbDocumentos(Id_documento));