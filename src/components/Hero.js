import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '90vh',
        backgroundImage: 'url(/assets/fotofungi.jpg)', // Ruta corregida
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        bgcolor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Bienvenidos a La Estancia Gourmet
      </Typography>
      <Typography variant="h6" gutterBottom>
        La mejor experiencia gastronómica en tu ciudad.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
        Ver Menú
      </Button>
    </Box>
  );
};

export default Hero;
