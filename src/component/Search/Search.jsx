import React from 'react'
import { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [debounceQuery, setDebounceQuery] = useState(query);
    const dispatch = useDispatch();
    const location = useLocation();
    const handleKeyPress= (event) => {
        if(event.key === 'Enter') {
            dispatch(searchMovie(query));
        }
    }

   

    useEffect(() => {
        const timer = setTimeout(() => setQuery(debounceQuery), 1000);
        return () => clearTimeout(timer);
    }, [debounceQuery])

    useEffect(() => {
        if(query !== '')
    {
        dispatch(searchMovie(query));
    }
    else 
    {
        dispatch(searchMovie());
    }
    }, [query]);
    
    if(location.pathname !== '/') return null;

  return (
    <div className={classes.searchContainer}>
        <TextField 
            onKeyPress = {handleKeyPress}
            value = {debounceQuery}
            onChange = {(e) => setDebounceQuery(e.target.value)}
            variant = 'standard'
            InputProps={{
                className: classes.input,
                startAdornment: (
                    <InputAdornment position="start" type="text">
                        <SearchIcon/>
                    </InputAdornment>
                ),
            }}
        />
    </div>
  )
}

export default Search
