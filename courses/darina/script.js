function ChequeValue() {
  const darinaButton = document.querySelector('.js-button')

  if (darinaButton.innerHTML === 'Cheque'){
    darinaButton.innerHTML = 'Tips'
  } else {darinaButton.innerHTML = 'Cheque'}
}

