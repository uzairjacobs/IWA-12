const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Update book1
const book1ReserveButton = document.querySelector('#book1 .reserve');
const book1CheckoutButton = document.querySelector('#book1 .checkout');
const book1CheckinButton = document.querySelector('#book1 .checkin');
const book1StatusText = document.querySelector('#book1 .status');

const book1Status = 'overdue';
const book1StatusData = STATUS_MAP[book1Status];

book1CheckinButton.style.color = 'black';
book1StatusText.style.color = book1StatusData.color;

book1ReserveButton.innerText = book1StatusData.canReserve ? 'Reserve' : 'Reserved';
book1CheckoutButton.innerText = book1StatusData.canCheckout ? 'Check Out' : 'Checked Out';
book1CheckinButton.innerText = book1StatusData.canCheckIn ? 'Check In' : 'Checked In';

if (!book1StatusData.canReserve) {
    book1ReserveButton.setAttribute('disabled', 'disabled');
}
if (!book1StatusData.canCheckout) {
    book1CheckoutButton.setAttribute('disabled', 'disabled');
}
if (!book1StatusData.canCheckIn) {
    book1CheckinButton.setAttribute('disabled', 'disabled');
}

// Update book2
const book2ReserveButton = document.querySelector('#book2 .reserve');
const book2CheckoutButton = document.querySelector('#book2 .checkout');
const book2CheckinButton = document.querySelector('#book2 .checkin');
const book2StatusText = document.querySelector('#book2 .status');

const book2Status = 'reserved';
const book2StatusData = STATUS_MAP[book2Status];

book2CheckinButton.style.color = 'black';
book2StatusText.style.color = book2StatusData.color;

book2ReserveButton.innerText = book2StatusData.canReserve ? 'Reserve' : 'Reserved';
book2CheckoutButton.innerText = book2StatusData.canCheckout ? 'Check Out' : 'Checked Out';
book2CheckinButton.innerText = book2StatusData.canCheckIn ? 'Check In' : 'Checked In';

if (!book2StatusData.canReserve) {
    book2ReserveButton.setAttribute('disabled', 'disabled');
}
if (!book2StatusData.canCheckout) {
    book2CheckoutButton.setAttribute('disabled', 'disabled');
}
if (!book2StatusData.canCheckIn) {
    book2CheckinButton.setAttribute('disabled', 'disabled');
}

// Update book3
const book3ReserveButton = document.querySelector('#book3 .reserve');
const book3CheckoutButton = document.querySelector('#book3 .checkout');
const book3CheckinButton = document.querySelector('#book3 .checkin');
const book3StatusText = document.querySelector('#book3 .status');

const book3Status = 'shelf';
const book3StatusData = STATUS_MAP[book3Status];

book3CheckinButton.style.color = 'black';
book3StatusText.style.color = book3StatusData.color;

book3ReserveButton.innerText = book3StatusData.canReserve ? 'Reserve' : 'Reserved';
book3CheckoutButton.innerText = book3StatusData.canCheckout ? 'Check Out' : 'Checked Out';
book3CheckinButton.innerText = book3StatusData.canCheckIn ? 'Check In' : 'Checked In';

if (!book3StatusData.canReserve) {
    book3ReserveButton.setAttribute('disabled', 'disabled');
}
if (!book3StatusData.canCheckout) {
    book3CheckoutButton.setAttribute('disabled', 'disabled');
}
if (!book3StatusData.canCheckIn) {
    book3CheckinButton.setAttribute('disabled', 'disabled');
}