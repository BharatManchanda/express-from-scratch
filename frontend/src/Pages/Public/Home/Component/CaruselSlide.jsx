import React, { useRef } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 8, name: "Product 8" },
    { id: 8, name: "Product 8" },
    { id: 8, name: "Product 8" },
    { id: 8, name: "Product 8" },
    { id: 8, name: "Product 8" },
];

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            <IconButton
                onClick={() => scrollCarousel("left")}
                sx={{
                    position: "absolute",
                    left: 0,
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: 2,
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            <Box ref={carouselRef} sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    padding: "20px 0",
                    "&::-webkit-scrollbar": {
                        display: "none", // Hides the scrollbar for a cleaner look
                    },
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            minWidth: "200px",
                            maxWidth: "200px",
                            flexShrink: 0,
                            textAlign: "center",
                            backgroundColor: "#f5f5f5",
                            padding: 2,
                            borderRadius: 2,
                            boxShadow: 1,
                        }}
                    >
                        {product.name}
                    </Box>
                ))}
            </Box>

            <IconButton
                onClick={() => scrollCarousel("right")}
                sx={{
                    position: "absolute",
                    right: 0,
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: 2,
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default ProductCarousel;
