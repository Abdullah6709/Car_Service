import React from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { X as CloseIcon, CheckCircle2, ShieldCheck, Clock, Calendar, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({ open, service, onClose, onBookNow }) {
  if (!service) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#111827',
          color: '#FFFFFF',
          borderRadius: 4,
          border: '1px solid rgba(37, 99, 235, 0.3)',
          overflow: 'hidden',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: { xs: 180, sm: 240 } }}>
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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(17, 24, 39, 1) 100%)',
          }}
        />
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
          }}
        >
          <CloseIcon size={20} />
        </IconButton>

        <Box sx={{ position: 'absolute', bottom: 20, left: 24, right: 24 }}>
          <Chip
            label={service.category}
            size="small"
            sx={{ backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 700, mb: 1 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
            {service.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#F59E0B', fontWeight: 600 }}>
            {service.tagline}
          </Typography>
        </Box>
      </Box>

      <DialogContent sx={{ p: { xs: 2.5, sm: 4 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#FFFFFF' }}>
              Service Overview
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 3, lineHeight: 1.6 }}>
              {service.shortDesc}
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#38BDF8', mb: 2 }}>
              Detailed Checkup & Inclusions ({service.inclusions.inclusions?.length || service.inclusions.length} Points):
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 3 }}>
              {service.inclusions.map((item, idx) => (
                <Grid size={{ xs: 12 }} key={idx}>
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

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                p: 3,
                backgroundColor: 'rgba(31, 41, 55, 0.6)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#FFFFFF' }}>
                Service Summary
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
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
                  <Typography variant="body2" sx={{ color: '#9CA3AF' }}>Recommended:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#E2E8F0' }}>
                    {service.recommendedEvery}
                  </Typography>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <Box>
                  <Typography variant="caption" sx={{ color: '#9CA3AF' }}>Upfront All-Inclusive Cost:</Typography>
                  <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                      {service.price > 0 ? `₹${service.price}` : service.priceLabel}
                    </Typography>
                    {service.originalPrice > service.price && (
                      <Typography variant="body2" sx={{ color: '#6B7280', textDecoration: 'line-through' }}>
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
                onClick={() => {
                  onClose();
                  onBookNow(service);
                }}
                sx={{ py: 1.5, fontWeight: 800, fontSize: '1rem' }}
              >
                Proceed to Book Slot
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
