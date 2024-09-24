import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    
    useEffect(() => {
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = (e => {
            setIsDarkTheme(e.matches);
        });

        match.addEventListener('change', listener);

        return () => match.removeEventListener('change', listener);
    }, []);

    return isDarkTheme;
};