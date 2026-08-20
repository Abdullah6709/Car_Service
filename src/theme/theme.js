import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563EB', // Electric Cobalt Blue
      light: '#60A5FA',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F59E0B', // Vibrant Warm Amber / Gold
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#000000',
    },
    background: {
      default: '#0B0F19', // Deep Automotive Carbon Dark
      paper: '#111827',   // Dark Slate Paper
      subtle: '#1F2937',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#9CA3AF',
      accent: '#38BDF8',
    },
    accent: {
      green: '#10B981',
      orange: '#FF5722',
      purple: '#8B5CF6',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      borderRadius: '10px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.35)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          color: '#000000',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 16,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(37, 99, 235, 0.4)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(37, 99, 235, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
