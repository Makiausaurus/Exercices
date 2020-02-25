-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour papyrus_gui
DROP DATABASE IF EXISTS `papyrus_gui2`;
CREATE DATABASE IF NOT EXISTS `papyrus_gui2` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `papyrus_gui2`;

-- Listage de la structure de la table papyrus_gui. entcom
CREATE TABLE IF NOT EXISTS `entcom` (
  `numCom` int(11) NOT NULL AUTO_INCREMENT,
  `obsCom` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `datCom` datetime NOT NULL,
  `numFou` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`numCom`),
  KEY `entcom_numFou` (`numFou`),
  CONSTRAINT `entcom_numFou` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus_gui. fournis
CREATE TABLE IF NOT EXISTS `fournis` (
  `numFou` tinyint(4) NOT NULL,
  `nomFou` varchar(25) COLLATE utf8_bin NOT NULL,
  `rueFou` varchar(50) COLLATE utf8_bin NOT NULL,
  `posFou` mediumint(5) unsigned NOT NULL,
  `vilFou` varchar(30) COLLATE utf8_bin NOT NULL DEFAULT '',
  `conFou` varchar(15) COLLATE utf8_bin NOT NULL DEFAULT '',
  `satisf` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`numFou`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus_gui. ligcom
CREATE TABLE IF NOT EXISTS `ligcom` (
  `numLig` tinyint(4) NOT NULL DEFAULT '0',
  `qteCde` int(11) NOT NULL DEFAULT '0',
  `priUni` decimal(9,2) NOT NULL DEFAULT '0.00',
  `qteLiv` int(11) DEFAULT NULL,
  `derLiv` datetime NOT NULL,
  `numCom` int(11) NOT NULL,
  `codArt` char(4) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`numLig`),
  KEY `ligcom_codArt` (`codArt`),
  KEY `ligcom_numCom` (`numCom`),
  CONSTRAINT `ligcom_codArt` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`),
  CONSTRAINT `ligcom_numCom` FOREIGN KEY (`numCom`) REFERENCES `entcom` (`numCom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus_gui. produit
CREATE TABLE IF NOT EXISTS `produit` (
  `codArt` char(4) COLLATE utf8_bin NOT NULL,
  `libArt` varchar(30) COLLATE utf8_bin NOT NULL DEFAULT '',
  `stkAle` int(11) NOT NULL,
  `stkPhy` int(11) NOT NULL,
  `qteAnn` int(11) NOT NULL,
  `uniMes` char(5) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`codArt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table papyrus_gui. vente
CREATE TABLE IF NOT EXISTS `vente` (
  `delLiv` smallint(6) NOT NULL,
  `qte1` int(11) NOT NULL,
  `prix1` decimal(9,2) NOT NULL DEFAULT '0.00',
  `qte2` int(11) DEFAULT NULL,
  `prix2` decimal(9,2) DEFAULT NULL,
  `qte3` int(11) DEFAULT NULL,
  `prix3` decimal(9,2) DEFAULT NULL,
  `numFou` tinyint(4) NOT NULL DEFAULT '0',
  `codArt` char(4) COLLATE utf8_bin NOT NULL DEFAULT '',
  KEY `ven_numFou` (`numFou`),
  KEY `ven_codArt` (`codArt`),
  CONSTRAINT `ven_codArt` FOREIGN KEY (`codArt`) REFERENCES `produit` (`codArt`),
  CONSTRAINT `ven_numFou` FOREIGN KEY (`numFou`) REFERENCES `fournis` (`numFou`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
