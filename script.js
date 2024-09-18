const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');
const audio = document.querySelector('#gay-song');

const gayNames = ['gabriel', 'sena', 'kauan', 'firmino', 'rodrigo', 'siqueira', 'caua' ]; // add more names to this array
const felipeResponse = 'Homão da porra';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim().toLowerCase();

  let response;

  if (gayNames.includes(name)) {
    response = 'Você é extremamente gay';
  } else if (name.includes('felipe')) {
    response = felipeResponse;
  } else {
    response = 'Nada a declarar';
  }

  resultDiv.innerText = response;
  resultDiv.classList.add('result');

  if (response === 'Você é extremamente gay') {
    document.body.classList.add('gay-mode');
    audio.play();
  }
});
