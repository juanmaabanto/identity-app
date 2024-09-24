import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

import Footer from './components/Footer';

const Main = () => {

    return (
        <Box
            sx={{
                bgcolor: { sm: 'background.default' },
                display: 'flex',
                flexDirection: { sm: 'column' },
                minHeight: '100%',
                position: { sm: 'relative' },
                '&:after': {
                    boxFlex: { sm: 1 },
                    content: { sm: "''" },
                    display: { sm: 'block' },
                    flexGrow: { sm: 1 },
                    minHeight: { sm: '4rem' }
                },
                '&:before': {
                    boxFlex: { sm: 1 },
                    content: { sm: "''" },
                    display: { sm: 'block' },
                    flexGrow: { sm: 1 },
                    minHeight: { sm: '4rem' }
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: { xs: 1, sm: 'initial' },
                    flexDirection: 'column',
                    m: { sm: '0 auto 0 auto' },
                    minHeight: { xs: '100%', sm: '30rem' },
                    position: 'relative'
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
};

export default Main;