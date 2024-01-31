const initialState = {
  pokemonList: [],
  sortType: 'id', // Tipo de ordenamiento inicial
  sortOrder: 'asc', // Dirección de ordenamiento inicial
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return { ...state, pokemonList: action.payload };
    case 'SET_SORT_TYPE':
      return { ...state, sortType: action.payload };
    case 'SET_SORT_ORDER':
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
};

export default rootReducer;