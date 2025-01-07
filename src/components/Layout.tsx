import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">My App</Typography>
                </Toolbar>
            </AppBar>
            <Navbar /> {/* Optional: Your custom navigation component */}
            <Container sx={{ marginTop: '20px' }}>
                {children} {/* This will render the page content */}
            </Container>
            <Footer /> {/* Optional: Your custom footer component */}
        </div>
    );
};

export default Layout;
