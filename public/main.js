import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/sample_data/renderToDom';
import jokeCard from '../components/jokeCard';
// import fetchJoke from '../api/myPromise';
import eventListenerHandler from '../utils/jokeEventListener';

const init = () => {
  renderToDom('#app', jokeCard());
  eventListenerHandler();
};

init();

