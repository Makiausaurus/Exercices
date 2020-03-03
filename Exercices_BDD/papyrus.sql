DROP DATABASE if EXISTS papyrusBDD; /* delete database*/
CREATE DATABASE papyrusBDD;
USE papyrusBDD;

CREATE TABLE `produit` (
    codArt CHAR(4) NOT NULL,
    libArt VARCHAR(30) NOT NULL,
    stkAle INT NOT NULL,
    stkPhy INT NOT NULL,
    qteAnn INT NOT NULL,
    uniMes CHAR(5) NOT NULL,
    PRIMARY KEY (codArt)
);

CREATE TABLE `fournis` (
    numFou SMALLINT NOT NULL,
    nomFou VARCHAR(25) NOT NULL,
    rueFou VARCHAR(50) NOT NULL,
    posFou CHAR(5) NOT NULL,
    vilFou VARCHAR(30) NOT NULL,
    conFou VARCHAR(15) NOT NULL,
    satisf TINYINT(10),
    PRIMARY KEY (numFou)
);

CREATE TABLE `entcom` (
    numCom INT AUTO_INCREMENT,
    obsCom VARCHAR(50),
    datCom DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    numFou SMALLINT,
    PRIMARY KEY (numCom),
    FOREIGN KEY (numFou) REFERENCES fournis(numFou)
);

CREATE TABLE `ligcom` (
    numLig TINYINT NOT NULL,
    qteCde INT NOT NULL,
    priUni DECIMAL(9,2) NOT NULL,
    qteLiv INT,
    derLiv DATE NOT NULL,
    numCom INT NOT NULL,
    codArt CHAR(4) NOT NULL,
    PRIMARY KEY (numCom,numLig),
    FOREIGN KEY (numCom) REFERENCES entcom(numCom),
    FOREIGN KEY (codArt) REFERENCES produit(codArt)
);

CREATE TABLE `vente` (
    delLiv SMALLINT NOT NULL,
    qte1 INT NOT NULL,
    prix1 DECIMAL(9,2) NOT NULL,
    qte2 INT,
    prix2 DECIMAL(9,2),
    qte3 INT,
    prix3 DECIMAL(9,2),
    numFou SMALLINT NOT NULL,
    codArt CHAR(4) NOT NULL,
    FOREIGN KEY (numFou) REFERENCES fournis(numFou),
    FOREIGN KEY (codArt) REFERENCES produit(codArt)
);  