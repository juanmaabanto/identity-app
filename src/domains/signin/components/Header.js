import React from 'react';
import Box from '@mui/material/Box';

const Header = () => {

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                p: { xs: '1.5rem', sm: '2rem' }
            }}
        >
            <Box
                alt='logo'
                component='img'
                sizes="96x96"
                src='assets/images/logo96.png'
                sx={{
                    height: '1.875rem',
                    width: '1.875rem'
                }}
            />
            <Box
                sx={{
                    color: 'text.primary',
                    fontFamily: "'Josefin Slab', serif",
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    ml: '0.25rem',
                    pt: '0.25rem'
                }}
            >
                Sofisoft ERP
            </Box>
        </Box>
    );
};

export default Header;