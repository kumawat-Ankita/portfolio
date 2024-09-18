import About from "@/pages/about";
import Navbar from "@/Components/Navbar";
import Project from "@/pages/project";
import Skills from "@/pages/skills";
import Footer from "@/pages/footer";
export default function Home() {
  return (
    <div style={{
      backgroundImage: `url('/photo-15.avif')`,
      width: '100vw',
      height: '100vh', /* Make the height larger than the viewport to allow scrolling */
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflowY: 'scroll', /* Allow scrolling */
      scrollbarWidth: 'none' /* For Firefox */
    }}
    >
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills" style={{ transform: "scale(0.9" }}>
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>

      <Footer />

    </div>
  );
}
