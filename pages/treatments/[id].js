import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import HomeHero from "../../components/HomeHero/HomeHero"
import Navbar from "../../components/Navbar/Navbar"
import TreatmentsContent from "../../components/TreatmentsContent/TreatmentsContent"
import { treatments } from "../../utils/text"


export default function Index(props) {
  const [hero, setHero] = useState(null)
  const [content, setContent] = useState(null)
  const router = useRouter()
  // const { id } = router.query


  useEffect(() => {
    const hero = [{
      title: props.treatment.name,
      subtitle: "Discovering and delivering life-changing care",
      bg: props.treatment.img?.src
    }]
    setHero(hero)
    setContent(props.treatment.content)
  }, [])


  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar />
      <HomeHero heroes={hero} regular={true}/>
      <ContactForm />
      <TreatmentsContent content={content} treatments={props.treatments} />
      <Footer />
    </>
  )
}




export async function getStaticPaths() {
  const paths = treatments.map((treatment) => ({
    params: { id:  treatment.name},
  }))

  return { paths, fallback: true }
}


export async function getStaticProps(context) {

  const treatment = treatments.find(treatment => treatment.name === context.params.id)
  

  return {
    props: {
      treatment,
    },
  }
}
