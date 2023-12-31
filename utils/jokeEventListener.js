import fetchJoke from '../api/myPromise';

const eventListenerHandler = () => {
  const jkButton = document.querySelector('#jokeButton');
  const endPoint = 'https://v2.jokeapi.dev/joke/Any?type=twopart';
  let currentJoke = null;

  jkButton.addEventListener('click', () => {
    console.warn('you clicked me');

    if (!currentJoke) {
      document.getElementById('jokeSetup').textContent = 'Fetching your joke...';
      document.getElementById('jokePunchline').textContent = ''; // Reset the punchline

      fetchJoke(endPoint)
        .then((data) => {
          currentJoke = data;
          console.warn(currentJoke);
          document.getElementById('jokeSetup').textContent = currentJoke.setup;
          document.getElementById('jokeButton').textContent = 'GET PUNCHLINE';
        })
        .catch((error) => {
          console.error('It was rejected:', error);
          document.getElementById('jokeSetup').textContent = 'Error: Unable to fetch joke.';
        });
    } else {
      document.getElementById('jokePunchline').textContent = currentJoke.delivery;
      currentJoke = null;
      document.getElementById('jokeButton').textContent = 'Get a New Joke';
    }
  });
};

export default eventListenerHandler;
