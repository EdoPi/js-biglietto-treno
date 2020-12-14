var km = prompt ('quanti km vuoi percorrere?');
console.log('vuole percorrere: ' + km + ' km');

var age = prompt ('Quanti anni hai?');
console.log('l\'utente ha: ' + age + ' anni');

var tariffa = (0,21);
var percUnder = (0,20);
var percOver = (0,40);

var ticketPrice = ( km * tariffa)/100;
console.log('il prezzo del biglietto per i tuoi km è: ' + ticketPrice + ' €');
console.log(typeof ticketPrice);


if (age < 18) {
  var priceUnder  = ( ticketPrice - (ticketPrice * percUnder));
  console.log('il prezzo del tuo biglietto è: ' + priceUnder);
}
