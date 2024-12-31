import { Backdrop, Box, CircularProgress } from '@mui/material'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Redux/Auth/authSlice'
import { memo } from 'react'

const GeneralLayout = ({ children }) => {
    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const store = useSelector(store => store);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !auth.user && !auth.isLoading) {
            dispatch(getMe({
                payload:{}
            }));
        }
    }, [])

    const isTrue = () => {
        if (store.auth.loading)
            return true;
        else
            return false;
    }

    return (
        <Box sx={{
            px: 8,
            py: 3
        }}>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={isTrue()}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Header />
                {children}
            <Footer />
        </Box>
    )
}

export default memo(GeneralLayout);