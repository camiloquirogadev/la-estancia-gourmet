import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reserva realizada:', formData);
    alert('¡Reserva realizada con éxito!');
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Reservar Mesa
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
        Completa el formulario para reservar tu mesa.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          margin: '0 auto',
          mt: 4,
          p: 3,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={3}>
          {/* Nombre */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Número de Personas */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Número de Personas</InputLabel>
              <Select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem key={num + 1} value={num + 1}>
                    {num + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Fecha */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Fecha"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Hora */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Hora"
              name="time"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Botón de Enviar */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Reservar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Reservations;
