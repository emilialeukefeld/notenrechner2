let eingabeFelder = ['tfNote1','tfNote2','tfNote3','tfNote4','tfNote5','tfNote6']
let noten = [];


let summe = 0; //aufsummierte punkte
let anzahlNoten = 0;
let ergebnis; //erechneter durchschnitt
let aktuelleEingabe;




//noten auslesen


function tfAuslesen(){

    anzahlNoten=0
    summe=0

    for (let i = 0; i < eingabeFelder.lenght; i = i + 1)
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefung(aktuelleEingabe);
        ergebnis = summe/anzahlNoten;

        document.getElementById("ausgabe").innerHTML = ergebnis;

        //Farbänderung je nach Punkzahl

        if (ergebnis < 6) {document.getElementById("ausgabe").style.color = "crimson"}
        else {document.getElementById("ausgabe").style.color = "orange"}

        if (ergebnis > 10) {document.getElementById("ausgabe").style.color = "green"}


    
}

function eingabeUeberpruefung(punkte) {
    if (isNaN(punkte)){
        console.log("Keine Zahl");
    } else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }
}
