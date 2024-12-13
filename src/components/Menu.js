import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const dishes = [
  { category: 'Entradas', name: 'Bruschetta', price: '$800' },
  { category: 'Platos Principales', name: 'Pasta Carbonara', price: '$1200' },
  { category: 'Postres', name: 'Tiramisu', price: '$600' },
  { category: 'Entradas', name: 'Bruschetta', price: '$800' },
  { category: 'Platos Principales', name: 'Pasta Carbonara', price: '$1200' },
  { category: 'Postres', name: 'Tiramisu', price: '$600' },
];

const Menu = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nuestro Menú
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dishes.map((dish, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {dish.name}
                </Typography>
                <Typography variant="body1">{dish.category}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {dish.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
