import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {StyledEngineProvider} from '@mui/material/styles'

const theme = createTheme({})

ReactDom.render(
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <BrowserRouter> 
                <App/> 
            </BrowserRouter>
        </StyledEngineProvider>
    </ThemeProvider>
    , document.getElementById('root'));

