import React from 'react'
import {Button, Grid2, Typography} from '@mui/material';
import { menuLinks, sideLink } from '../Constant';
import { Link, useLocation } from 'react-router-dom';
import Avtar from './Component/Avtar';
import { useSelector } from 'react-redux';

const Header = () => {
    const auth = useSelector(store => store.auth);
    const location = useLocation();
    // const { hash, pathname, search } = location;
    // console.log(location.pathname,"hash, pathname, search");
    
    return (
        <Grid2 container>
            <Grid2 item size={3}>
                <Typography variant="h5" fontWeight={'bold'} component={Link} href="/">
                    Logo
                </Typography>
            </Grid2>
            <Grid2 item size={6} className="flex justify-center gap-2">
                {menuLinks.map(({title, to}, key) => (
                    <Button
                        to={to}
                        key={key}
                        component={Link}
                        sx={{
                            textTransform: 'capitalize',
                            background: location.pathname == to ? '#0000000A' : '',
                        }}
                        color="menu"
                    >
                        {title}
                    </Button>
                ))}
            </Grid2>
            
            <Grid2 item size={3} className="flex justify-end">
                {auth.user ? <Avtar/> : sideLink.map(({title, to}, key) => (
                    <Button
                        sx={{textTransform: 'capitalize'}}
                        to={to}
                        key={key}
                        component={Link}
                    >
                        {title}
                    </Button>
                )) }
            </Grid2>
        </Grid2>
    )
}

export default Header