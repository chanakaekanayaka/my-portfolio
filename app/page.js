'use Client'

import About from "./components/About";
import Header from "./components/Header";
import Navbae from "./components/Navbae";
import Services from "./components/Services";



export default function Home() {
  return (
    <>
    <Navbae/>
    <Header/>
    <About/>
    <Services/>
    </>
   
  );
}
