-- Jointures
-- Rechercher le prénom des employés et le numéro de la région de leur
-- département. 

SELECT prenom,noregion,nodep
FROM employe
    JOIN dept
    ON nodep = nodept

-- Rechercher le numéro du département, le nom du département, le
-- nom des employés classés par numéro de département (renommer les
-- tables utilisées). 

SELECT nodep AS 'N° du dpt',dept.nom AS 'Nom du dpt',employe.nom AS 'Nom employé'
FROM employe
    JOIN dept
    ON nodep = nodept
ORDER BY nodep ASC

-- Rechercher le nom des employés du département Distribution. 

SELECT employe.nom AS 'Nom employé',dept.nom AS 'Nom dpt'
FROM dept
    JOIN employe
    ON nodept = nodep
WHERE dept.nom = 'distribution'

-- Auto-jointures
-- Rechercher le nom et le salaire des employés qui gagnent plus que
-- leur patron, et le nom et le salaire de leur patron. 
SELECT a.nom,a.salaire
FROM employe a 
    JOIN employe b 
    ON a.nom = b.nom
WHERE (a.salaire > b.salaire AND a.nosup < b.nosup) --chercher solution


-- Sous-requêtes
-- Rechercher le nom et le titre des employés qui ont le même titre que
-- Amartakaldire. 

SELECT nom,titre
FROM employe
WHERE titre IN
    (SELECT nom FROM employe WHERE nom='amartakaldire')


-- Utilisation de fonctions de groupe
-- Les Groupes

-- 1. Calculer le nombre d'employés de chaque titre. 
SELECT titre,COUNT(*)
FROM employe
GROUP BY titre

-- 2. Calculer la moyenne des salaires et leur somme, par région.
SELECT noregion,AVG(salaire),SUM(salaire)
FROM employe
    JOIN dept
    ON nodep = nodept
GROUP BY noregion

-- La clause HAVING
-- 3. Afficher les numéros des départements ayant au moins 3 employés. 
SELECT nodep, COUNT(*)
FROM employe
GROUP BY nodep
HAVING COUNT(*) >=3

-- 4. Afficher les lettres qui sont l'initiale d'au moins trois employés. 

-- 5. Rechercher le salaire maximum et le salaire minimum parmi tous les
-- salariés et l'écart entre les deux. 
SELECT MAX(salaire) AS 'Salaire maximal',
MIN(salaire) AS 'Salaire minimal',
(MAX(salaire)-MIN(salaire)) AS 'Écart de salaire'
FROM employe

-- 6. Rechercher le nombre de titres différents. 
SELECT COUNT(DISTINCT titre) AS 'Titres différents'
FROM employe

-- 7. Pour chaque titre, compter le nombre d'employés possédant ce titre. 
SELECT titre,COUNT(*)
FROM employe
GROUP BY titre

-- 8. Pour chaque nom de département, afficher le nom du département et
-- le nombre d'employés
SELECT dept.nom,COUNT(*)
FROM dept
    JOIN employe                    -- pas d'employé en dep 20 ou 30 (atelier)-> pas de ligne 'atelier'
    ON nodept = nodep
GROUP BY dept.nom

-- 9. Rechercher les titres et la moyenne des salaires par titre dont la
-- moyenne est supérieure à la moyenne des salaires des Représentants.
SELECT titre,AVG(salaire)
FROM employe
GROUP BY titre
HAVING AVG(salaire) >   (SELECT AVG(salaire) 
                        FROM employe 
                        WHERE titre = 'representant')

-- 10.Rechercher le nombre de salaires renseignés et le nombre de taux de
-- commission renseignés. 
SELECT COUNT(*) AS 'Nombre de salaire renseignés',
COUNT(tauxcom) AS 'Nombre de taux de com renseignés'
FROM employe
