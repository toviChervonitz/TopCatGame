import React, { useEffect, useState } from 'react'
import { getAllUsersWithRank, getTopUsers } from '../api/TopCatService';
import Top3 from './Top3';
import UsersList from './UsersList';
import { Box, Typography } from '@mui/material';

const Display = () => {

    const [data, setData] = useState([]);
    const [top3, setTop3] = useState([]);

    useEffect(() => {
        try {
            const resData = getAllUsersWithRank();
            resData.then((res) => {
                setData(res)
                console.log(data);
                if (res.length > 3) {
                    const length = res.length;
                    setTop3(res.slice(length - 3, length));
                } else {
                    setTop3(res);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <Box
            sx={{
                width: 550,
                height: 700,
                borderRadius: 5,
                boxShadow: 3,
                p: 2,
                backgroundColor: '#3cb7adff',

            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 800,
                    color: '#fff',
                    mb: 3,
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    letterSpacing: 2,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                🏆 TOP CAT 🏆
            </Typography>
            <Top3 top={top3} />
            <UsersList data={data} />
        </Box>
    )
}

export default Display
