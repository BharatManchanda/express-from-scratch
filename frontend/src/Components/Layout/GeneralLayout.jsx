import { Box } from '@mui/material'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Redux/Auth/authSlice'
import { memo } from 'react'

const GeneralLayout = ({children}) => {
    const auth = useSelector(store => store.auth);
    const [change, setChange] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token && !auth.user && !auth.isLoading) {
            // dispatch(getMe({
            //     payload:{}
            // }));
        }
    }, [])
    return (
        <Box sx={{
            px: 8,
            py: 3
        }}>
            <Header />
                {children}
            <Footer />
        </Box>
    )
}

export default memo(GeneralLayout);