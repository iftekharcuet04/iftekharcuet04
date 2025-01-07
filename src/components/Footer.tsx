import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1976d2', padding: '10px 0', marginTop: '20px' }}>
            <Typography color="white" align="center">
                © 2025 My App. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
