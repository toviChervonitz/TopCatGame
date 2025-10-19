// import * as React from 'react';
// import { Stack, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { purple } from '@mui/material/colors';

// export default function Top3({ top = [] }) {
//     if (!top.length) {
//         return <Typography variant="h5">No Information</Typography>;
//     }

//     return (
//         <>
//             <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
//                 {top.slice(0, 3).map((u, idx) => (
//                     <Card
//                         key={u.id ?? idx}
//                         elevation={3}
//                         sx={{
//                             width: 220,
//                             borderRadius: 2,
//                             border: '1px solid',
//                             borderColor: 'rgba(228, 90, 200, 0.75)',
//                             textAlign: 'center',
//                             bgcolor: 'transparent',
//                             color: '#fff',
//                         }}
//                     >
//                         {u.image ? (
//                             <CardMedia
//                                 component="img"
//                                 image={u.image}
//                                 alt={u.name}
//                                 sx={{
//                                     backgroundColor: 'rgba(228, 90, 200, 0.75) !important',
//                                     height: 120,
//                                     objectFit: 'cover',
//                                     borderRadius: 1.5,
//                                 }}
//                             />
//                         ) : null}

//                         <CardContent sx={{ pt: 1, backgroundColor: 'rgba(228, 90, 200, 0.75) !important' }}>
//                             <Typography sx={{ fontWeight: 700 }}>{u.name}</Typography>
//                             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//                                 Score: {u.score}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Stack>
//         </>
//     );
// }

import * as React from 'react';
import { Stack, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
export default function Top3({ top = [] }) {
    if (!top.length) {
        return <Typography variant="h5" sx={{ color: '#fff' }}>No Information</Typography>;
    }

    const medals = ['🥇', '🥈', '🥉'];
    const gradients = [
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    ];

    return (
        <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
            {top.slice(0, 3).map((u, idx) => (
                <Card
                    key={u.id ?? idx}
                    elevation={8}
                    sx={{
                        width: 160,
                        borderRadius: 3,
                        background: gradients[idx],
                        textAlign: 'center',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'visible',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-8px) scale(1.05)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -15,
                            right: -10,
                            fontSize: '2.5rem',
                            zIndex: 10,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                        }}
                    >
                        {medals[idx]}
                    </Box>

                    {u.image ? (
                        <CardMedia
                            component="img"
                            image={u.image}
                            alt={u.name}
                            sx={{
                                height: 140,
                                objectFit: 'cover',
                                borderBottom: '3px solid rgba(255,255,255,0.3)',
                            }}
                        />
                    ) : null}

                    <CardContent sx={{ pt: 2, pb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>
                            {u.name}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                opacity: 0.95,
                                fontWeight: 600,
                                fontSize: '1rem',
                            }}
                        >
                            🏆 {u.score}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
}