import About from './components/About';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Legal from './components/Legal';
import PhotoGallery from './components/PhotoGallery';
import Process from './components/Process';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <PhotoGallery />
        <Services />
        <About />
        <Process />
        <ContactForm />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
