DROP DATABASE IF EXISTS hotel;
CREATE DATABASE hotel;
USE hotel;

CREATE TABLE client (
    cli_id INT NOT NULL AUTO_INCREMENT,
    cli_nom VARCHAR(50) NOT NULL,
    cli_prenom VARCHAR(50) NOT NULL,
    cli_adresse VARCHAR(50) NOT NULL,
    PRIMARY KEY (cli_id)
);

CREATE TABLE station(
    sta_numero INT NOT NULL,
    sta_nom VARCHAR(50),
    PRIMARY KEY(sta_numero)
);

CREATE TABLE hotel(
    hot_capacite INT NOT NULL,
    hot_categorie INT NOT NULL,
    hot_nom VARCHAR(50) NOT NULL,
    hot_adresse VARCHAR(50) NOT NULL,
    hot_numero INT NOT NULL,
    hot_sta_numero INT NOT NULL,
    PRIMARY KEY(hot_numero),
    FOREIGN KEY (hot_sta_numero) REFERENCES station(sta_numero)
);

CREATE TABLE chambre (
    cha_capacite INT NOT NULL,
    cha_degres_confort INT NOT NULL,
    cha_exposition VARCHAR(15) NOT NULL,
    cha_type VARCHAR(30) NOT NULL,
    cha_numero INT NOT NULL,
    cha_hot_numero INT NOT NULL,
    PRIMARY KEY(cha_numero),
    FOREIGN KEY(cha_hot_numero) REFERENCES hotel(hot_numero)
    
);

CREATE TABLE reservation (
    res_cha_numero INT NOT NULL,
    res_cli_id INT UNIQUE NOT NULL,
    res_date_debut DATE NOT NULL,
    res_date_fin DATE NOT NULL,
    res_date DATE NOT NULL,
    res_montant_arrhes INT NOT NULL,
    res_prix_total INT NOT NULL,
    PRIMARY KEY(res_cha_numero, res_cli_id),
    FOREIGN KEY(res_cha_numero) REFERENCES chambre(cha_numero),
    FOREIGN KEY(res_cli_id) REFERENCES client(cli_id)
);