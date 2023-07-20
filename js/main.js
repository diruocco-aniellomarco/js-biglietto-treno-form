
// quanti km da percorrere
const kmUser = document.getElementById('km_user');
// quanti anni
const userAge = document.getElementById('user_age');
// Bottone invio dati
const sendButton = document.getElementById('send_information');
// Nome dell'utente
const userName = document.getElementById('user_name');

const cancelButton = document.getElementById('cancel_information');

sendButton.addEventListener('click', function() {
    // calcolo costo biglietto
    let ticketCost = kmUser.value * 0.21;
    // Sconto base per maggiorenni sotto i 65 anni
    let discount = 'Nessuno sconto applicato per questa fascia di età';
    let tipeTicket= 'Biglietto Standard'

    const carriageRandom = Math.floor(Math.random()* 15) + 1;

    const codiceCP = Math.floor(Math.random()* 99999) + 1;

    if (userAge.value == '2') {
        ticketCost = ticketCost - ((ticketCost / 100) * 20);
        discount = 'lo sconto per questa fascia d\'età è del 20%';
        tipeTicket= 'Sconto minorenni'
    }
    if (userAge.value == '3') {
        ticketCost = ticketCost - ((ticketCost / 100) * 40);
        discount = 'lo sconto per questa fascia d\'età è del 40%';
        tipeTicket= 'Sconto over 65'
    }
    // visualizzo il biglietto
    document.getElementById('ticket').classList.remove('d-none');
    

    document.getElementById('ticketCost').innerHTML = ticketCost.toFixed(2) + '€';
    document.getElementById('cost_details').innerHTML = ticketCost.toFixed(2) + '€';
    document.getElementById('discount').innerHTML = discount;
    document.getElementById('name_ticket').innerHTML = userName.value;
    document.getElementById('tipe_ticket').innerHTML = tipeTicket;
    document.getElementById('carriage').innerHTML = carriageRandom;
    document.getElementById('codice_cp').innerHTML = codiceCP;
});

cancelButton.addEventListener('click', function() {
    document.getElementById('ticket').classList.add('d-none');
    kmUser.value = '';
    userAge.value = '1';
    userName.value = '';
});



// let ticketCost = km * 0.21;
// // console.log(ticketCost);
// let discount = 'Nessuno sconto applicato per questa fascia di età';

// if (userAge < 18){
    // ticketCost = ticketCost - ((ticketCost / 100) * 20);
    // discount = 'lo sconto per questa fascia d\'età è del 20%';
// }

// if (userAge > 65){
//     ticketCost = ticketCost - ((ticketCost / 100) * 40);
//     discount = 'lo sconto per questa fascia d\'età è del 40%';
// }

// // console.log(ticketCost);

// document.getElementById('km').innerHTML = km;
// document.getElementById('userAge').innerHTML = userAge;

// document.getElementById('ticketCost').innerHTML = ticketCost.toFixed(2) + '€';

// document.getElementById('discount').innerHTML = discount;