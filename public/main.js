// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `<div class="container">
  <div class="card">
    <div class="card-body" style="width:35rem; height:35rem">
      <h5 class="card-title">Joke Generator</h5>
      <p class="card-text" id="jokeSetup">😀 😀😀😀😀😀😀😀😀😀😀😀</p>
      <p class="card-text" id="jokePunchline">🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣</p>
      <button class="btn btn-primary" id="jokeButton">Get a Joke</button>
    </div>
  </div>
</div>`;
};

init();
const eventListenerHandler = () => {
  let currentJoke = null;
  document.querySelector('#jokeButton').addEventListener('click', (event) => {
    console.warn('you clicked me', event.target);

    // Fetch a new joke from an API
    if (!currentJoke) {
      document.getElementById('jokeSetup').textContent = '🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣';
      document.getElementById('jokePunchline').textContent = '🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣';

      fetch('https://v2.jokeapi.dev/joke/Any?type=twopart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        }
      })
        .then((response) => response.json())
        .then((data) => {
          currentJoke = data;
          console.warn(currentJoke);
          // Update the DOM with the new joke
          document.getElementById('jokeSetup').textContent = currentJoke.setup;
          document.getElementById('jokeButton').textContent = 'GET PUNCHLINE';
        })
        .catch((rejected) => {
          console.error('It was rejected:', rejected);
        // Optionally, handle any errors by logging them or updating the UI accordingly
        });
    } else {
      document.getElementById('jokePunchline').textContent = currentJoke.delivery;
      currentJoke = null;
      document.getElementById('jokeButton').textContent = 'Get a New Joke';
    }
  });
};

eventListenerHandler();
