import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Wrench,
  Snowflake,
  Paintbrush,
  Sparkles,
  Disc,
  Zap,
  ShowerHead,
  Shield,
  FileCheck,
  Timer,
  Truck,
  CheckCircle2,
  Clock,
  Search,
  ChevronRight,
  Info,
} from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';

const iconMap = {
  Wrench,
  Snowflake,
  Paintbrush,
  Sparkles,
  Disc,
  Zap,
  ShowerHead,
  Shield,
  FileCheck,
  Timer,
  Truck,
};

export default function ServicesSection({ onSelectService, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All Services'
        ? true
        : selectedCategory === 'Popular'
        ? service.popular
        : service.category === selectedCategory;

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0B0F19',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            label="OUR COMPREHENSIVE CAR SERVICES"
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
            All Car Repairs & Care Under One Roof
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
            Sushil Motors in Mamura, Noida offers certified mechanics, automated diagnostic equipment, upfront transparent pricing, and 100% genuine spare parts.
          </Typography>
        </Stack>

        {/* Search & Category Filter Bar */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 5 }}
        >
          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onChange={(e, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              maxWidth: '100%',
              '& .MuiTabs-indicator': {
                backgroundColor: '#F59E0B',
                height: 3,
                borderRadius: 2,
              },
              '& .MuiTab-root': {
                color: '#9CA3AF',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 1,
                '&.Mui-selected': {
                  color: '#FFFFFF',
                },
              },
            }}
          >
            {serviceCategories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>

          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Search service (e.g. AC, Denting, Battery)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} color="#9CA3AF" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: { xs: '100%', md: 320 },
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#111827',
                borderRadius: 2.5,
                color: '#FFFFFF',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                },
                '&:hover fieldset': {
                  borderColor: '#2563EB',
                },
              },
            }}
          />
        </Stack>

        {/* Services Grid */}
        <Grid container spacing={3.5}>
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const savings = service.originalPrice
              ? service.originalPrice - service.price
              : 0;

            return (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Image header with overlay badges */}
                  <Box sx={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="210"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.06)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(17, 24, 39, 0.95) 100%)',
                      }}
                    />

                    {/* Top Badges */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ position: 'absolute', top: 12, left: 12, right: 12 }}
                    >
                      {service.popular ? (
                        <Chip
                          label="MOST POPULAR"
                          size="small"
                          sx={{
                            backgroundColor: '#F59E0B',
                            color: '#000000',
                            fontWeight: 800,
                            fontSize: '0.7rem',
                          }}
                        />
                      ) : (
                        <Chip
                          label={service.category}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(37, 99, 235, 0.85)',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            backdropFilter: 'blur(4px)',
                          }}
                        />
                      )}

                      <Chip
                        icon={<Clock size={12} color="#FFFFFF" />}
                        label={service.timeEstimate}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(15, 23, 42, 0.8)',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          backdropFilter: 'blur(4px)',
                        }}
                      />
                    </Stack>

                    {/* Title overlay */}
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{ position: 'absolute', bottom: 12, left: 16, right: 16 }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '10px',
                          backgroundColor: 'rgba(37, 99, 235, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={20} color="#FFFFFF" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 600 }}>
                          {service.tagline}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Card Body */}
                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body2"
                      sx={{ color: '#9CA3AF', mb: 2, fontSize: '0.88rem', lineHeight: 1.5 }}
                    >
                      {service.shortDesc}
                    </Typography>

                    {/* Key Inclusions Preview */}
                    <Box sx={{ mb: 2.5, flexGrow: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#38BDF8',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        WHAT'S INCLUDED:
                      </Typography>
                      <Stack spacing={0.8}>
                        {service.inclusions.slice(0, 3).map((item, i) => (
                          <Stack direction="row" spacing={1} alignItems="flex-start" key={i}>
                            <CheckCircle2 size={15} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                            <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                      {service.inclusions.length > 3 && (
                        <Typography
                          variant="caption"
                          onClick={() => onViewDetails(service)}
                          sx={{
                            color: '#F59E0B',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-block',
                            mt: 1,
                            '&:hover': { textDecoration: 'underline' },
                          }}
                        >
                          + {service.inclusions.length - 3} more checkup items...
                        </Typography>
                      )}
                    </Box>

                    {/* Price & Action Row */}
                    <Box
                      sx={{
                        pt: 2,
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        {service.price > 0 ? (
                          <Box>
                            <Stack direction="row" alignItems="baseline" spacing={1}>
                              <Typography variant="h5" sx={{ fontWeight: 900, color: '#FFFFFF' }}>
                                ₹{service.price}
                              </Typography>
                              {service.originalPrice > service.price && (
                                <Typography
                                  variant="body2"
                                  sx={{ color: '#6B7280', textDecoration: 'line-through' }}
                                >
                                  ₹{service.originalPrice}
                                </Typography>
                              )}
                            </Stack>
                            <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block' }}>
                              {service.priceNote || 'upfront price'}
                            </Typography>
                          </Box>
                        ) : (
                          <Typography variant="h6" sx={{ fontWeight: 800, color: '#10B981' }}>
                            {service.priceLabel || 'FREE Assist'}
                          </Typography>
                        )}
                      </Box>

                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => onViewDetails(service)}
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#E2E8F0',
                            minWidth: 40,
                            px: 1.2,
                            '&:hover': { borderColor: '#38BDF8', color: '#38BDF8' },
                          }}
                        >
                          <Info size={16} />
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => onSelectService(service)}
                          sx={{ fontWeight: 700, px: 2 }}
                        >
                          Book
                        </Button>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
