import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: <Users size={28} color="#F59E0B" />, value: '15,000+', label: 'Cars Serviced in Noida' },
    { icon: <Award size={28} color="#38BDF8" />, value: '4.9 ★', label: 'Google Customer Rating' },
    { icon: <Clock size={28} color="#10B981" />, value: '90-Min', label: 'Express Turnaround' },
    { icon: <ShieldCheck size={28} color="#8B5CF6" />, value: '100%', label: 'Genuine OEM Guarantee' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0F172A',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid size={{ xs: 6, md: 3 }} key={idx}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: '#FFFFFF',
                      fontSize: { xs: '1.4rem', sm: '1.8rem' },
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9CA3AF', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
