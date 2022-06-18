import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import store from './app/store';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {StyledEngineProvider} from '@mui/material/styles'

const theme = createTheme({})

ReactDom.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <BrowserRouter> 
                    <App/> 
                </BrowserRouter>
            </StyledEngineProvider>
        </ThemeProvider>
    </Provider>
    , document.getElementById('root'));

