import React, { Suspense } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '@mui/material/Box';

import Header from './components/Header';

const SignIn = () => {
    const location = useLocation();
    const navType = useNavigationType();

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                borderColor: { sm: 'divider' },
                borderRadius: { sm: '0.5rem' },
                borderStyle: { sm: 'solid' },
                borderWidth: { sm: '0.0625rem' },
                display: 'flex',
                flex: 'auto',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                width: { sm: '25rem' }
            }}
        >
            <Header />
            <Box
                sx={{
                    flexGrow: 1,
                    flexShrink: 0,
                    height: 'auto',
                    overflow: 'hidden',
                    p: { xs: '0 1.5rem 1.5rem', sm: '0 2rem 2rem' }
                }}
            >
                <Suspense fallback={<div></div>}>
                    <AnimatePresence initial={false} mode='wait'>
                        <motion.div
                            key={location.pathname}
                            initial={{ x: navType === 'POP' ? '-100%' : '100%' }}
                            animate={{ x: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            transition={{ duration: .2 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </Suspense>
            </Box>
        </Box>
    );
};

export default SignIn;