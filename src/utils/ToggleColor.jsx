import React, { useState, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'


export const ColorModeContext = createContext();

const ToggleColor = ({children}) => {
    const [mode, setMode] = useState('light');

    const toggleColor = () => 
    {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light' ));
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode]);
    
  return (
    <ColorModeContext.Provider value={{mode, setMode, toggleColor}}>
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColor;