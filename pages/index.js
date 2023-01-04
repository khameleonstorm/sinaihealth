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

export default function Home() {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeHero heroes={homeHero}/>
      <ContactForm />
      <FirstSection />
      <SecondSection treatments={treatments}/>
      <ThirdSection />
      <Plans />
      <Footer />
    </>
  )
}
