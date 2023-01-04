import Head from "next/head"
import { useRouter } from "next/router"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import HomeHero from "../../components/HomeHero/HomeHero"
import Navbar from "../../components/Navbar/Navbar"
import TreatmentsContent from "../../components/TreatmentsContent/TreatmentsContent"
import { treatments } from "../../utils/text"


export default function Index() {
  const router = useRouter()
  const { trt } = router.query

  const hero = [{
    title: treatments[trt]?.name,
    subtitle: "Discovering and delivering life-changing care",
    bg: treatments[trt]?.img?.src
  }]

  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeHero heroes={hero} regular={true}/>
      <ContactForm />
      <TreatmentsContent content={treatments[trt]?.content} treatments={treatments} />
      <Footer />
    </>
  )
}
