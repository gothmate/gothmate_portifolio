const email = document.querySelector('.email')
const nameCustomer = document.querySelector('.nameCustomer')
const msg = document.querySelector('.box_text')

function enviaMensagem() {
  let arrMsg = []

  arrMsg.push(email.value)
  arrMsg.push(nameCustomer.value)
  arrMsg.push(msg.value)

  sendEmail(arrMsg)

}

function sendEmail(arrMsg) {
  email.send({
    Subject: "<Contato via Website - Portifolio>",
    Body: `<\\Olá, me chamo ${arrMsg[1]}\n ${arrMsg[2]}>`,
  }).then(
    alert("E-mail enviado com sucesso.")
  );
}