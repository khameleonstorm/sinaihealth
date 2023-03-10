import Head from "next/head";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import Navbar from "../../components/Navbar/Navbar";
import SecondSection from "../../components/SecondSection/SecondSection";
import { treatmentsHero } from "../../utils/heroes";
import { treatments } from "../../utils/text";

export default function index(props) {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar />
      <HomeHero heroes={props.treatmentsHero} regular={true}/>
      <ContactForm />
      <SecondSection treatments={props.treatments}/>
      <Footer />
    </>
  )
}



export async function getStaticProps() {

  return {
    props: {
      treatments,
      treatmentsHero
    },
  }
}