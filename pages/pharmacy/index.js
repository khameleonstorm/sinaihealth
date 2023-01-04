import Head from "next/head";
import DrugCards from "../../components/DrugCards/DrugCards";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import { pharmacy } from "../../utils/heroes";

export default function index() {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar cart={true}/>
      <HomeHero heroes={pharmacy} regular={true} shop={true}/>
      <DrugCards />
      <Footer />
      </>
  )
}
