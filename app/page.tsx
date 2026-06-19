import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="homepage-theme text-deep-gray font-jost min-h-screen">
      <Navbar />
      <Intro />
      <Testimonials />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
