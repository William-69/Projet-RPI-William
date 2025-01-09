
/**
         * 
         * 
            for ( intitilisation ; condition de sortie ; incrementation ) {
                // j'ajoute a la somme la valeur contenue dans la ligne i et la colonne 2

                // j'incremente le nombre de lignes

            }
         */



function moyenneAge() {
    let tableau = document.getElementById("tableau_1");
    let sum = 0;
    let nb = 0 ;
    for (let i = 0; i < tableau.rows.length; i++) {
    sum +=  parseInt(tableau.rows[i].cells[2].textContent);
    nb++;
         }
      let moyenne = sum / nb; 
      let avgAge = document.getElementById("avg");
      avgAge.textContent= moyenne;
            }
           



// debugger;

// Creer une fonction qui prend en parametre un nombre
// et qui calcule le carre de ce nombre
// Afficher le resultat en console et dans une
// alerte
// function eleveAuCarre(nombre) {
//   const result = nombre * nombre;
//   console.log(result);
//   alert(result);
// }

// L'appel de la fonction
// doit etre declenche par un click sur un bouton
// dans le fichier html

// Creer une fonction qui recupere la reference
// du tableau la stocke dans une variable

// Cette fonction doit etre appelee au click sur un
// bouton dans le fichier html

function getTableau() {
        let tableau = document.getElementById("tableau_1");
        let name = document.getElementById("name");
        console.log(name.value);
        let age = document.getElementById("age");
        console.log(age.value);
        let interest = document.getElementById("interest");
        console.log(interest.value);

        console.log(tableau);




            // tableau est une reference vers l'element html
            // une variable qui permet de manipuler
            // le contenu de l'element html par le biais
            // de javascript
        
            // Creer une ligne dans le tableau
            let row = tableau.insertRow();
        
            // Creer une cellule dans la ligne
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
        
            // Ajouter du contenu dans la cellule
            cell1.textContent = name.value;
            cell2.textContent = interest.value;
            cell3.textContent = age.value;
            cell4.textContent = "Supprimer";
            moyenneAge();
           }
function deleteRow() {
            let tableau = document.getElementById("tableau_1");
            tableau.deleteRow(tableau.rows.length - 1);
            moyenneAge();
        }
function displayButton() {
            let button = document.getElementById("byn");
            button.style.display = "block";
           let colonne = document.getElementById("byn2");
            colonne.style.display = "block";
        }
function DeleteOneRow() {

            let tableau = document.getElementById("tableau_1");
            let index = document.getElementById("index");
            tableau.deleteRow(index.value);
            moyenneAge();
        }

        
