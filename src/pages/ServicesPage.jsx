import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage({ onOpenBooking }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 4, pb: 8 }}>
      <Container maxWidth="xl" sx={{ mb: 4 }}>
        <Breadcrumbs sx={{ color: '#9CA3AF', mb: 2 }}>
          <MuiLink color="inherit" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            Home
          </MuiLink>
          <Typography color="#38BDF8">All Services</Typography>
        </Breadcrumbs>
      </Container>
      <ServicesSection
        onSelectService={(service) => onOpenBooking({ serviceId: service.id })}
        onViewDetails={(service) => navigate(`/services/${service.id}`)}
      />
    </Box>
  );
}
