import React from 'react';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <Box
                sx={{
                    color: 'text.primary',
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    lineHeight: 1.167,
                    textAlign: 'center'
                }}
            >
                {t('identifier.header.title')}
            </Box>
            <Box
                sx={{
                    color: 'text.primary',
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    paddingTop: '0.5rem',
                    textAlign: 'center'
                }}
            >
                {t('identifier.header.subtitle')}
            </Box>
        </>
    );
};

export default Header;