import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import JaysTouch from './components/JaysTouch';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function LandingPage({ onBookClick }: { onBookClick: () => void }) {
  return (
    <>
      <Navbar onBookClick={onBookClick} />
      <main>
        <Hero onBookClick={onBookClick} />
        <Services onBookClick={onBookClick} />
        <JaysTouch />
        <Gallery />
        <Contact onBookClick={onBookClick} />
      </main>
      <Footer onBookClick={onBookClick} />
    </>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Router>
      <div className="relative min-h-screen bg-stealth-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage onBookClick={toggleModal} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        
        <BookingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </Router>
  );
}
