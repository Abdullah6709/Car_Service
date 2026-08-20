import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BookingModal from '../components/BookingModal';

export default function BookingPage({ onOpenBooking }) {
  // Triggers booking modal instantly
  React.useEffect(() => {
    onOpenBooking();
  }, []);

  return (
    <Box sx={{ py: 12, textAlign: 'center', backgroundColor: '#0B0F19' }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
          Opening Service Booking Portal...
        </Typography>
        <Typography variant="body1" sx={{ color: '#9CA3AF' }}>
          Select your Maruti, Hyundai, Tata, or Mahindra vehicle to schedule service in Mamura, Noida.
        </Typography>
      </Container>
    </Box>
  );
}
