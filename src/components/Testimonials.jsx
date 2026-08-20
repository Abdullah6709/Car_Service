import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Avatar, Rating, Chip } from '@mui/material';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Raman Srivastava',
      location: 'Sector 62, Noida',
      car: 'Hyundai Creta 2.0 Petrol',
      service: 'Periodic Service & AC Gas Top-up',
      rating: 5,
      comment:
        'Sushil Motors in Mamura is a gem! Authorized service centers wanted ₹14,000 for periodic service. Sushil Motors completed full oil change, filter replacements & AC gas recharge in ₹4,200 with 100% genuine parts.',
      date: '2 weeks ago',
    },
    {
      name: 'Amit Sharma',
      location: 'Sector 66, Noida',
      car: 'Maruti Suzuki Baleno',
      service: 'Express 90-Min Service',
      rating: 5,
      comment:
        'Had an urgent outstation trip and needed car servicing fast. Reached Mamura workshop at 9 AM, and they delivered my car fully serviced and washed by 10:30 AM! Excellent express team.',
      date: '1 month ago',
    },
    {
      name: 'Pooja Verma',
      location: 'Sector 75, Noida',
      car: 'Tata Nexon EV',
      service: 'Doorstep Pickup & Car Detailing',
      rating: 5,
      comment:
        'Opted for their doorstep pickup in Sector 75. Driver picked up the car on time, sent video of oil change & ceramic polish, and dropped it back in mint condition. Super convenient!',
      date: '3 weeks ago',
    },
    {
      name: 'Deepak Chaudhary',
      location: 'Mamura, Noida',
      car: 'Mahindra XUV700',
      service: 'Denting & Painting & Insurance Claim',
      rating: 5,
      comment:
        'Bumper scratch and door dent repair done flawlessly. Cashless insurance claim handled smoothly with HDFC ERGO. Matching paint color was 100% spot-on!',
      date: '1 week ago',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0B0F19',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} sx={{ mb: 8, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            label="REAL CUSTOMER REVIEWS"
            sx={{
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              color: '#FBBF24',
              fontWeight: 800,
              letterSpacing: '0.08em',
              px: 1.5,
              py: 0.5,
              border: '1px solid rgba(245, 158, 11, 0.3)',
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
            What Noida Car Owners Say
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#9CA3AF',
              maxWidth: 700,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              fontWeight: 400,
            }}
          >
            Over 15,000+ satisfied car owners trust Sushil Motors in Mamura for reliable, affordable, and honest car service.
          </Typography>
        </Stack>

        <Grid container spacing={3.5}>
          {reviews.map((rev, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Rating value={rev.rating} readOnly precision={0.5} size="small" />
                    <Chip
                      icon={<CheckCircle2 size={12} color="#10B981" />}
                      label="Verified Noida Customer"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#10B981',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{ color: '#E2E8F0', fontStyle: 'italic', mb: 3, lineHeight: 1.6 }}
                  >
                    "{rev.comment}"
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        backgroundColor: '#2563EB',
                        fontWeight: 700,
                        width: 44,
                        height: 44,
                      }}
                    >
                      {rev.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                        {rev.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 600 }}>
                        {rev.car} • {rev.location}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block' }}>
                        Service: {rev.service}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
