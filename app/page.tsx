import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-primary text-white font-jost">
      <Navbar />
      <Intro />
      <Testimonials />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
