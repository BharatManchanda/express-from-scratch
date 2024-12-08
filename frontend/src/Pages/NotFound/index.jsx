import { Box, Button, Typography } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Box className="flex flex-col items-center my-10">
            <Typography variant='h5'>404 - Page Not Found</Typography>
            <Typography>The page you are looking for does not exist.</Typography>
            <Button
                component={Link}
                to="/"
                sx={{textTransform: "capitalize"}}
            >Back to home</Button>
        </Box>
    );
};

export default NotFound;