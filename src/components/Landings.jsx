import React from 'react';
import { Link } from 'react-router-dom';
import './Landings.css'

const Landing = () => {
  return (
    <div className="landing-container">
      <Link to="/pokemons">
        <button className="button-landing">Get into</button>
      </Link>
    </div>
  );
};

export default Landing;