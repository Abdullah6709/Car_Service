import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Alert,
  Paper,
  Chip,
} from '@mui/material';
import {
  MapPin,
  PhoneCall,
  Clock,
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

export default function LocationAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0B0F19',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} sx={{ mb: 8, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            icon={<MapPin size={14} color="#10B981" />}
            label="VISIT OUR WORKSHOP IN MAMURA, NOIDA"
            sx={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              fontWeight: 800,
              letterSpacing: '0.08em',
              px: 1.5,
              py: 0.5,
              border: '1px solid rgba(16, 185, 129, 0.3)',
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
            Visit Us or Request a Callback
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
            Located conveniently on Main Road, Mamura (Sector 66, Noida). Drive in or request a callback for instant booking.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {/* Left Column: Workshop Location Info & Map Frame */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={3}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Paper
                    sx={{
                      p: 3,
                      backgroundColor: '#111827',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 3,
                      height: '100%',
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2.5,
                          backgroundColor: 'rgba(37, 99, 235, 0.15)',
                          color: '#38BDF8',
                        }}
                      >
                        <MapPin size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                          Workshop Address
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 0.5, lineHeight: 1.5 }}>
                          Sushil Motors & Car Workshop<br />
                          Main Road, Mamura, Sector 66<br />
                          Noida, Uttar Pradesh 201301
                        </Typography>
                        <Chip
                          icon={<Navigation size={12} color="#F59E0B" />}
                          label="Near Mamura Chowk"
                          size="small"
                          sx={{ mt: 1, backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', fontWeight: 700 }}
                        />
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Paper
                    sx={{
                      p: 3,
                      backgroundColor: '#111827',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 3,
                      height: '100%',
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2.5,
                          backgroundColor: 'rgba(245, 158, 11, 0.15)',
                          color: '#F59E0B',
                        }}
                      >
                        <PhoneCall size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                          Phone & Working Hours
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#F59E0B', fontWeight: 700, mt: 0.5 }}>
                          +9199531967730
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                          +91 98123 45678
                        </Typography>
                        <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mt: 1 }}>
                          <Clock size={14} color="#10B981" />
                          <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                            Open 7 Days: 8:00 AM - 9:00 PM
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>

              {/* Styled Google Maps iframe representation */}
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  height: 340,
                  position: 'relative',
                }}
              >
                <iframe
                  title="Sushil Motors Mamura Noida Location Map"
                  src="https://maps.google.com/maps?q=Mamura%20Sector%2066%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    p: 1.5,
                    borderRadius: 2.5,
                    border: '1px solid rgba(37, 99, 235, 0.4)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                    📍 Sushil Motors Hub - Mamura, Noida
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                    Serving Sec 62, Sec 63, Sec 66, Sec 74 & Noida Ext.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Callback Form */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                backgroundColor: '#111827',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: '0 !important' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 0.5 }}>
                  Request Instant Call Back
                </Typography>
                <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 3 }}>
                  Our service advisor will call you back within 5 minutes
                </Typography>

                {submitted ? (
                  <Alert
                    severity="success"
                    icon={<CheckCircle2 size={24} color="#10B981" />}
                    sx={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#FFFFFF',
                      border: '1px solid #10B981',
                      borderRadius: 3,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                      Thank You! Request Received.
                    </Typography>
                    <Typography variant="body2">
                      Our Sushil Motors advisor from Mamura workshop will call you shortly at {formData.phone}.
                    </Typography>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>
                      <TextField
                        required
                        fullWidth
                        label="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#1F2937',
                            color: '#FFFFFF',
                            borderRadius: 2.5,
                          },
                          '& .MuiInputLabel-root': { color: '#9CA3AF' },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        label="Mobile Number (e.g. 9876543210)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#1F2937',
                            color: '#FFFFFF',
                            borderRadius: 2.5,
                          },
                          '& .MuiInputLabel-root': { color: '#9CA3AF' },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Car Model (e.g. Creta, Baleno, Nexon)"
                        value={formData.car}
                        onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#1F2937',
                            color: '#FFFFFF',
                            borderRadius: 2.5,
                          },
                          '& .MuiInputLabel-root': { color: '#9CA3AF' },
                        }}
                      />

                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Describe your car issue or service requirement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#1F2937',
                            color: '#FFFFFF',
                            borderRadius: 2.5,
                          },
                          '& .MuiInputLabel-root': { color: '#9CA3AF' },
                        }}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<Send size={18} />}
                        sx={{ py: 1.6, fontWeight: 800, fontSize: '1rem' }}
                      >
                        Request Free Advisory Call
                      </Button>
                    </Stack>
                  </form>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
