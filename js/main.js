let n1;
let n2;
let n3;
let n4;
let n5;
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

//noten auslesen


function tfAuslesen(){
    anzahlNoten=0
    summe=0
    n1 = parseInt(document.getElementById("tfNote1").value);
    n2 = parseInt(document.getElementById("tfNote2").value);
    n3 = parseInt(document.getElementById("tfNote3").value);
    n4 = parseInt(document.getElementById("tfNote4").value);
    n5 = parseInt(document.getElementById("tfNote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5);

    eingabeUeberpruefung(n1);
    eingabeUeberpruefung(n2);
    eingabeUeberpruefung(n3);
    eingabeUeberpruefung(n4);
    eingabeUeberpruefung(n5);

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
