import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary text-white font-jost">
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
}
