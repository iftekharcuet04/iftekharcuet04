import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/about" color="inherit">
                    About
                </Button>
                <Button component={Link} to="/login" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
