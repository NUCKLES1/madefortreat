import Hero from "./components/Hero";
import Browse from "./components/Browse";
import WeProvide from "./components/WeProvide";
import WeOffer from "./components/WeOffer";
import FastDeliveries from "./components/FastDeliveries";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Browse />
      <WeProvide />
      <WeOffer />
      <FastDeliveries />
      <Testimonials />
      <Footer />
    </div>
  );
}
