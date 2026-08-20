import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Checkbox,
  FormControlLabel,
  TextField,
  Divider,
  Paper,
} from '@mui/material';
import {
  Calculator,
  Car,
  CarFront,
  Truck,
  ShieldAlert,
  Crown,
  CheckCircle2,
  Tag,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { carSegments } from '../data/carModels';
import { servicesData } from '../data/servicesData';

export default function CostEstimator({ onBookCustomPackage }) {
  const [selectedSegment, setSelectedSegment] = useState(carSegments[0]);
  const [selectedServices, setSelectedServices] = useState(['periodic-service', 'car-ac-service']);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponAppliedMessage, setCouponAppliedMessage] = useState('');

  const segmentIconMap = {
    Car,
    CarFront,
    Truck,
    ShieldAlert,
    Crown,
  };

  const handleToggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length === 1) return; // keep at least 1
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'MAMURA10' || code === 'NOIDA10') {
      setDiscountPercent(10);
      setCouponAppliedMessage('🎉 10% Special Mamura Discount Applied!');
    } else if (code === 'FIRSTSPA' || code === 'EXPRESS20') {
      setDiscountPercent(15);
      setCouponAppliedMessage('🎉 15% First-Time Express Discount Applied!');
    } else {
      setDiscountPercent(0);
      setCouponAppliedMessage('❌ Invalid coupon. Try MAMURA10 or FIRSTSPA');
    }
  };

  // Calculate raw subtotal
  const rawSubtotal = selectedServices.reduce((sum, sId) => {
    const s = servicesData.find((item) => item.id === sId);
    return sum + (s ? s.price : 0);
  }, 0);

  // Apply segment multiplier
  const adjustedSubtotal = Math.round(rawSubtotal * selectedSegment.multiplier);
  const discountAmount = Math.round((adjustedSubtotal * discountPercent) / 100);
  const finalTotal = adjustedSubtotal - discountAmount;

  return (
    <Box
      id="estimator"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0F172A',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            icon={<Calculator size={14} color="#F59E0B" />}
            label="TRANSPARENT PRICING ESTIMATOR"
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
            Calculate Your Service Estimate
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
            Choose your vehicle category and select required services for instant real-time cost calculation with zero hidden fees.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {/* Left Column: Car Category & Service Selection */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={4}>
              {/* Step 1: Car Category */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
                  1. Select Vehicle Segment
                </Typography>
                <Grid container spacing={2}>
                  {carSegments.map((segment) => {
                    const IconComp = segmentIconMap[segment.icon] || Car;
                    const isSelected = selectedSegment.id === segment.id;

                    return (
                      <Grid size={{ xs: 6, sm: 4 }} key={segment.id}>
                        <Paper
                          onClick={() => setSelectedSegment(segment)}
                          sx={{
                            p: 2,
                            cursor: 'pointer',
                            backgroundColor: isSelected
                              ? 'rgba(37, 99, 235, 0.2)'
                              : 'rgba(17, 24, 39, 0.8)',
                            border: isSelected
                              ? '2px solid #2563EB'
                              : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: '#2563EB',
                            },
                          }}
                        >
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <IconComp size={22} color={isSelected ? '#38BDF8' : '#9CA3AF'} />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  fontWeight: 700,
                                  color: isSelected ? '#FFFFFF' : '#E2E8F0',
                                }}
                              >
                                {segment.name}
                              </Typography>
                              <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block' }}>
                                {segment.example}
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>

              {/* Step 2: Select Services */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
                  2. Choose Required Services
                </Typography>

                <Grid container spacing={2}>
                  {servicesData
                    .filter((s) => s.price > 0)
                    .map((service) => {
                      const isChecked = selectedServices.includes(service.id);
                      const adjustedPrice = Math.round(service.price * selectedSegment.multiplier);

                      return (
                        <Grid size={{ xs: 12, sm: 6 }} key={service.id}>
                          <Paper
                            onClick={() => handleToggleService(service.id)}
                            sx={{
                              p: 2,
                              cursor: 'pointer',
                              backgroundColor: isChecked
                                ? 'rgba(37, 99, 235, 0.15)'
                                : 'rgba(17, 24, 39, 0.6)',
                              border: isChecked
                                ? '1.5px solid #2563EB'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                              borderRadius: 3,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={isChecked}
                                  onChange={() => handleToggleService(service.id)}
                                  sx={{ color: '#9CA3AF', '&.Mui-checked': { color: '#2563EB' } }}
                                />
                              }
                              label={
                                <Box sx={{ ml: 0.5 }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                                    {service.title}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                                    {service.timeEstimate}
                                  </Typography>
                                </Box>
                              }
                            />

                            <Typography variant="body1" sx={{ fontWeight: 800, color: '#F59E0B' }}>
                              ₹{adjustedPrice}
                            </Typography>
                          </Paper>
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Live Price Summary & Coupon Box */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card
              sx={{
                p: { xs: 2.5, sm: 4 },
                backgroundColor: '#111827',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                borderRadius: 4,
                position: { xs: 'static', lg: 'sticky' },
                top: { lg: 100 },
              }}
            >
              <CardContent sx={{ p: '0 !important' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2.5 }}>
                  Cost Estimation Breakdown
                </Typography>

                <Stack spacing={2} sx={{ mb: 3 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                      Selected Vehicle Type:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#38BDF8' }}>
                      {selectedSegment.name}
                    </Typography>
                  </Stack>

                  <Typography variant="caption" sx={{ color: '#38BDF8', fontWeight: 700, mt: 1 }}>
                    SELECTED SERVICES ({selectedServices.length}):
                  </Typography>

                  {selectedServices.map((sId) => {
                    const s = servicesData.find((item) => item.id === sId);
                    if (!s) return null;
                    const price = Math.round(s.price * selectedSegment.multiplier);
                    return (
                      <Stack key={sId} direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                          • {s.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                          ₹{price}
                        </Typography>
                      </Stack>
                    );
                  })}

                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />

                  {/* Promo Code Input */}
                  <Box sx={{ py: 1 }}>
                    <Stack direction="row" spacing={1}>
                      <TextField
                        size="small"
                        placeholder="Coupon (e.g. MAMURA10)"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#1F2937',
                            borderRadius: 2,
                            color: '#FFFFFF',
                          },
                        }}
                      />
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleApplyCoupon}
                        sx={{ fontWeight: 700, px: 2, minWidth: 90 }}
                      >
                        Apply
                      </Button>
                    </Stack>
                    {couponAppliedMessage && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: discountPercent > 0 ? '#10B981' : '#EF4444',
                          fontWeight: 600,
                          mt: 0.8,
                          display: 'block',
                        }}
                      >
                        {couponAppliedMessage}
                      </Typography>
                    )}
                  </Box>

                  {discountAmount > 0 && (
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: '#10B981', fontWeight: 600 }}>
                        Discount ({discountPercent}%):
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#10B981' }}>
                        - ₹{discountAmount}
                      </Typography>
                    </Stack>
                  )}

                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.15)' }} />

                  <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                        Estimated Total:
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                        Includes labor, taxes & washing
                      </Typography>
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#F59E0B' }}>
                      ₹{finalTotal}
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() =>
                    onBookCustomPackage({
                      segment: selectedSegment.name,
                      serviceIds: selectedServices,
                      total: finalTotal,
                    })
                  }
                  endIcon={<ArrowRight size={20} />}
                  sx={{ py: 1.8, fontWeight: 800, fontSize: '1.05rem' }}
                >
                  Book Package Now (₹{finalTotal})
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
