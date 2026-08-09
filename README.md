# Gestionnaire de Tâches - Tableau de Bord

## 📌 Description

Le Gestionnaire de Tâches est une application web interactive développée dans le cadre de la Phase 2 du programme Full Stack d'Akieni Academy. Ce projet de niveau Avancé (Semaine 8) permet de gérer efficacement une liste de tâches avec un système de priorité, de filtrage et un tableau de bord de statistiques en temps réel. L'application offre une interface utilisateur intuitive et responsive, permettant de visualiser, ajouter, supprimer, et suivre l'avancement des tâches grâce à des indicateurs de performance (KPI) et une barre de progression dynamique.

##  Objectifs du projet

Ce projet vise à consolider les compétences JavaScript suivantes :

- Manipulation d'objets et de tableaux
- Utilisation des méthodes fonctionnelles : map, filter, reduce
- Création de fonctions de manipulation de données (ajout, suppression, modification)
- Gestion d'identifiants uniques pour les éléments
- Calcul de statistiques en temps réel
- Génération dynamique de contenu HTML via des gabarits littéraux
- Intégration du JavaScript avec le DOM (Semaine 8 : fonction afficher() uniquement)
- Maîtrise du CSS avancé avec variables, Grid, Flexbox et responsive design

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique de la page (header, main, section, footer)
- **CSS3** : Mise en forme avec variables CSS, Grid layout, Flexbox, animations, responsive mobile-first
- **JavaScript** : Logique métier, manipulation de données, affichage dynamique
- **Git** : Gestion de version
- **GitHub** : Hébergement du code source
- **GitHub Pages** : Déploiement du projet (projet Avancé)

##  Fonctionnalités

- **Affichage des tâches** : Liste complète des tâches avec leur priorité (haute, moyenne, basse) visualisée par des couleurs distinctives
- **Gestion des tâches** : Ajout, suppression et marquage des tâches comme terminées ou réactivées
- **Tableau de bord KPI** : Trois indicateurs clés - Total des tâches, Tâches terminées, Taux de complétion
- **Barre de progression** : Visualisation dynamique du taux de complétion avec code couleur (rouge < 30%, orange 30-70%, vert > 70%)
- **Filtrage intelligent** : Affichage des tâches selon leur statut (toutes, en cours, terminées)
- **Interface responsive** : Adaptative de 375px à 1440px avec points de rupture à 768px et 1024px
- **Accessibilité** : Support du focus-visible pour la navigation clavier et respect des préférences de réduction de mouvement
- **État vide** : Message clair lorsqu'aucune tâche ne correspond au filtre sélectionné

## 📂 Structure du projet

```
gestionnaire-taches/
├── index.html          # Structure HTML sémantique
├── style.css           # Mise en forme complète avec variables CSS
├── script.js           # Logique JavaScript et manipulation des données
└── README.md           # Documentation du projet
```

## ⚙️ Installation et utilisation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/thomas-issoko/gestionnaire-taches.git
   ```

2. **Accéder au dossier du projet**
   ```bash
   cd gestionnaire-taches
   ```

3. **Ouvrir le projet dans un navigateur**
   - Double-cliquer sur le fichier `index.html`
   - Ou utiliser l'extension Live Server dans VS Code

4. **Utiliser les fonctionnalités**
   - Les tâches de démonstration sont préchargées
   - Utiliser les boutons "Terminer" et "Supprimer" sur chaque tâche
   - Cliquer sur les filtres pour afficher les tâches selon leur statut
   - Ouvrir la console (F12) pour utiliser les fonctions avancées

##  Commandes utiles

### Fonctions JavaScript disponibles dans la console

```javascript
// Ajouter une nouvelle tâche
ajouterTache("Titre de la tâche", "haute"); // priorité : haute, moyenne, basse

// Supprimer une tâche par son ID
supprimerTache(1); // Remplacez 1 par l'ID de la tâche

// Marquer une tâche comme terminée ou la réactiver
terminerTache(1); // Remplacez 1 par l'ID de la tâche

// Ajouter 3 tâches de démonstration
ajouterTachesDemo();

// Changer le filtre actif
changerFiltre("toutes");   // Affiche toutes les tâches
changerFiltre("encours");  // Affiche uniquement les tâches en cours
changerFiltre("terminees"); // Affiche uniquement les tâches terminées
```

### Commandes Git

```bash
# Initialiser le repository
git init

# Ajouter tous les fichiers
git add .

# Effectuer un commit
git commit -m "Ajout du gestionnaire de tâches"

# Lier le repository distant
git remote add origin https://github.com/thomas-issoko/gestionnaire-taches.git

# Pousser les modifications
git push -u origin main
```

## 👀 Aperçu

L'application présente une interface professionnelle organisée en trois sections principales :

- **En-tête** : Titre du projet et indication de la semaine/niveau
- **Tableau de bord KPI** : Trois cartes affichant le total des tâches, le nombre de tâches terminées et le taux de complétion avec une barre de progression colorée
- **Filtres** : Trois boutons permettant de filtrer l'affichage des tâches
- **Liste des tâches** : Cartes individuelles affichant chaque tâche avec sa priorité (bordure et badge colorés), son titre, un bouton pour la marquer comme terminée et un bouton de suppression

Le design est moderne et épuré, avec des transitions fluides, des ombres légères et un système de couleurs cohérent. L'interface s'adapte parfaitement à tous les écrans : une colonne sur mobile, trois colonnes pour les KPI sur tablette et desktop, et des espaces généreux pour une meilleure lisibilité sur grands écrans.

## 🔧 Améliorations possibles

- **Persistance des données** : Intégrer localStorage pour sauvegarder les tâches entre les sessions (prévu pour la Semaine 10)
- **Formulaire d'ajout** : Créer un formulaire avec champ de saisie et sélecteur de priorité au lieu des fonctions en console
- **Édition des tâches** : Permettre de modifier le titre ou la priorité d'une tâche existante
- **Date d'échéance** : Ajouter une date limite pour chaque tâche avec système d'alerte
- **Catégorisation** : Ajouter des catégories ou projets pour organiser les tâches
- **Recherche** : Ajouter une barre de recherche pour trouver rapidement une tâche par mot-clé
- **Drag & drop** : Permettre de réorganiser l'ordre des tâches par glisser-déposer
- **Export/Import** : Exporter la liste des tâches en format JSON ou CSV

## 👨‍💻 Auteur

**ISSOKO Thomas**  
Étudiant Full Stack - Akieni Academy  
Cohorte 2 - 2026
