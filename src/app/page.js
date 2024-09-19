import About from "@/pages/about";
import Navbar from "@/Components/Navbar";
import Project from "@/pages/project";
import Skills from "@/pages/skills";
import Footer from "@/pages/footer";
export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat overflow-y-scroll"
      style={{ backgroundImage: `url('/photo-15.avif')` }}
    >
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills" >
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>

      <Footer />

    </div>
  );
}
