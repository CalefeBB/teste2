const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');
const audio = document.querySelector('#gay-song');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim().toLowerCase(); // convert to lowercase
  let response;

  if (name.includes('Sena')) {
    response = 'Você é extremamente gay';
  } else if (name.includes('felipe')) {
    response = 'Homão da porra';
  } else {
    response = 'Nada a declarar';
  }

  resultDiv.innerText = response;
  resultDiv.classList.add('result'); // add result class for styling

  if (response === 'Você é extremamente gay') {
    document.body.classList.add('gay-mode'); // add gay mode class for background color
    audio.play(); // play the gay anthem
  }
});
