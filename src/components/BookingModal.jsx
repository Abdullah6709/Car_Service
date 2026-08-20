import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Card,
  CardContent,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from '@mui/material';
import {
  X as CloseIcon,
  CheckCircle2,
  Car,
  Wrench,
  Calendar,
  Clock,
  Truck,
  MapPin,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { carBrands, noidaSectors } from '../data/carModels';
import { servicesData } from '../data/servicesData';

export default function BookingModal({ open, onClose, initialData = {} }) {
  const [activeStep, setActiveStep] = useState(0);

  // Form states
  const [brand, setBrand] = useState(initialData.brand || 'Maruti Suzuki');
  const [model, setModel] = useState(initialData.model || 'Swift');
  const [selectedServiceIds, setSelectedServiceIds] = useState(
    initialData.serviceId ? [initialData.serviceId] : ['periodic-service']
  );
  const [pickupType, setPickupType] = useState('doorstep'); // 'doorstep' or 'workshop'
  const [sector, setSector] = useState(noidaSectors[0]);
  const [date, setDate] = useState('2026-08-21');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Confirmation state
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData.brand) setBrand(initialData.brand);
    if (initialData.model) setModel(initialData.model);
    if (initialData.serviceId) setSelectedServiceIds([initialData.serviceId]);
    if (initialData.serviceIds) setSelectedServiceIds(initialData.serviceIds);
  }, [initialData]);

  const currentBrandObj = carBrands.find((b) => b.name === brand);

  const steps = ['Vehicle Details', 'Select Services', 'Schedule & Location', 'Confirm Booking'];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Submit booking
      const ref = 'SM-ND-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(ref);
      setBookingConfirmed(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleResetAndClose = () => {
    setActiveStep(0);
    setBookingConfirmed(false);
    onClose();
  };

  const handleToggleService = (id) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length === 1) return;
      setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const selectedServicesList = servicesData.filter((s) => selectedServiceIds.includes(s.id));
  const estimatedTotal = selectedServicesList.reduce((sum, s) => sum + (s.price || 0), 0);

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#111827',
          color: '#FFFFFF',
          borderRadius: { xs: 3, sm: 4 },
          border: '1px solid rgba(37, 99, 235, 0.3)',
          p: { xs: 0.5, sm: 2 },
          m: { xs: 1, sm: 2 },
          maxHeight: '92vh',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              backgroundColor: '#2563EB',
              display: 'flex',
            }}
          >
            <Wrench size={20} color="#FFFFFF" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              Book Car Service
            </Typography>
            <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 600 }}>
              Sushil Motors • Mamura, Noida
            </Typography>
          </Box>
        </Stack>

        <IconButton onClick={handleResetAndClose} sx={{ color: '#9CA3AF' }}>
          <CloseIcon size={22} />
        </IconButton>
      </Box>

      <DialogContent sx={{ pt: 1 }}>
        {bookingConfirmed ? (
          /* Confirmation Screen */
          <Box sx={{ textAlign: 'center', py: 4, px: { xs: 1, sm: 3 } }}>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <CheckCircle2 size={40} />
            </Box>
            <Chip
              label={`BOOKING CONFIRMED #${bookingRef}`}
              color="success"
              sx={{ fontWeight: 800, px: 1, mb: 2 }}
            />
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#FFFFFF', mb: 1 }}>
              Your Service Slot is Reserved!
            </Typography>
            <Typography variant="body1" sx={{ color: '#9CA3AF', maxWidth: 550, mx: 'auto', mb: 4 }}>
              Our service advisor from <b>Sushil Motors Mamura</b> will contact you shortly at <b>{phone}</b> to confirm arrival details.
            </Typography>

            <Card
              sx={{
                maxWidth: 550,
                mx: 'auto',
                p: 3,
                backgroundColor: '#1F2937',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'left',
                mb: 4,
              }}
            >
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Vehicle:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                    {brand} {model}
                  </Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Selected Services:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#38BDF8' }}>
                    {selectedServicesList.map((s) => s.title).join(', ')}
                  </Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Service Mode:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#F59E0B' }}>
                    {pickupType === 'doorstep' ? `Free Doorstep Pickup (${sector})` : 'Self Drive to Mamura Workshop'}
                  </Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Scheduled Date & Time:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#10B981' }}>
                    {date} ({timeSlot})
                  </Typography>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                    Estimated Amount:
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: '#F59E0B' }}>
                    ₹{estimatedTotal}
                  </Typography>
                </Stack>
              </Stack>
            </Card>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleResetAndClose}
                sx={{ fontWeight: 800, px: 4 }}
              >
                Done / Back to Home
              </Button>
              <Button
                component="a"
                href={`https://wa.me/919953196773?text=Hi%20Sushil%20Motors,%20I%20just%20booked%20service%20ref%20${bookingRef}%20for%20my%20${brand}%20${model}`}
                target="_blank"
                variant="outlined"
                color="primary"
                size="large"
                sx={{ fontWeight: 700 }}
              >
                Track via WhatsApp
              </Button>
            </Stack>
          </Box>
        ) : (
          /* Multi-Step Stepper Flow */
          <Box>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mb: 4,
                pt: 1,
                '& .MuiStepLabel-label': { color: '#9CA3AF', fontSize: '0.78rem' },
                '& .MuiStepLabel-label.Mui-active': { color: '#F59E0B', fontWeight: 700 },
                '& .MuiStepLabel-label.Mui-completed': { color: '#10B981' },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* STEP 0: Vehicle Details */}
            {activeStep === 0 && (
              <Stack spacing={3} sx={{ py: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                  Select Car Manufacturer & Model
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth>
                      <InputLabel sx={{ color: '#9CA3AF' }}>Car Manufacturer</InputLabel>
                      <Select
                        value={brand}
                        label="Car Manufacturer"
                        onChange={(e) => {
                          setBrand(e.target.value);
                          setModel('');
                        }}
                        sx={{ color: '#FFFFFF', borderRadius: 2.5 }}
                      >
                        {carBrands.map((b) => (
                          <MenuItem key={b.name} value={b.name}>
                            {b.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth disabled={!brand}>
                      <InputLabel sx={{ color: '#9CA3AF' }}>Car Model</InputLabel>
                      <Select
                        value={model}
                        label="Car Model"
                        onChange={(e) => setModel(e.target.value)}
                        sx={{ color: '#FFFFFF', borderRadius: 2.5 }}
                      >
                        {currentBrandObj?.models.map((m) => (
                          <MenuItem key={m} value={m}>
                            {m}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Stack>
            )}

            {/* STEP 1: Select Services */}
            {activeStep === 1 && (
              <Stack spacing={2} sx={{ py: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                  Select Required Services
                </Typography>
                <Grid container spacing={1.5} sx={{ maxHeight: 340, overflowY: 'auto', pr: 1 }}>
                  {servicesData.map((service) => {
                    const isChecked = selectedServiceIds.includes(service.id);
                    return (
                      <Grid size={{ xs: 12 }} key={service.id}>
                        <Card
                          onClick={() => handleToggleService(service.id)}
                          sx={{
                            p: 1.5,
                            cursor: 'pointer',
                            backgroundColor: isChecked ? 'rgba(37, 99, 235, 0.2)' : '#1F2937',
                            border: isChecked ? '1.5px solid #2563EB' : '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 2.5,
                          }}
                        >
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Stack direction="row" spacing={1.5} alignItems="center">
                              <CheckCircle2
                                size={20}
                                color={isChecked ? '#38BDF8' : '#6B7280'}
                              />
                              <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                                  {service.title}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
                                  {service.tagline}
                                </Typography>
                              </Box>
                            </Stack>
                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#F59E0B' }}>
                              {service.price > 0 ? `₹${service.price}` : service.priceLabel}
                            </Typography>
                          </Stack>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            )}

            {/* STEP 2: Schedule & Location */}
            {activeStep === 2 && (
              <Stack spacing={3} sx={{ py: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                  Choose Pickup & Date
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup row value={pickupType} onChange={(e) => setPickupType(e.target.value)}>
                    <FormControlLabel
                      value="doorstep"
                      control={<Radio sx={{ color: '#9CA3AF', '&.Mui-checked': { color: '#38BDF8' } }} />}
                      label={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Truck size={18} color="#38BDF8" />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                            Free Doorstep Pick & Drop (Noida)
                          </Typography>
                        </Stack>
                      }
                    />
                    <FormControlLabel
                      value="workshop"
                      control={<Radio sx={{ color: '#9CA3AF', '&.Mui-checked': { color: '#F59E0B' } }} />}
                      label={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Wrench size={18} color="#F59E0B" />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                            I will visit Workshop in Mamura
                          </Typography>
                        </Stack>
                      }
                    />
                  </RadioGroup>
                </FormControl>

                {pickupType === 'doorstep' && (
                  <FormControl fullWidth>
                    <InputLabel sx={{ color: '#9CA3AF' }}>Select Noida Sector/Area</InputLabel>
                    <Select
                      value={sector}
                      label="Select Noida Sector/Area"
                      onChange={(e) => setSector(e.target.value)}
                      sx={{ color: '#FFFFFF', borderRadius: 2.5 }}
                    >
                      {noidaSectors.map((sec) => (
                        <MenuItem key={sec} value={sec}>
                          {sec}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      type="date"
                      label="Preferred Date"
                      fullWidth
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#1F2937',
                          color: '#FFFFFF',
                          borderRadius: 2.5,
                        },
                        '& .MuiInputLabel-root': { color: '#9CA3AF' },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl fullWidth>
                      <InputLabel sx={{ color: '#9CA3AF' }}>Preferred Time Slot</InputLabel>
                      <Select
                        value={timeSlot}
                        label="Preferred Time Slot"
                        onChange={(e) => setTimeSlot(e.target.value)}
                        sx={{ color: '#FFFFFF', borderRadius: 2.5 }}
                      >
                        {['8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM'].map((slot) => (
                          <MenuItem key={slot} value={slot}>
                            {slot}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Stack>
            )}

            {/* STEP 3: Confirm Details */}
            {activeStep === 3 && (
              <Stack spacing={2.5} sx={{ py: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                  Contact Information
                </Typography>

                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': { backgroundColor: '#1F2937', color: '#FFFFFF', borderRadius: 2.5 },
                    '& .MuiInputLabel-root': { color: '#9CA3AF' },
                  }}
                />

                <TextField
                  required
                  fullWidth
                  label="Mobile Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': { backgroundColor: '#1F2937', color: '#FFFFFF', borderRadius: 2.5 },
                    '& .MuiInputLabel-root': { color: '#9CA3AF' },
                  }}
                />

                {pickupType === 'doorstep' && (
                  <TextField
                    fullWidth
                    label="Complete Address for Pickup"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': { backgroundColor: '#1F2937', color: '#FFFFFF', borderRadius: 2.5 },
                      '& .MuiInputLabel-root': { color: '#9CA3AF' },
                    }}
                  />
                )}
              </Stack>
            )}

            {/* Modal Bottom Controls */}
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ color: '#9CA3AF' }}>
                Back
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                disabled={activeStep === 0 && (!brand || !model)}
                sx={{ fontWeight: 800, px: 4 }}
              >
                {activeStep === steps.length - 1 ? 'Confirm Service Booking' : 'Next Step'}
              </Button>
            </Stack>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
