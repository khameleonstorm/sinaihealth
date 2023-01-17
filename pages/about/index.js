import Head from "next/head";
import AboutVid from "../../components/AboutVid/AboutVid";
import ContactForm from "../../components/ContactForm/ContactForm";
import FirstSection from "../../components/FirstSection/FirstSection";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import { about } from "../../utils/heroes";
import { ourleaders } from "../../utils/about";

export default function index() {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar />
      <HomeHero heroes={about} regular={true}/>
      <ContactForm />
      <AboutVid />
      <FirstSection text={ourleaders} normal={true} reversed={true}/>
      <Footer />
    </>
  )
}
