import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

//Metodo GET con axios.

export const getPokemonList = async (limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};