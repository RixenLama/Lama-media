import React from "react";
import HeroComp from "../components/HeroComp";
import Philosophy from "../components/Philosophy";
import TrustCompanies from "../components/TrustCompanies";
import Team from "../components/Team";
import Call from "../components/Call";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../assets/Logo.png"
import Tim from "../assets/Tim-logo.jpeg"
import ContactForm from "../components/ContactForm";
import Offerclone from "../components/Offersclone";

const Home = () => {
  const images = [
    {
     img:Logo,
     ref:'https://markkucustoms.com/'
    },
    {
      img:Tim,
      ref:'https://theintelligentmarketing.com/'
    }


  ]
  return (
    <>
      <Header />
      <HeroComp />
      <Philosophy />
      {/* <Offer /> */}
      <Offerclone />
      <TrustCompanies images={images}/>
       {/* <TrustCompanies/>  */}

      <Team />
      <Call />
      <ContactForm/>
      {/* <CaseStudy /> */}
      <Footer />
    </>
  );
};

export default Home;
