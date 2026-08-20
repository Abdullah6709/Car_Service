import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  Paper,
} from '@mui/material';
import {
  Wrench,
  ShieldCheck,
  Zap,
  Truck,
  Star,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { carBrands } from '../data/carModels';
import { servicesData } from '../data/servicesData';

export default function HeroSection({ onBookWithSelection }) {
  const [selectedBrand, setSelectedBrand] = useState('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState('Swift');
  const [selectedService, setSelectedService] = useState('periodic-service');

  const currentBrandObj = carBrands.find((b) => b.name === selectedBrand);

  const handleQuickBook = () => {
    onBookWithSelection({
      brand: selectedBrand,
      model: selectedModel,
      serviceId: selectedService,
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(180deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.95) 100%), url('/images/hero_workshop.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Background glow graphics */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column: Headline & Info */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={3}>
              <Box>
                <Chip
                  icon={<Star size={14} color="#F59E0B" fill="#F59E0B" />}
                  label="#1 Rated Car Workshop in Mamura, Noida • 4.9★ (1,800+ Reviews)"
                  sx={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#FBBF24',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    fontWeight: 700,
                    px: 1,
                    py: 2.2,
                    fontSize: { xs: '0.78rem', sm: '0.88rem' },
                    borderRadius: '50px',
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.3rem', sm: '3.2rem', md: '3.8rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                }}
              >
                Sushil Motors &<br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #38BDF8 0%, #2563EB 50%, #F59E0B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Car Workshop Noida
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#9CA3AF',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  maxWidth: 620,
                  lineHeight: 1.6,
                }}
              >
                Expert multi-brand car repair, periodic servicing, AC cooling overhaul, denting-painting & ceramic detailing in <b>Mamura, Noida</b>. Upfront prices with 100% genuine parts guarantee.
              </Typography>

              {/* Value proposition badges */}
              <Grid container spacing={2} sx={{ pt: 1 }}>
                {[
                  { icon: <Zap size={18} color="#F59E0B" />, text: '90-Min Express Service' },
                  { icon: <Truck size={18} color="#38BDF8" />, text: 'Free Doorstep Pick & Drop' },
                  { icon: <ShieldCheck size={18} color="#10B981" />, text: 'Cashless Insurance Claims' },
                  { icon: <CheckCircle2 size={18} color="#60A5FA" />, text: '100% Genuine OEM Parts' },
                ].map((item, idx) => (
                  <Grid size={{ xs: 6, sm: 6 }} key={idx}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        backgroundColor: 'rgba(17, 24, 39, 0.7)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.2,
                      }}
                    >
                      {item.icon}
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#E2E8F0', fontSize: '0.88rem' }}>
                        {item.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* Right Column: Quick Booking Selector Card */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.15)',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: '0 !important' }}>
                <Stack spacing={2.5}>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Sparkles size={20} color="#F59E0B" />
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                        Book Car Service
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 0.5 }}>
                      Select your vehicle and service to view exact upfront pricing
                    </Typography>
                  </Box>

                  {/* Brand Select */}
                  <FormControl fullWidth size="medium">
                    <InputLabel sx={{ color: '#9CA3AF' }}>Select Car Manufacturer</InputLabel>
                    <Select
                      value={selectedBrand}
                      label="Select Car Manufacturer"
                      onChange={(e) => {
                        setSelectedBrand(e.target.value);
                        setSelectedModel('');
                      }}
                      sx={{
                        borderRadius: 2.5,
                        color: '#FFFFFF',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#2563EB',
                        },
                      }}
                    >
                      {carBrands.map((b) => (
                        <MenuItem key={b.name} value={b.name}>
                          {b.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Model Select */}
                  <FormControl fullWidth size="medium" disabled={!selectedBrand}>
                    <InputLabel sx={{ color: '#9CA3AF' }}>Select Car Model</InputLabel>
                    <Select
                      value={selectedModel}
                      label="Select Car Model"
                      onChange={(e) => setSelectedModel(e.target.value)}
                      sx={{
                        borderRadius: 2.5,
                        color: '#FFFFFF',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      {currentBrandObj?.models.map((m) => (
                        <MenuItem key={m} value={m}>
                          {m}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Service Select */}
                  <FormControl fullWidth size="medium">
                    <InputLabel sx={{ color: '#9CA3AF' }}>Select Required Service</InputLabel>
                    <Select
                      value={selectedService}
                      label="Select Required Service"
                      onChange={(e) => setSelectedService(e.target.value)}
                      sx={{
                        borderRadius: 2.5,
                        color: '#FFFFFF',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      {servicesData.map((s) => (
                        <MenuItem key={s.id} value={s.id}>
                          {s.title} ({s.price ? `₹${s.price}` : 'Free Assist'})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleQuickBook}
                    endIcon={<ChevronRight size={20} />}
                    sx={{
                      py: 1.8,
                      fontSize: '1rem',
                      fontWeight: 800,
                      boxShadow: '0 6px 20px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    Check Price & Schedule Slot
                  </Button>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <CheckCircle2 size={14} color="#10B981" />
                    <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                      No advance payment needed • Free cancellation anytime
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
