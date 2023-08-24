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
//looking for an element with the class "reserve" inside an element with the ID "book1". 
//Once this element is selected, you can manipulate it

const book1CheckoutButton = document.querySelector('#book1 .checkout');
const book1CheckinButton = document.querySelector('#book1 .checkin');
const book1StatusText = document.querySelector('#book1 .status');

const book1Status = 'overdue';
const book1StatusData = STATUS_MAP[book1Status];

book1CheckinButton.style.color = 'black';
// color is set to green in html
book1StatusText.style.color = book1StatusData.color;
//sets the text color to the color in the status_map

book1ReserveButton.innerText = book1StatusData.canReserve ? 'Reserve' : 'Reserved';
//Changes the text content of the book1ReserveButton element based on the value of book1StatusData.canReserve. 
//If canReserve is true, the button will show "Reserve". 
//If canReserve is false, the button will show "Reserved".

book1CheckoutButton.innerText = book1StatusData.canCheckout ? 'Check Out' : 'Checked Out';
book1CheckinButton.innerText = book1StatusData.canCheckIn ? 'Check In' : 'Checked In';

if (!book1StatusData.canReserve) {
    book1ReserveButton.disabled = true;
}
//the condition being checked is whether the canReserve property of the book1StatusData object is not true (i.e., if it's false or falsy).
//sets the disabled property of the book1ReserveButton element to true.
//checks whether the book cannot be reserved (book1StatusData.canReserve is false), and if that's the case, it disables the book1ReserveButton, preventing users from trying to reserve the book when it's not possible.
// alternative solution reserve1.disabled = !STATUS_MAP.overdue.canReserve;

if (!book1StatusData.canCheckout) {
    book1CheckoutButton.disabled = true;
}
if (!book1StatusData.canCheckIn) {
    book1CheckinButton.disabled = true;
    book1CheckinButton.style.color = 'grey';
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
    book2ReserveButton.disabled = true;
}
if (!book2StatusData.canCheckout) {
    book2CheckoutButton.disabled = true;
}
if (!book2StatusData.canCheckIn) {
    book2CheckinButton.disabled = true;
    book2CheckinButton.style.color = 'grey';
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
    book3ReserveButton.disabled = true;
}
if (!book3StatusData.canCheckout) {
    book3CheckoutButton.disabled = true;
}
if (!book3StatusData.canCheckIn) {
    book3CheckinButton.disabled = true;
    book3CheckinButton.style.color = 'grey';
}