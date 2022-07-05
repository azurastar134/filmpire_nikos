import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import store from './app/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {StyledEngineProvider} from '@mui/material/styles'
import ToggleColorModeProvider from './utils/ToggleColor';
import './index.css';

ReactDom.render(
    <Provider store={store}>
        <ToggleColorModeProvider>
            <StyledEngineProvider injectFirst>
                <BrowserRouter> 
                    <App/> 
                </BrowserRouter>
            </StyledEngineProvider>
        </ToggleColorModeProvider>
    </Provider>
    , document.getElementById('root'));

