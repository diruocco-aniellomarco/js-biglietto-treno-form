// const km = parseFloat(prompt('Quanti km vuoi percorrere?'));
// const userAge= parseInt(prompt('Quanti anni hai?'));

let ticketCost = km * 0.21;
// console.log(ticketCost);
let discount = 'Nessuno sconto applicato per questa fascia di età';

if (userAge < 18){
    ticketCost = ticketCost - ((ticketCost / 100) * 20);
    discount = 'lo sconto per questa fascia d\'età è del 20%';
}

if (userAge > 65){
    ticketCost = ticketCost - ((ticketCost / 100) * 40);
    discount = 'lo sconto per questa fascia d\'età è del 40%';
}

// console.log(ticketCost);

document.getElementById('km').innerHTML = km;
document.getElementById('userAge').innerHTML = userAge;

document.getElementById('ticketCost').innerHTML = ticketCost.toFixed(2) + '€';

document.getElementById('discount').innerHTML = discount;