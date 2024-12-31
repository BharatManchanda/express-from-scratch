import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import Carusel from './Component/Carusel'
// import CarouselSlide from './Component/CaruselSlide'
import ProductCarousel from './Component/CaruselSlide'

const Home = () => {
    const auth = useSelector(store => store)
    const products = [
        { name: "Product 1" },
        { name: "Product 2" },
        { name: "Product 3" },
        { name: "Product 4" },
        { name: "Product 5" },
    ];
    return (
        <>
            <Box className="flex flex-col justify-center items-center my-10">
                <Typography variant="h5" color="initial">
                    Canva makes it easy to create and share professional designs.
                </Typography>
                <Button variant="text" color="primary" sx={{ textTransform: 'capitalize' }}>
                    Start Designing
                </Button>
                <Carusel />
                <ProductCarousel />
            </Box>
        </>
    )
}

export default Home