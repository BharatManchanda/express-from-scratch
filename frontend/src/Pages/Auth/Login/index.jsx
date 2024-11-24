import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid2,
} from '@mui/material';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here (API call or validation)
        console.log('Form Data Submitted:', formData);
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
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            fullWidth
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            fullWidth
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </Grid2>
                </Grid2>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    fullWidth
                    required
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterPage;
