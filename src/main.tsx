import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';

import { store } from './store/store';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
