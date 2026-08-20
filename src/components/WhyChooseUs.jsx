import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Paper, Chip } from '@mui/material';
import {
  Wrench,
  ShieldCheck,
  Award,
  CircleDollarSign,
  FileCheck,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={32} color="#F59E0B" />,
      title: 'OEM Certified Mechanics',
      description:
        'Our mechanics undergo continuous technical training to service all Maruti, Hyundai, Tata, Mahindra, Honda, Toyota, and luxury German vehicles.',
    },
    {
      icon: <ShieldCheck size={32} color="#38BDF8" />,
      title: '100% Genuine Spare Parts',
      description:
        'We only use original OEM/OES spare parts directly sourced from brand authorized distributors with official warranty.',
    },
    {
      icon: <CircleDollarSign size={32} color="#10B981" />,
      title: 'Transparent Upfront Pricing',
      description:
        'No hidden costs or surprise bills. You receive a detailed digital job card and approve every repair before work begins.',
    },
    {
      icon: <Wrench size={32} color="#8B5CF6" />,
      title: 'High-Tech Workshop Infrastructure',
      description:
        'Equipped with 3D wheel alignment, automated AC gas recharge stations, computerized diagnostic scanners, and dust-free paint booth.',
    },
    {
      icon: <FileCheck size={32} color="#EC4899" />,
      title: 'Cashless Insurance Claims',
      description:
        'Instant cashless claims assistance for accidental damages with HDFC Ergo, ICICI Lombard, Bajaj Allianz, Tata AIG, Digit, etc.',
    },
    {
      icon: <Sparkles size={32} color="#F59E0B" />,
      title: 'Strict Quality Guarantee',
      description:
        'Every vehicle undergoes a 50-point quality check by our Workshop Manager before final delivery to ensure zero rework.',
    },
  ];

  return (
    <Box
      id="why-us"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0F172A',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} sx={{ mb: 8, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            label="WHY SUSHIL MOTORS & WORKSHOP"
            sx={{
              backgroundColor: 'rgba(37, 99, 235, 0.15)',
              color: '#38BDF8',
              fontWeight: 800,
              letterSpacing: '0.08em',
              px: 1.5,
              py: 0.5,
              border: '1px solid rgba(56, 189, 248, 0.3)',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              color: '#FFFFFF',
            }}
          >
            The Premier Car Workshop in Mamura, Noida
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#9CA3AF',
              maxWidth: 750,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              fontWeight: 400,
            }}
          >
            We bridge the gap between expensive dealership service centers and unreliable local garages by offering dealer-grade quality at 40% lower costs.
          </Typography>
        </Stack>

        <Grid container spacing={3.5}>
          {features.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#2563EB',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
