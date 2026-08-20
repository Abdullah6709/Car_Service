import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Stack, Divider, IconButton } from '@mui/material';
import { Wrench, PhoneCall, MapPin, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { appRoutes } from '../routes/appRoutes';

export default function Footer({ onOpenBooking }) {
  return (
    <Box
      sx={{
        backgroundColor: '#070A10',
        color: '#9CA3AF',
        pt: 8,
        pb: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Col 1: Brand Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563EB 0%, #F59E0B 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Wrench color="#FFFFFF" size={22} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                    SUSHIL MOTORS
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 700 }}>
                    & CAR WORKSHOP • MAMURA NOIDA
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="body2" sx={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                Premier multi-brand car repair and service workshop in Mamura, Noida. Equipped with automated diagnostics, 90-Min express bays, and 100% genuine parts guarantee.
              </Typography>

              <Stack spacing={1} sx={{ pt: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={16} color="#38BDF8" />
                  <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
                    Main Road, Mamura, Sector 66, Noida, UP 201301
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneCall size={16} color="#F59E0B" />
                  <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 700 }}>
                    +9199531967730 / +91 98123 45678
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Clock size={16} color="#10B981" />
                  <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                    Open All 7 Days • 8:00 AM - 9:00 PM
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* Col 2: Services Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
              Our 11 Car Services in Noida
            </Typography>
            <Grid container spacing={1}>
              {servicesData.map((service) => (
                <Grid size={{ xs: 6 }} key={service.id}>
                  <Typography
                    variant="caption"
                    onClick={onOpenBooking}
                    sx={{
                      color: '#9CA3AF',
                      display: 'block',
                      cursor: 'pointer',
                      py: 0.3,
                      '&:hover': { color: '#38BDF8', textDecoration: 'underline' },
                    }}
                  >
                    • {service.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Col 3: Areas Served & Highlights */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
              Noida Areas We Serve
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 2, lineHeight: 1.6 }}>
              Mamura Chowk, Sector 66, Sector 62, Sector 63, Sector 65, Sector 59, Sector 70, Sector 74, Sector 75, Sector 78, Sector 121, Noida Extension & Greater Noida West.
            </Typography>

            <Box
              sx={{
                p: 2,
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderRadius: 3,
                border: '1px solid rgba(37, 99, 235, 0.2)',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <ShieldCheck size={24} color="#38BDF8" />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: '#FFFFFF', display: 'block' }}>
                    100% Cashless Insurance Assistance
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                    Tie-up with HDFC Ergo, ICICI Lombard, Bajaj & Digit
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: '#6B7280' }}>
            © {new Date().getFullYear()} Sushil Motors & Car Workshop, Mamura Noida. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="caption" sx={{ color: '#6B7280' }}>
              Designed for Speed & Excellence in Noida
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
