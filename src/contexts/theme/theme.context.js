import React from 'react';
import createTheme from '@mui/material/styles/createTheme';

const overrides = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    textTransform: 'none'
                }
            }
        }
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(',')
    }
});

export const themes = {
    default: createTheme({
        palette: {
            primary: {
                main: '#7367f0'
            }
        },
        components: overrides.components,
        typography: overrides.typography
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
            background: {
                paper: '#252423'
            },
            primary: {
                main: '#0375da'
            }
        },
        components: overrides.components,
        typography: overrides.typography
    })
};

export const ThemeContext = React.createContext({
    theme: themes.default,
    changeTheme: () => undefined
});