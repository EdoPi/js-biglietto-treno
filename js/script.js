var km = prompt ('quanti km vuoi percorrere?');
console.log('vuole percorrere: ' + km + ' km');

var age = prompt ('Quanti anni hai?');
console.log('l\'utente ha: ' + age + ' anni');

var tariffa = (0.21);


var ticketPrice = parseInt( km * tariffa);
console.log('il prezzo del biglietto per i tuoi km è: ' + ticketPrice + ' €');
console.log(typeof ticketPrice);


if (age < 18) {
  ticketPrice -= ticketPrice * 0.2;
  console.log('il prezzo del tuo biglietto UNDER è: ' + ticketPrice + ' €');
} else if (age > 65) {
  ticketPrice -= ticketPrice * 0.4;
  console.log('il prezzo del tuo biglietto OVER è: ' + ticketPrice + ' €');
} else {
  console.log('il prezzo del tuo biglietto è: ' + ticketPrice + ' €');
}
