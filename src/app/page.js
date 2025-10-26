import Image from "next/image";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";

export default function Main() {
  return (
   <div className="bg-gradient-to-r from-purple-100 via-white to-violet-100">
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}
