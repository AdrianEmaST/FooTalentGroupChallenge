import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Importa la función 'thunk' directamente
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;