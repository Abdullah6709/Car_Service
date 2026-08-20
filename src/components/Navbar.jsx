import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Chip,
  useScrollTrigger,
  Stack,
} from '@mui/material';
import {
  Menu as MenuIcon,
  X as CloseIcon,
  PhoneCall,
  MapPin,
  Clock,
  Wrench,
  Zap,
} from 'lucide-react';
import { appRoutes } from '../routes/appRoutes';

export default function Navbar({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const navigate = useNavigate();
  const location = useLocation();

  const navRoutes = appRoutes.filter((r) => r.inNav);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <Box
        sx={{
          backgroundColor: '#0F172A',
          color: '#9CA3AF',
          py: 0.6,
          px: { xs: 1.5, sm: 2 },
          fontSize: '0.8rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 0.5, sm: 1 }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#38BDF8' }}>
                <MapPin size={13} />
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#E2E8F0', fontSize: { xs: '0.72rem', sm: '0.8rem' } }}>
                  Location: Mamura, Main Road, Noida (Sec 66)
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                <Clock size={13} />
                <Typography variant="caption">Open 7 Days: 8 AM - 9 PM</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Chip
                icon={<Zap size={11} color="#F59E0B" />}
                label="Express 90-Min Active"
                size="small"
                sx={{
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  color: '#FBBF24',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  height: 22,
                  display: { xs: 'none', xsCustom: 'inline-flex', sm: 'inline-flex' },
                }}
              />
              <Box
                component="a"
                href="tel:+919876543210"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: '#F59E0B',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.78rem', sm: '0.85rem' },
                  '&:hover': { color: '#FBBF24' },
                }}
              >
                <PhoneCall size={13} />
                +9199531967730
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Glassmorphic Navbar */}
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(11, 15, 25, 0.95)' : 'rgba(11, 15, 25, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 72 }}>
            {/* Brand Logo */}
            <Box
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #F59E0B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                }}
              >
                <Wrench color="#FFFFFF" size={24} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #CBD5E1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  }}
                >
                  SUSHIL MOTORS
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#F59E0B',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontSize: '0.68rem',
                    display: 'block',
                  }}
                >
                  & CAR WORKSHOP • MAMURA NOIDA
                </Typography>
              </Box>
            </Box>

            {/* Mapped Desktop Navigation Links */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
            >
              {navRoutes.map((route) => {
                const isActive = location.pathname === route.path;
                return (
                  <Button
                    key={route.path}
                    onClick={() => handleNavClick(route.path)}
                    sx={{
                      color: isActive ? '#38BDF8' : '#E2E8F0',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 700 : 500,
                      px: 1.8,
                      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                      '&:hover': {
                        color: '#38BDF8',
                        backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      },
                    }}
                  >
                    {route.label}
                    {route.badge && (
                      <Box
                        component="span"
                        sx={{
                          ml: 0.8,
                          px: 0.8,
                          py: 0.2,
                          borderRadius: '6px',
                          backgroundColor: '#F59E0B',
                          color: '#000000',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                        }}
                      >
                        {route.badge}
                      </Box>
                    )}
                  </Button>
                );
              })}
            </Stack>

            {/* Action Buttons */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={onOpenBooking}
                sx={{
                  display: { xs: 'none', lg: 'inline-flex' },
                  px: 3,
                  py: 1.2,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(245, 158, 11, 0.35)',
                }}
              >
                Book Service
              </Button>

              <IconButton
                onClick={handleDrawerToggle}
                sx={{ display: { lg: 'none' }, color: '#FFFFFF', p: 1 }}
              >
                <MenuIcon size={28} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 290,
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#F59E0B' }}>
            SUSHIL MOTORS
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
            <CloseIcon size={22} />
          </IconButton>
        </Box>

        <List>
          {navRoutes.map((route) => (
            <ListItem
              button
              key={route.path}
              onClick={() => handleNavClick(route.path)}
              sx={{ borderRadius: 2, mb: 1, '&:hover': { backgroundColor: 'rgba(37, 99, 235, 0.15)' } }}
            >
              <ListItemText primary={route.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking();
            }}
          >
            Book Car Service Now
          </Button>
          <Box sx={{ mt: 3, textAlign: 'center', color: '#9CA3AF', fontSize: '0.8rem' }}>
            📍 Mamura, Sector 66, Noida<br />
            📞 Call: +9199531967730
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
