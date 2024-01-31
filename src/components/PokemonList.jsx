import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/actions';
import { Link } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import Sorts from './Sorts';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'; // Importa los componentes de Material-UI
import './PokemonList.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <div className='list-container'>
      <Sorts />
      <div className='cards-container'>
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} className='pokemon-card' sx={{ backgroundColor: '#4d466d' }}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <CardMedia
                component='img'
                image={pokemon.sprites.other.showdown.front_default}
                alt={pokemon.name}
              />
               <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{pokemon.name}</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Number: {pokemon.id}</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Wight: {pokemon.weight}</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Height: {pokemon.height}</Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;