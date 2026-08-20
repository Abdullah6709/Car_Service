import React from 'react';
import { Box, IconButton, Tooltip, Stack } from '@mui/material';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton({ onOpenBooking }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1200,
      }}
    >
      <Stack spacing={1.5}>
        <Tooltip title="Emergency Call Workshop (+9199531967730)" placement="left">
          <IconButton
            component="a"
            href="tel:+919876543210"
            sx={{
              width: 52,
              height: 52,
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              boxShadow: '0 6px 20px rgba(37, 99, 235, 0.5)',
              '&:hover': {
                backgroundColor: '#1D4ED8',
                transform: 'scale(1.08)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <PhoneCall size={24} />
          </IconButton>
        </Tooltip>

        <Tooltip title="WhatsApp Instant Service Booking" placement="left">
          <IconButton
            component="a"
            href="https://wa.me/919876543210?text=Hi%20Sushil%20Motors,%20I%20want%20to%20book%20a%20car%20service%20in%20Mamura%20Noida"
            target="_blank"
            sx={{
              width: 58,
              height: 58,
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
              '&:hover': {
                backgroundColor: '#1EBE5B',
                transform: 'scale(1.08)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <MessageCircle size={28} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
