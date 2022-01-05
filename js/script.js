var knappEl = document.getElementById("klikk");
knappEl.addEventListener("click", oppdaterKlikk);

var resultatEl = document.getElementById("resultat");

var antallKlikk = 0;
function oppdaterKlikk(e) {
    antallKlikk++;

    resultatEl.innerHTML = "Wow, du har trykket " + antallKlikk + " ganger!";
}