import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
  Breadcrumbs,
  Link as MuiLink,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import { CheckCircle2, Clock, ShieldCheck, ArrowLeft, Wrench } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetailPage({ onOpenBooking }) {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  return (
    <Box sx={{ pt: 4, pb: 12, backgroundColor: '#0B0F19' }}>
      <Container maxWidth="xl">
        <Breadcrumbs sx={{ color: '#9CA3AF', mb: 3 }}>
          <MuiLink color="inherit" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            Home
          </MuiLink>
          <MuiLink color="inherit" href="/services" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>
            Services
          </MuiLink>
          <Typography color="#38BDF8">{service.title}</Typography>
        </Breadcrumbs>

        <Button
          startIcon={<ArrowLeft size={18} />}
          onClick={() => navigate('/services')}
          sx={{ color: '#9CA3AF', mb: 3 }}
        >
          Back to All Services
        </Button>

        <Grid container spacing={5}>
          {/* Main Visual & Info */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                height: { xs: 260, sm: 380 },
                mb: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(11, 15, 25, 0.9) 100%)',
                }}
              />
              <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <Chip label={service.category} color="primary" sx={{ fontWeight: 800, mb: 1.5 }} />
                <Typography variant="h3" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                  {service.title}
                </Typography>
                <Typography variant="h6" sx={{ color: '#F59E0B', fontWeight: 600 }}>
                  {service.tagline}
                </Typography>
              </Box>
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
              Detailed Checkup & Inclusions
            </Typography>
            <Typography variant="body1" sx={{ color: '#9CA3AF', mb: 4, lineHeight: 1.7 }}>
              {service.shortDesc}
            </Typography>

            <Grid container spacing={2}>
              {service.inclusions.map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircle2 size={18} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Pricing & Booking Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                p: 4,
                backgroundColor: '#111827',
                border: '1.5px solid rgba(37, 99, 235, 0.4)',
                borderRadius: 4,
                position: 'sticky',
                top: 100,
              }}
            >
              <CardContent sx={{ p: '0 !important' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 3 }}>
                  Service Summary & Booking
                </Typography>

                <Stack spacing={2.5} sx={{ mb: 4 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{ color: '#9CA3AF' }}>Estimated Time:</Typography>
                    <Chip
                      icon={<Clock size={14} color="#FFFFFF" />}
                      label={service.timeEstimate}
                      size="small"
                      sx={{ backgroundColor: '#1F2937', color: '#FFFFFF', fontWeight: 700 }}
                    />
                  </Stack>

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{ color: '#9CA3AF' }}>Warranty Covered:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#10B981' }}>
                      {service.warranty}
                    </Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{ color: '#9CA3AF' }}>Recommended Interval:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#E2E8F0' }}>
                      {service.recommendedEvery}
                    </Typography>
                  </Stack>

                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                  <Box>
                    <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Upfront All-Inclusive Pricing:</Typography>
                    <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5 }}>
                      <Typography variant="h3" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                        {service.price > 0 ? `₹${service.price}` : service.priceLabel}
                      </Typography>
                      {service.originalPrice > service.price && (
                        <Typography variant="body1" sx={{ color: '#6B7280', textDecoration: 'line-through' }}>
                          ₹{service.originalPrice}
                        </Typography>
                      )}
                    </Stack>
                  </Box>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => onOpenBooking({ serviceId: service.id })}
                  sx={{ py: 1.8, fontWeight: 800, fontSize: '1.05rem' }}
                >
                  Book Service Slot Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
