import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServicesSection from '../components/ServicesSection';
import ExpressAndDoorstepBanner from '../components/ExpressAndDoorstepBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import LocationAndContact from '../components/LocationAndContact';

export default function HomePage({ onOpenBooking, onViewDetails }) {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection
        onBookWithSelection={(data) => {
          onOpenBooking(data);
        }}
      />
      <StatsBar />
      <ServicesSection
        onSelectService={(service) => onOpenBooking({ serviceId: service.id })}
        onViewDetails={(service) => navigate(`/services/${service.id}`)}
      />
      <ExpressAndDoorstepBanner onOpenBooking={() => onOpenBooking()} />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <LocationAndContact />
    </>
  );
}
