import React, { useState } from 'react';
import { Avatar, Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import Popup from '../../../Components/Singleton/Popup'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useDispatch } from 'react-redux';
import { updateMe } from '../../../Redux/Auth/authSlice';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const auth = useSelector(store => store.auth);
    const [formData, setFormData] = useState({...auth.user});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleOpenClose = () => setOpen(!open);

    const handleSubmit = () => {
        dispatch(updateMe({
            payload: formData,
            handleOpenClose: handleOpenClose
        }));
    }

    return (<>
            <Box pt={3}>
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 item xs={12} md={4} className="flex justify-center">
                            <Avatar
                                src={auth.user.profilePicture}
                                alt={auth.user.name}
                                sx={{ width: 150, height: 150, border: '2px solid #3f51b5' }}
                            />
                        </Grid2>

                        <Grid2 item xs={12} md={8}>
                            <Box>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    {`${auth.user.first_name} ${auth.user.last_name}`}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                    {auth.user.email}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                                    {auth.user.bio}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                                    {auth.user.phone}
                                </Typography>
                                <Popup
                                    open={open}
                                    handleOpenClose={handleOpenClose}
                                    text={'Edit Profile'}
                                    startIcon={<ModeEditOutlinedIcon/>}
                                    dialog={{title: "Edit Profile"}}
                                    actionButton={{
                                        close:{
                                            text:'Cancel',
                                            display: 'true',
                                            handleClick: handleOpenClose,
                                        },
                                        submit:{
                                            text:'Submit',
                                            display: 'true',
                                            handleClick: handleSubmit,
                                        },
                                    }}
                                >
                                    <Box component="form"
                                        sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
                                    >
                                        <TextField
                                            label="First Name"
                                            name="first_name"
                                            fullWidth required
                                            type="text"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Last Name"
                                            name="last_name"
                                            fullWidth required
                                            type="text"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Email"
                                            name="email"
                                            fullWidth required
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Phone"
                                            name="phone"
                                            fullWidth required
                                            type="text"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="About Me"
                                            name="about"
                                            multiline rows={2}
                                            fullWidth required
                                            type="text"
                                            value={formData.about}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Popup>
                            </Box>
                        </Grid2>
                    </Grid2>

                    <Box sx={{ marginTop: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {auth.user.about}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}
export default Profile;
