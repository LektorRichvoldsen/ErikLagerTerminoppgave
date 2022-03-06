var knappEl = document.getElementById("klikk");
var oppgradering1El = document.getElementById("level1");
var oppgradering2El = document.getElementById("level2");
var oppgradering3El = document.getElementById("level3");

knappEl.addEventListener("click", oppdaterKlikk);
oppgradering1El.addEventListener("click", oppgrader1);
oppgradering2El.addEventListener("click", oppgrader2);
oppgradering3El.addEventListener("click", oppgrader3);

var resultatEl = document.getElementById("resultat");

var antallKlikk = 0;
var poengPerKlikk = 1;

knappEl.innerHTML = "+" + poengPerKlikk;

function oppdaterKlikk(e) {

    antallKlikk += poengPerKlikk;

    resultatEl.innerHTML = "Wow, du har " + antallKlikk + " poeng!";
}

function oppgrader1(e) {
    if (antallKlikk < 100) {
        alert("Du har ikke nok poeng til å oppgradere.");
    } else {
        antallKlikk -= 100;
        resultatEl.innerHTML = "100 poeng trukket fra. Du har nå " + antallKlikk + " poeng.";
        poengPerKlikk++;
        knappEl.innerHTML = "+" + poengPerKlikk;
    }
}

function oppgrader2(e) {
    if (antallKlikk < 1000) {
        alert("Du har ikke nok poeng til å oppgradere.");
    } else {
        antallKlikk -= 1000;
        resultatEl.innerHTML = "1000 poeng trukket fra. Du har nå " + antallKlikk + " poeng.";
        poengPerKlikk += 10;
        knappEl.innerHTML = "+" + poengPerKlikk;
    }
}

function oppgrader3(e) {
    if (antallKlikk < 100000) {
        alert("Du har ikke nok poeng til å oppgradere.");
    } else {
        antallKlikk -= 100000;
        resultatEl.innerHTML = "100000 poeng trukket fra. Du har nå " + antallKlikk + " poeng.";
        poengPerKlikk += 100;
        knappEl.innerHTML = "+" + poengPerKlikk;
    }
}