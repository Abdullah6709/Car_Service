import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import { Zap, Truck, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExpressAndDoorstepBanner({ onOpenBooking }) {
  return (
    <Box
      id="express-doorstep"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#0B0F19',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Card 1: Express 90-Min Service */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%), url('/images/periodic_service.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1.5px solid rgba(245, 158, 11, 0.4)',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4.5 } }}>
                <Stack spacing={2.5}>
                  <Box>
                    <Chip
                      icon={<Zap size={14} color="#000000" />}
                      label="RAPID EXPRESS SERVICE"
                      sx={{
                        backgroundColor: '#F59E0B',
                        color: '#000000',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        mb: 1.5,
                      }}
                    />
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                      Express 90-Min Car Service
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#FCD34D', fontWeight: 600, mt: 0.5 }}>
                      In a hurry? Get complete car maintenance done in under 90 minutes!
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                    Our dedicated Express Bay utilizes two certified master mechanics working simultaneously. Relax in our air-conditioned lounge with free Wi-Fi and gourmet coffee while your car is serviced.
                  </Typography>

                  <Stack spacing={1.2}>
                    {[
                      'Dual Mechanic Rapid Bay Team',
                      'Synthetic Engine Oil & Filter Change',
                      'Full Vehicle Health Diagnostic Scan',
                      'Express Foam Wash & Interior Vacuum',
                      'Guaranteed 90-Min Turnaround Time',
                    ].map((feature, i) => (
                      <Stack direction="row" spacing={1.5} alignItems="center" key={i}>
                        <CheckCircle2 size={18} color="#F59E0B" />
                        <Typography variant="body2" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={onOpenBooking}
                    endIcon={<ArrowRight size={20} />}
                    sx={{ py: 1.5, fontWeight: 800, mt: 1, width: { xs: '100%', sm: 'fit-content' } }}
                  >
                    Book Express 90-Min Slot
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Doorstep Car Service */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%), url('/images/doorstep_express.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1.5px solid rgba(37, 99, 235, 0.4)',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4.5 } }}>
                <Stack spacing={2.5}>
                  <Box>
                    <Chip
                      icon={<Truck size={14} color="#FFFFFF" />}
                      label="NOIDA DOORSTEP SERVICE"
                      sx={{
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        mb: 1.5,
                      }}
                    />
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                      Doorstep Pick & Drop Service
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#38BDF8', fontWeight: 600, mt: 0.5 }}>
                      Zero hassle! We pick up your car from home or office in Mamura & Noida.
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                    Don't spend your weekend at a workshop. Our trained driver will pick up your car, deliver live photo/video updates during service, and return your freshly cleaned car to your doorstep.
                  </Typography>

                  <Stack spacing={1.2}>
                    {[
                      'Free Pick-Up & Drop across Noida Sectors',
                      'Fully Insured Transit Driver Protection',
                      'Real-Time WhatsApp Photos & Job Card Approval',
                      'On-Site Minor Repairs & Battery Replacement Available',
                      'Contactless Online Payment Options',
                    ].map((feature, i) => (
                      <Stack direction="row" spacing={1.5} alignItems="center" key={i}>
                        <CheckCircle2 size={18} color="#38BDF8" />
                        <Typography variant="body2" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onOpenBooking}
                    endIcon={<ArrowRight size={20} />}
                    sx={{ py: 1.5, fontWeight: 800, mt: 1, width: { xs: '100%', sm: 'fit-content' } }}
                  >
                    Schedule Free Doorstep Pickup
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
