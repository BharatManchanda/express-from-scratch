import React, { useState } from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const CustomCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%', maxWidth: 600, margin: 'auto' }}>
            {/* Carousel Items */}
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${items.length * 100}%`,
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '0 0 100%',
                            textAlign: 'center',
                            width: '100%',
                            height: 300,
                            backgroundColor: item.color || '#ddd',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                        }}
                    >
                        {item.content}
                    </Box>
                ))}
            </Box>

            {/* Navigation Buttons */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
            >
                <ArrowBack />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
            >
                <ArrowForward />
            </IconButton>

            {/* Dots for indicators */}
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
                {items.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 10,
                            height: 10,
                            margin: '0 5px',
                            borderRadius: '50%',
                            backgroundColor: currentIndex === index ? 'primary.main' : 'grey.400',
                            cursor: 'pointer',
                        }}
                    ></Box>
                ))}
            </Grid>
        </Box>
    );
};

// Usage Example
const Carusel = () => {
    const slides = [
        { content: 'Slide 1', color: '#ffcccc' },
        { content: 'Slide 2', color: '#ccffcc' },
        { content: 'Slide 3', color: '#ccccff' },
    ];

    return <CustomCarousel items={slides} />;
};

export default Carusel;
