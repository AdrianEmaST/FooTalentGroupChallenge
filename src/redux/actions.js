import { getPokemonList, getPokemonDetails } from '../services/api';

export const setPokemonList = (pokemonList) => ({
  type: 'SET_POKEMON_LIST',
  payload: pokemonList,
});

export const fetchPokemonList = () => async (dispatch, getState) => {
  try {
    const { sortType, sortOrder } = getState(); // Obtén el tipo y la dirección de ordenamiento del estado global

    let pokemonData = await getPokemonList();
    pokemonData = await Promise.all(
      pokemonData.map(async (pokemon) => getPokemonDetails(pokemon.url))
    );

    // Ordena la lista según el tipo y la dirección de ordenamiento
    pokemonData.sort((a, b) => {
      const propA = sortType === 'id' ? a.id : sortType === 'weight' ? a.weight : a.height;
      const propB = sortType === 'id' ? b.id : sortType === 'weight' ? b.weight : b.height;

      if (sortOrder === 'asc') {
        return propA - propB;
      } else {
        return propB - propA;
      }
    });

    dispatch(setPokemonList(pokemonData));
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};

export const setSortOrder = (order) => ({
  type: 'SET_SORT_ORDER',
  payload: order,
});

export const setSortType = (type) => ({
  type: 'SET_SORT_TYPE',
  payload: type,
});