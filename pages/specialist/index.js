import Head from "next/head";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import { specialist } from "../../utils/heroes";

export default function index() {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeHero heroes={specialist} regular={true}/>
      <ContactForm />
      <Footer />
    </>
  )
}
