import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const pokemonList = useSelector((state) => state.pokemonList);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const foundPokemon = pokemonList.find(
      (pokemon) => pokemon.id === parseInt(id)
    );
    setSelectedPokemon(foundPokemon);
  }, [id, pokemonList]);

  if (!selectedPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" className="card-container" >
      <Grid>
        <Card className={`pokemon-card pokemon-detail-card`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#4d466d', maxWidth: '600px' }}>
          <CardMedia
            component="img"
            image={selectedPokemon.sprites.other.showdown.front_default}
            alt={selectedPokemon.name}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {selectedPokemon.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Number:</span> {selectedPokemon.id}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Type:</span> {selectedPokemon.types.map((type) => type.type.name).join(', ')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Weight:</span> {selectedPokemon.weight}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Height:</span> {selectedPokemon.height}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Statistics:</span>
            </Typography>
            {selectedPokemon.stats.map((stat) => (
              <Typography key={stat.stat.name} variant="body2" color="text.secondary">
                <span style={{ fontWeight: 'bold' }}>{stat.stat.name}:</span> {stat.base_stat}
              </Typography>
            ))}
          </CardContent>
          <Link to="/pokemons">
            <Button variant="contained" sx={{ backgroundColor: '#4d466d' }}>Back</Button>
          </Link>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PokemonDetails;