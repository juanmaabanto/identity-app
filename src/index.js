import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ThemeProvider from './contexts/theme/ThemeProvider';
import './i18nextInit';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href').slice(0, -1);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter basename={baseUrl}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);