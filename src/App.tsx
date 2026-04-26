import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import JaysTouch from './components/JaysTouch';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative min-h-screen bg-stealth-black overflow-x-hidden">
      <Navbar onBookClick={toggleModal} />
      
      <main>
        <Hero onBookClick={toggleModal} />
        <Services onBookClick={toggleModal} />
        <JaysTouch />
        <Gallery />
        <Contact onBookClick={toggleModal} />
      </main>

      <Footer onBookClick={toggleModal} />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
