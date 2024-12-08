import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid2 } from '@mui/material';
import { initForm } from './Constant';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../Redux/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({...initForm});
    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            payload: formData,
            navigate
        }));
    };

    React.useEffect(() => {
        if (auth.token && auth.user) {
            // if (user.role == 'admin' || user.role == 'recruiter'){
                // navigate(`/${user.role}/dashboard`);
            // } else {
                navigate(`/`);
            // }
        }
    }, []);

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, textTransform: 'capitalize' }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
