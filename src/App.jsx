import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Collections } from './pages/Collections';
import { Gallery } from './pages/Gallery';
import { JewelleryDetail } from './pages/JewelleryDetail';
import { CustomJewellery } from './pages/CustomJewellery';
import { Services } from './pages/Services';
import { Offers } from './pages/Offers';
import { Contact } from './pages/Contact';

// Admin Page (Isolated)
import { Admin } from './pages/Admin';

export const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      <ScrollToTop />
      {/* Public Navigation - strictly hidden on /admin */}
      {!isAdminRoute && <Navbar />}

      {/* Main Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/custom-jewellery" element={<CustomJewellery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jewellery/:id" element={<JewelleryDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </main>

      {/* Global Modals & Floating Concierge - strictly hidden on /admin */}
      {!isAdminRoute && (
        <>
          <Footer />
          <EnquiryModal />
          <AppointmentModal />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default App;
