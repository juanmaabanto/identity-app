import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from './theme.context';
import { useThemeDetector } from '../../hooks/useThemeDetector';

const ThemeProvider = ({ children }) => {
    const isDarkTheme = useThemeDetector();
    const [theme, setTheme] = useState({
        theme: themes.dark,
        changeTheme: changeTheme
    });

    function changeTheme(name) {
        setTheme(state => ({
            ...state,
            theme: themes[name] ?? themes.default
        }));
    }

    useEffect(() => {
        changeTheme(isDarkTheme ? 'dark' : 'default');
    }, [isDarkTheme])

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProvider;