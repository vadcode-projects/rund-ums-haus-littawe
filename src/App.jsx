import About from './components/About';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Legal from './components/Legal';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
