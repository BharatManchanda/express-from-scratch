import React from 'react'
import {Button, Grid2, Typography} from '@mui/material';
import { menuLinks, sideLink } from '../Constant';
import { Link } from 'react-router-dom';
import Avtar from './Component/Avtar';
import { useSelector } from 'react-redux';

const Header = () => {
    const auth = useSelector(store => store.auth);
    return (
        <Grid2 container>
            <Grid2 item size={3}>
                <Typography variant="h5" fontWeight={'bold'} component={Link} href="/">
                    Logo
                </Typography>
            </Grid2>
            <Grid2 item size={6} className="flex justify-center">
                {menuLinks.map(({title, to}, key) => (
                    <Button
                        to={to}
                        key={key}
                        component={Link}
                        sx={{textTransform: 'capitalize'}}
                    >
                        {title}
                    </Button>
                ))}
            </Grid2>
            <Grid2 item size={3} className="flex justify-end">
                {!auth.user ? sideLink.map(({title, to}, key) => (
                    <Button
                        sx={{textTransform: 'capitalize'}}
                        to={to}
                        key={key}
                        component={Link}
                    >
                        {title}
                    </Button>
                )): <Avtar/> }
            </Grid2>
        </Grid2>
    )
}

export default Header