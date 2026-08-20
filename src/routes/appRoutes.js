import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import EstimatorPage from '../pages/EstimatorPage';
import ExpressDoorstepPage from '../pages/ExpressDoorstepPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactPage from '../pages/ContactPage';
import BookingPage from '../pages/BookingPage';

export const appRoutes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    inNav: true,
  },
  {
    path: '/services',
    label: 'All Services',
    component: ServicesPage,
    inNav: true,
  },
  {
    path: '/services/:serviceId',
    label: 'Service Detail',
    component: ServiceDetailPage,
    inNav: false,
  },
  {
    path: '/estimator',
    label: 'Price Estimator',
    component: EstimatorPage,
    inNav: true,
  },
  {
    path: '/express-doorstep',
    label: 'Express 90-Min',
    component: ExpressDoorstepPage,
    inNav: true,
    badge: 'Fast',
  },
  {
    path: '/about',
    label: 'Why Us',
    component: AboutUsPage,
    inNav: true,
  },
  {
    path: '/contact',
    label: 'Contact & Map',
    component: ContactPage,
    inNav: true,
  },
  {
    path: '/booking',
    label: 'Book Service',
    component: BookingPage,
    inNav: false,
  },
];
