'use Client'

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbae from "./components/Navbae";
import Services from "./components/Services";
import Work from "./components/Work";



export default function Home() {
  return (
    <>
    <Navbae/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
   
  );
}
