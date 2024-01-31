import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './components/Landings';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
       <Router>
       <Routes>
          <Route path="/" element={<Landing />} /> {/* Página de inicio */}
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;