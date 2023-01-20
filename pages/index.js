import Head from 'next/head'
import { treatments } from '../utils/text'

// importing component
import HomeHero from '../components/HomeHero/HomeHero'
import Navbar from '../components/Navbar/Navbar'
import ContactForm from '../components/ContactForm/ContactForm'
import FirstSection from '../components/FirstSection/FirstSection'
import SecondSection from '../components/SecondSection/SecondSection'
import ThirdSection from '../components/ThirdSection/ThirdSection'
import Plans from '../components/plans/Plans'
import Footer from '../components/Footer/Footer'
import { homeHero } from '../utils/heroes'
import { section1, section2 } from '../utils/section'
import CareerCards from '../components/CareerCards/CareerCards'
import BranchLogos from '../components/BranchLogos/BranchLogos'

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeHero heroes={props.homeHero}/>
      <ContactForm />
      <FirstSection text={props.section1} normal={true} reversed={true}/>
      <FirstSection text={props.section2}/>
      <SecondSection treatments={props.treatments}/>
      <ThirdSection />
      <Plans />
      <CareerCards home={true}/>
      <BranchLogos />
      <Footer />
    </>
  )
}


export async function getStaticProps() {

  return {
    props: {
      treatments,
      section2,
      section1,
      homeHero
    },
  }
}