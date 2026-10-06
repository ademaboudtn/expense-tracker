const nom = document.getElementById('nom');
const mon = document.getElementById('montant');
const liste = document.getElementById("liste");
const total = document.getElementById("total");
const categorie = document.getElementById("categorie");
const ajouter = document.getElementById('ajouter');
const date = document.getElementById('date');

let somme = 0;
let depenses = JSON.parse(localStorage.getItem("depenses")) || [];

function afficherDepenses() {
    liste.innerHTML = "";
    somme = 0;

    depenses.forEach(function(depense) {
        liste.innerHTML += `
    <div class="depense">
        ${depense.nom} - ${depense.montant} DT - ${depense.categorie} - ${depense.date}
    </div>
`;

        somme = somme + depense.montant;
    });

    total.textContent = "total : " + somme + " DT";
}

afficherDepenses();

ajouter.addEventListener("click", function() {

    if (nom.value == "" || mon.value == "" || date.value == "") {
        alert("il faut remplir les champs");
        return;
    }

    depenses.push({
        nom: nom.value,
        montant: Number(mon.value),
        categorie: categorie.value,
        date: date.value
    });

    localStorage.setItem("depenses", JSON.stringify(depenses));

    afficherDepenses();

    nom.value = "";
    mon.value = "";
    date.value = "";
});