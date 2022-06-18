import React , {useState, useEffect} from 'react';
import { Box, CircularProgress, useMediaQuery, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import {MovieList} from '..';




const Movies = () => {

  const {data} = useGetMoviesQuery();

  console.log(data);

  return (
    <div>
        < MovieList/>
    </div>
  )
}

export default Movies;