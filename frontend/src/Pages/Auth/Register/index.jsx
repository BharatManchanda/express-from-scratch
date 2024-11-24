import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid2,
} from '@mui/material';
import { initForm } from './Constant';

const Register = () => {
    const [formData, setFormData] = useState({...initForm});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here (API call or validation)
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 item size={6}>
                        <TextField
                            label="First Name"
                            name="first_name"
                            fullWidth required
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 item size={6}>
                        <TextField
                            label="Last Name"
                            name="last_name"
                            fullWidth required
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </Grid2>
                </Grid2>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    fullWidth required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    label="Confirm Password"
                    name="confirm_password"
                    fullWidth required
                    type="password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, textTransform: 'capitalize' }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
