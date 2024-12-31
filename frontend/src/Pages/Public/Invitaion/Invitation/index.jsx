import { Box, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import "../scss/common.scss";

const Invitation2 = () => {
    const [text, setText] = useState({
        title: "Please join us for a",
        description: "The most wonderful time of \nthe year is here, Please join us for a fun and festive Christmas party filled with good food, drinks, music, and lots of holiday cheer.",
        event: "Christmas Party",
        date: "25",
        monthYear: "December\n2024",
        time: "Wednesday\n7 PM Onwards",
        address: "25-B, Adarsh Colony, Rajapark\nJaipur, Rajasthan, 302030",
        host: "Hosted by\nDavid Anthony"
    });
    const [editing, setEditing] = useState(null);
    
    const handleTextEdit = (key) => {
        setEditing(key);
    };

    return (
        <>
            <Box className="relative w-[550px] border-2 border-green-500">
                <Box component="img" src="./template/template-3.jpeg" className="w-[550px]" />
                
                <Typography
                    className="absolute center"
                    onClick={() => handleTextEdit("title")}
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: '16px',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        color: 'yellow',
                        px: 1,
                    }}
                >
                    {text.title}
                </Typography>
                <Typography
                    className="center"
                    onClick={() => handleTextEdit("description")}
                    sx={{
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        width: '250px',
                        color: '#ffeaab',
                    }}
                >
                    {text.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </Typography>
                <Typography className="center" sx={{
                    fontSize: '38px',
                    width: '277px',
                    color: '#fff'
                }}>
                    {text.event}
                </Typography>
                <Typography sx={{ fontSize: '20px', color: '#ffff00', left: '100px', borderRight: '2px solid #ffff00', pr: 2 }}>
                    {text.time}
                </Typography>
                <Typography className="center" sx={{ fontSize: '40px', color: '#ffff00', left: '280px', pl: '16px' }}>
                    {text.date}
                </Typography>
                <Typography className="center" sx={{ fontSize: '20px', width: '150px', color: '#ffff00', left: '400px', borderLeft: '2px solid #ffff00', pl: 2 }}>
                    {text.monthYear.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </Typography>
                <Typography className="center" sx={{
                    mt: 1,
                    fontSize: '18px',
                    color: '#ffff00'
                    }}>
                    {text.address}
                </Typography>
                <Typography className="center" sx={{ fontSize: '18px', color: '#ffeaab' }}>
                    {text.host}
                </Typography>
            </Box>
        </>
    );
};

export default Invitation2;
