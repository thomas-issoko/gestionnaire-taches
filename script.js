// ========================================
// PONT JS -> DOM (Semaine 8)
// ========================================
const sortie = document.querySelector("#sortie");

function afficher(html) {
    sortie.innerHTML = html;
}

// ========================================
// DONNEES INITIALES
// ========================================
let taches = [
    {
        id: 1,
        titre: "Apprendre les objets JavaScript",
        priorite: "haute",
        terminee: false
    },
    {
        id: 2,
        titre: "Finaliser le projet gestionnaire de taches",
        priorite: "haute",
        terminee: false
    },
    {
        id: 3,
        titre: "Lire la documentation sur map et filter",
        priorite: "moyenne",
        terminee: true
    },
    {
        id: 4,
        titre: "Pratiquer les templates literals",
        priorite: "basse",
        terminee: false
    },
    {
        id: 5,
        titre: "Preparer la presentation du projet",
        priorite: "moyenne",
        terminee: false
    }
];

let prochainId = 6;
let filtreActif = "toutes";

// ========================================
// FONCTIONS DE MANIPULATION
// ========================================

function ajouterTache(titre, priorite) {
    const nouvelleTache = {
        id: prochainId,
        titre: titre,
        priorite: priorite,
        terminee: false
    };
    
    taches.push(nouvelleTache);
    prochainId++;
    afficherTaches();
}

function supprimerTache(id) {
    taches = taches.filter(function(tache) {
        return tache.id !== id;
    });
    afficherTaches();
}

function terminerTache(id) {
    for (let i = 0; i < taches.length; i++) {
        if (taches[i].id === id) {
            taches[i].terminee = !taches[i].terminee;
            break;
        }
    }
    afficherTaches();
}

function obtenirTachesFiltrees() {
    if (filtreActif === "toutes") {
        return taches;
    }
    
    if (filtreActif === "encours") {
        return taches.filter(function(tache) {
            return tache.terminee === false;
        });
    }
    
    if (filtreActif === "terminees") {
        return taches.filter(function(tache) {
            return tache.terminee === true;
        });
    }
    
    return taches;
}

// ========================================
// FONCTIONS STATISTIQUES
// ========================================

function calculerStatistiques() {
    const total = taches.length;
    
    const terminees = taches.filter(function(tache) {
        return tache.terminee === true;
    }).length;
    
    let taux = 0;
    if (total > 0) {
        taux = Math.round((terminees / total) * 100);
    }
    
    return {
        total: total,
        terminees: terminees,
        taux: taux
    };
}

// ========================================
// FONCTION D'AFFICHAGE PRINCIPALE
// ========================================

function afficherTaches() {
    const tachesFiltrees = obtenirTachesFiltrees();
    let htmlTaches = "";
    
    if (tachesFiltrees.length === 0) {
        htmlTaches = `
            <div class="etat-vide">
                <p>Aucune tache a afficher</p>
            </div>
        `;
    } else {
        for (let i = 0; i < tachesFiltrees.length; i++) {
            const tache = tachesFiltrees[i];
            const classePriorite = "priorite-" + tache.priorite;
            const classeTerminee = tache.terminee ? "terminee" : "";
            
            let boutonTerminer;
            if (tache.terminee) {
                boutonTerminer = '<button class="btn-terminer" onclick="terminerTache(' + tache.id + ')">Reactiver</button>';
            } else {
                boutonTerminer = '<button class="btn-terminer" onclick="terminerTache(' + tache.id + ')">Terminer</button>';
            }
            
            htmlTaches += `
                <div class="tache-item ${classePriorite} ${classeTerminee}">
                    <div class="tache-infos">
                        <span class="tache-titre">${tache.titre}</span>
                        <span class="tache-priorite">${tache.priorite}</span>
                    </div>
                    <div class="tache-actions">
                        ${boutonTerminer}
                        <button class="btn-supprimer" onclick="supprimerTache(${tache.id})">Supprimer</button>
                    </div>
                </div>
            `;
        }
    }
    
    const stats = calculerStatistiques();
    
    document.getElementById("total-taches").textContent = stats.total;
    document.getElementById("terminees-taches").textContent = stats.terminees;
    document.getElementById("taux-completion").textContent = stats.taux + "%";
    
    const barre = document.getElementById("barre-avancement");
    barre.style.width = stats.taux + "%";
    
    if (stats.taux < 30) {
        barre.style.background = "var(--rouge)";
    } else if (stats.taux < 70) {
        barre.style.background = "var(--orange)";
    } else {
        barre.style.background = "var(--vert)";
    }
    
    afficher(htmlTaches);
}

// ========================================
// FONCTION DE FILTRE (CORRIGEE AVEC onclick)
// ========================================

function changerFiltre(filtre) {
    filtreActif = filtre;
    
    const boutons = document.querySelectorAll(".filtre-btn");
    boutons.forEach(function(btn) {
        btn.classList.remove("actif");
        if (btn.dataset.filtre === filtre) {
            btn.classList.add("actif");
        }
    });
    
    afficherTaches();
}

// ========================================
// FONCTIONS DE TEST
// ========================================

function ajouterTachesDemo() {
    ajouterTache("Reviser les methodes de tableau", "moyenne");
    ajouterTache("Regarder le cours sur les objets", "haute");
    ajouterTache("Faire une pause", "basse");
}

// ========================================
// INITIALISATION
// ========================================

console.log("Gestionnaire de taches demarre");
console.log("Taches initiales :", taches);

afficherTaches();

console.log("Fonctions disponibles :");
console.log("  - ajouterTache('titre', 'haute|moyenne|basse')");
console.log("  - supprimerTache(id)");
console.log("  - terminerTache(id)");
console.log("  - ajouterTachesDemo()");
console.log("  - changerFiltre('toutes'|'encours'|'terminees')");

// ========================================
// AJOUT DES GESTIONNAIRES D'EVENEMENTS (CORRECTION IMPORTANTE)
// ========================================

// Cette partie ajoute les événements click sur les boutons de filtre
// Elle s'exécute après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    const boutonsFiltre = document.querySelectorAll(".filtre-btn");
    boutonsFiltre.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const filtre = this.dataset.filtre;
            changerFiltre(filtre);
        });
    });
});