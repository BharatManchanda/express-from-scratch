import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import "./scss/common.scss";
import Invitation2 from './invitation';

const Invitaion = () => {
    const handleTextEdit = (event) => {
        const element = event.target;
        element.setAttribute('contentEditable', 'true');
        element.focus();
        element.style.border = "1px dashed #0000ff";
        element.style.outline = 'none';
    };

    const handleBlur = (event) => {
        const element = event.target;
        element.removeAttribute('contentEditable');
        element.style.border = "none";
    };

    return (
        <>
            <Box className="relative w-[550px] border-2 border-green-500 flex flex-col items-center">
                <Box component="img" src="./template/template-3.jpeg" className="w-[550px]" />
                <Box className="absolute left-0 w-full h-full">
                    <Typography
                        className="text-center"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            textTransform: 'uppercase',
                            fontSize: '16px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                            color: 'yellow',
                            px: 1,
                            mt: '150px',
                        }}
                    >
                        Please join us for a
                    </Typography>

                    <Typography
                        className="text-center center"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            width: '350px',
                            color: '#ffeaab',
                            mt: 2,
                        }}
                    >
                        The most wonderful time of <br /> the year is here, Please join us for a fun and festive Christmas party filled with good food, drinks, music, and lots of holiday cheer.
                    </Typography>

                    <Typography
                        className="text-center"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            fontSize: '38px',
                            color: '#fff',
                            mt: 4,
                            textAlign: 'center',
                        }}
                    >
                        Christmas Party
                    </Typography>

                    <Box className="flex items-center justify-center mt-4">
                        <Typography
                            onClick={handleTextEdit}
                            onBlur={handleBlur}
                            sx={{
                                fontSize: '20px',
                                color: '#ffff00',
                                borderRight: '2px solid #ffff00',
                                pr: 2,
                                mr: 2,
                                textAlign: 'right'
                            }}
                        >
                            Wednesday
                            <br />
                            7 PM Onwards
                        </Typography>

                        <Typography
                            onClick={handleTextEdit}
                            onBlur={handleBlur}
                            sx={{
                                fontSize: '40px',
                                color: '#ffff00',
                                mr: 2,
                            }}
                        >
                            25
                        </Typography>

                        <Typography
                            onClick={handleTextEdit}
                            onBlur={handleBlur}
                            sx={{
                                fontSize: '20px',
                                width: '150px',
                                color: '#ffff00',
                                borderLeft: '2px solid #ffff00',
                                pl: 2,
                            }}
                        >
                            December
                            <br />
                            2024
                        </Typography>
                    </Box>

                    <Typography
                        className="text-center mt-4"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            fontSize: '18px',
                            color: '#ffff00',
                        }}
                    >
                        25-B, Adarsh Colony, Rajapark
                    </Typography>

                    <Typography
                        className="text-center mt-1"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            fontSize: '18px',
                            color: '#ffff00',
                        }}
                    >
                        Jaipur, Rajasthan, 302030
                    </Typography>

                    <Typography
                        className="text-center mt-4"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            fontSize: '18px',
                            color: '#ffeaab',
                        }}
                    >
                        Hosted by
                    </Typography>

                    <Typography
                        className="text-center mt-1"
                        onClick={handleTextEdit}
                        onBlur={handleBlur}
                        sx={{
                            fontSize: '22px',
                            color: '#ffeaab',
                        }}
                    >
                        David Anthony
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Invitaion;
