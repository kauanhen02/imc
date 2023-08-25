const form = document.querySelector("form")
const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close")

const alertError = document.querySelector(".alert-error")

modalBtnClose.addEventListener("click", function () {
  modalWrapper.classList.remove("open")
})

form.onsubmit = function (event) {
  event.preventDefault()

  const peso = parseFloat(inputPeso.value)
  const altura = parseFloat(inputAltura.value)

  if (!isNaN(peso) && !isNaN(altura)) {
    const result = IMC(peso, altura)

    modalWrapper.classList.add("open")
    alertError.classList.remove("open")

    modalMessage.innerText = `Seu IMC é de ${result}`
  } else {
    alertError.classList.add("open")
  }
}

function IMC(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2)
}
