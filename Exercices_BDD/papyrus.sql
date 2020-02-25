DROP DATABASE IF EXISTS `papyrus`;
CREATE DATABASE IF NOT EXISTS `papyrus`;
USE `papyrus`;


CREATE TABLE IF NOT EXISTS `produit` (
    `codArt` char(4) NOT NULL,
    `libArt` varchar(30) NOT NULL DEFAULT '',
    `stkAle` int(11) NOT NULL,
    `stkPhy` int(11) NOT NULL,
    `qteAnn` int(11) NOT NULL,
    `uniMes` char(5) NOT NULL DEFAULT '',
    PRIMARY KEY (`codArt`)
);

CREATE TABLE IF NOT EXISTS `fournis` (
    `numFou` tinyint(4) NOT NULL,
    `nomFou` varchar(25) NOT NULL,
    `rueFou` varchar(50) NOT NULL,
    `posFou` mediumint(5) unsigned NOT NULL,
    `vilFou` varchar(30) NOT NULL DEFAULT '',
    `conFou` varchar(15) NOT NULL DEFAULT '',
    `satisf` tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`numFou`)
);
CREATE TABLE IF NOT EXISTS `entcom` (
    `numCom` int(11) NOT NULL AUTO_INCREMENT,
    `obsCom` varchar(50) DEFAULT NULL,
    `datCom` datetime NOT NULL,
    `numFou` tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`numCom`),
    KEY `entcom_numFou` (`numFou`),
    CONSTRAINT `entcom_numFou` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`)
);


CREATE TABLE IF NOT EXISTS `ligcom` (
    `numLig` tinyint(4) NOT NULL DEFAULT '0',
    `qteCde` int(11) NOT NULL DEFAULT '0',
    `priUni` decimal(9,2) NOT NULL DEFAULT '0.00',
    `qteLiv` int(11) DEFAULT NULL,
    `derLiv` datetime NOT NULL,
    `numCom` int(11) NOT NULL,
    `codArt` char(4) NOT NULL DEFAULT '',
    PRIMARY KEY (`numLig`),
    KEY `ligcom_codArt` (`codArt`),
    KEY `ligcom_numCom` (`numCom`),
    CONSTRAINT `ligcom_codArt` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`),
    CONSTRAINT `ligcom_numCom` FOREIGN KEY (`numCom`) REFERENCES `entcom` (`numCom`)
);

CREATE TABLE IF NOT EXISTS `vente` (
    `delLiv` smallint(6) NOT NULL,
    `qte1` int(11) NOT NULL,
    `prix1` decimal(9,2) NOT NULL DEFAULT '0.00',
    `qte2` int(11) DEFAULT NULL,
    `prix2` decimal(9,2) DEFAULT NULL,
    `qte3` int(11) DEFAULT NULL,
    `prix3` decimal(9,2) DEFAULT NULL,
    `numFou` tinyint(4) NOT NULL DEFAULT '0',
    `codArt` char(4) NOT NULL DEFAULT '',
    KEY `ven_numFou` (`numFou`),
    KEY `ven_codArt` (`codArt`),
    CONSTRAINT `ven_codArt` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`),
    CONSTRAINT `ven_numFou` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`)
);