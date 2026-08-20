import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Chip,
} from '@mui/material';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [expanded, setExpanded] = useState('panel0');

  const faqs = [
    {
      question: 'Where is Sushil Motors & Car Workshop located in Noida?',
      answer:
        'Sushil Motors is conveniently located on Main Road, Mamura Market, Noida (Right next to Sector 66 and easily accessible from Sector 62, 63, 65, 71 & Noida Extension). You can search "Sushil Motors Mamura Noida" on Google Maps for direct directions.',
    },
    {
      question: 'How does the Express 90-Min Service work?',
      answer:
        'Our Express 90-Min Service deploys two dedicated certified technicians working simultaneously in our specialized Express Bay. While your engine oil, filter, fluids, and inspection are done in under 90 minutes, you can relax in our air-conditioned lounge with free Wi-Fi.',
    },
    {
      question: 'Is Doorstep Pick-Up & Drop free across Noida?',
      answer:
        'Yes! We offer free pick-up and drop for your car across Mamura, Sector 62, Sector 63, Sector 66, Sector 74, Sector 75, Sector 78, and surrounding Noida sectors.',
    },
    {
      question: 'Do you use original OEM spare parts?',
      answer:
        '100% Yes. We source genuine OEM and OES spare parts directly from brand authorized suppliers (Maruti Genuine Parts, Hyundai MOBIS, Tata Genuine Parts, Bosch, Exide, Amaron, etc.). All replaced parts carry manufacturer warranty.',
    },
    {
      question: 'Do you provide cashless insurance claims assistance?',
      answer:
        'Yes! We assist with cashless insurance claims for accidental damage repairs with HDFC ERGO, ICICI Lombard, Bajaj Allianz, Tata AIG, IFFCO Tokio, GoDigit, Reliance General, and all major insurance providers.',
    },
    {
      question: 'What warranty is provided on Denting & Painting?',
      answer:
        'We offer a 2-Year Paint Warranty against color fading, peeling, or cracking on all denting and painting work performed in our computerized dust-free spray paint booth.',
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#0F172A',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center', alignItems: 'center' }}>
          <Chip
            icon={<HelpCircle size={14} color="#38BDF8" />}
            label="FREQUENTLY ASKED QUESTIONS"
            sx={{
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
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
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontWeight: 800,
              color: '#FFFFFF',
            }}
          >
            Got Questions? We Have Answers
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {faqs.map((faq, idx) => {
            const panelId = `panel${idx}`;
            return (
              <Accordion
                key={idx}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{
                  backgroundColor: '#111827',
                  color: '#FFFFFF',
                  borderRadius: '12px !important',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    borderColor: '#2563EB',
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                  },
                }}
              >
                <AccordionSummary expandIcon={<ChevronDown color="#F59E0B" />}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFFFFF' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
