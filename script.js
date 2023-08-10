const email = document.querySelector('.email')
const nameCustomer = document.querySelector('.nameCustomer')
const msg = document.querySelector('.box_text')
const submit = document.querySelector('.submit');

function limpaMensagem() {
	email.value = '';
	nameCustomer.value = '';
	msg.value = '';
}

submit.addEventListener('click', () => {
	setTimeout(() => {
		limpaMensagem();
	}, 1000);
});