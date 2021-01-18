//drankjes
const drinkprijs = [1.00, 2.00, 3.00];
var drinktotaal = [0, 0, 0]

var frisaantal = 0;
var bieraantal = 0;
var wijnaantal = 0;

var frisaantalvraag = 0;
var bieraantalvraag = 0;
var wijnaantalvraag = 0;

//snacks
const snackprijs = [5.00, 10.00];
var snacktotaal = [0, 0];

var snack8prompt = 0;
var snack16prompt = 0;

var snack8 = 0;
var snack16 = 0;

var bestellingstatus = true;

 while (bestellingstatus === true) {
 	bestelling();
 }

//bestel functie
 function bestelling () {
 	var bestelling = prompt("Welke bestelling wilt u toevoegen? \nKies uit fris, bier, wijn of snack. \nAls u de bestelling wilt stoppen typ dan:\nstop");
 	if (bestelling === "stop") {
 		bestellingstatus = false;
 		document.write('fris = ' + frisaantal + ' x €' + drinkprijs[0] + ' = €' + drinktotaal[0] + '<br>' + 'bier = ' + bieraantal + ' x €' + drinkprijs[1] + ' = ' + drinktotaal[1] + '<br>' + 'wijn = ' + wijnaantal + ' x €' + drinkprijs[2] + ' = €' + drinktotaal[2] + '<br>');
 		document.write('8 bitterballen = ' + snack8 + ' x €' + snackprijs[0] + ' = €' + snacktotaal[0] + '<br>' + '16 bitterballen = ' + snack16 + ' x € ' + snackprijs[1] + ' =€' + snacktotaal[1]);
 	} else if (bestelling === "fris") {
 		frisaantalvraag = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?")
 		frisaantal = parseInt(frisaantalvraag);
 		drinktotaal[0] = frisaantal * drinkprijs[0];
 	} else if (bestelling === "bier") {
 		bieraantalvraag = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?")
 		bieraantal = parseInt(bieraantalvraag);
 		drinktotaal[1] = bieraantal * drinkprijs[1];
 	} else if (bestelling === "wijn") {
 		wijnaantalvraag = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?")
 		wijnaantal = parseInt(wijnaantalvraag);
 		drinktotaal[2] = wijnaantal * drinkprijs[2];
 	} else if (bestelling === "snack") {
 		var bestellingsnack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")
 		if (bestellingsnack == 8) {
 			snack8prompt = prompt("Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?")
            snack8 = parseInt(snack8prompt);
            snacktotaal[0] = snack8 * snackprijs[0];
 		} else if (bestellingsnack == 16) {
 			snack16prompt = prompt("Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?")
            snack16 = parseInt(snack16prompt);
            snacktotaal[1] = snack16 * snackprijs[1]; 
 		} else {
 			alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
 		}
 	}
 }

