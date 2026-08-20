import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import BookingModal from './components/BookingModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});

  const handleOpenBooking = (data = {}) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#0B0F19', minHeight: '100vh', color: '#F9FAFB' }}>
        {/* Navbar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Dynamic Route View */}
        <AppRouter onOpenBooking={handleOpenBooking} />

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Booking Modal */}
        <BookingModal
          open={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          initialData={bookingInitialData}
        />

        {/* WhatsApp & Call Floating Action Button */}
        <WhatsAppFloatingButton onOpenBooking={() => handleOpenBooking()} />
      </Box>
    </ThemeProvider>
  );
}
