import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import ErrorBoundary from './components/error/ErrorBoundary';
import Main from './domains/main/Main';
import NotFound from './domains/notfound/NotFound';
import SignUp from './domains/signup/SignUp';
import { ThemeContext } from './contexts/theme/theme.context';

const Identifier = lazy(() => import('./domains/identifier/Identifier'));
const Password = lazy(() => import('./domains/password/Password'));
const SignIn = lazy(() => import('./domains/signin/SignIn'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 2
        }
    }
});

const App = () => {

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <ThemeProvider theme={theme}>
                    <ErrorBoundary>
                        <QueryClientProvider client={queryClient}>
                            <Suspense fallback={<div></div>}>
                                <Routes>
                                    <Route element={<Main />}>
                                        <Route element={<SignIn />}>
                                            <Route path='signin/identifier' element={<Identifier />} />
                                            <Route path='signin/pwd' element={<Password />} />
                                        </Route>
                                        <Route path='signup' element={<SignUp />} />
                                    </Route>
                                    <Route path='*' element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </QueryClientProvider>
                    </ErrorBoundary>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    );
};

export default App;