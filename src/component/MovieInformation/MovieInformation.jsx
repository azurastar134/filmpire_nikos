import React from 'react';
import {Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating, makeStyles} from '@mui/material';
import {Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles'

const MovieInformation = () => {

  const {id} = useParams();
  const {data, isFetching, error} = useGetMovieQuery(id);
  const classes = useStyles();
  
  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" >
        <CircularProgress size="8rem"/>
      </Box>
    )
  }
  
  if(error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Link to="/">
          Something has gone wrong go back!
        </Link>
      </Box>
    )
  }
  const title = data?.title + " ";
  const date = data.release_date;
  console.log(data)
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img 
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {title} ({date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average /2}/>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieInformation;