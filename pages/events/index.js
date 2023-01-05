import Head from "next/head";
import ContactForm from "../../components/ContactForm/ContactForm";
import EventsCards from "../../components/EventsCards/EventsCards";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import { events } from "../../utils/heroes";

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
      <HomeHero heroes={events} regular={true}/>
      <ContactForm />
      <EventsCards />
      <Footer />
      </>
  )
}
