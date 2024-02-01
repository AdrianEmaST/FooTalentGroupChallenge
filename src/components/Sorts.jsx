import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, setSortOrder, fetchPokemonList } from '../redux/actions';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Sorts.css';

const Sorts = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sortType);
  const sortOrder = useSelector((state) => state.sortOrder);

  const handleSortTypeChange = (type) => {
    // Cambia el tipo de ordenamiento y recarga la lista
    dispatch(setSortType(type));
    dispatch(fetchPokemonList());
  };

  const handleSortOrderChange = () => {
    // Cambia la dirección de ordenamiento y recarga la lista
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setSortOrder(newOrder));
    dispatch(fetchPokemonList());
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4d466d' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Sort by:
        </Typography>
        {/* Botones para cambiar el tipo y la dirección de ordenamiento */}
        <Button
          color="inherit"
          onClick={() => handleSortTypeChange('id')}
          sx={{ borderRadius: '20px', marginLeft: '8px' }}
        >
          Number
        </Button>
        <Button
          color="inherit"
          onClick={() => handleSortTypeChange('weight')}
          sx={{ borderRadius: '20px', marginLeft: '8px' }}
        >
          Weight
        </Button>
        <Button
          color="inherit"
          onClick={() => handleSortTypeChange('height')}
          sx={{ borderRadius: '20px', marginLeft: '8px' }}
        >
          Height
        </Button>
        <Button
          color="inherit"
          onClick={handleSortOrderChange}
          sx={{ borderRadius: '20px', marginLeft: '8px' }}
        >
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Sorts;