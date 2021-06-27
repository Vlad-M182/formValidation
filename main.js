
let form = document.querySelector('#form');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let guests = document.querySelector('#guests');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let deperture = document.querySelector('#deperture');
let radio = document.querySelectorAll('input[type="radio"]');
let email = document.querySelector('#email');
let checkEmail;

console.log(radio);

function removeErrorOnInput(element) {
	element.addEventListener('input', () => {
		if(element.validity.valid) {
			element.nextElementSibling.innerHTML = '';
			element.nextElementSibling.className = "error";
		}
	})
}

function setErrorOnSubmit(element, message) {
	if(!element.validity.valid || element.value === '') {
		element.nextElementSibling.innerHTML = message;
		element.nextElementSibling.className = "error active";
	}
}

removeErrorOnInput(firstName);
removeErrorOnInput(lastName);
removeErrorOnInput(email);

email.addEventListener('input', () => {
	checkEmail = email.value;
	if(!checkEmail.endsWith('.com')){
		email.nextElementSibling.innerHTML = 'example@mail.com';
		email.nextElementSibling.className = "error active";
	}
})

guests.addEventListener('input', () => {
	if(guests.validity.rangeOverflow || guests.validity.rangeUnderflow || !guests.validity.valid) {
		guests.nextElementSibling.innerHTML = '1 - 15';
		guests.nextElementSibling.className = "error active";
	} else {
		guests.nextElementSibling.innerHTML = '';
		guests.nextElementSibling.className = "error";
	}
})

form.addEventListener('submit', (e) => {
	setErrorOnSubmit(firstName, 'Enter your first-name');
	setErrorOnSubmit(lastName, 'Enter your last-name');
	setErrorOnSubmit(email, 'Enter your email (example@mail.com)');
	setErrorOnSubmit(guests, 'Enter number of guests');

	if(!date.validity.valid || date.value === '') {
		datetime.nextElementSibling.innerHTML = 'Enter arrival date & time';
		datetime.nextElementSibling.className = "error active";
	}
	if(!time.validity.valid || time.value === '') {		datetime.	nextElementSibling.innerHTML = 'Enter arrival date & time';
		datetime.nextElementSibling.className = "error active";
	}

	setErrorOnSubmit(deperture, 'Enter deperture date');

	radio.forEach(elem => {
		if(!elem.validity.valid || elem.value === '') {
			document.querySelector('.pickup').lastElementChild.innerHTML = 'Choose pickup';
			document.querySelector('.pickup').lastElementChild.className = "error active";
		}
	})

	e.preventDefault();
})