import Head from "next/head"
import { useRouter } from "next/router"
import DrugDetails from "../../components/DrugDetails/DrugDetails"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { drugs } from "../../utils/drugs"
import ShopBottomNav from "../../components/ShopBottomNav/ShopBottomNav"


export default function Index() {
  const router = useRouter()
  const { drug } = router.query

  console.log(drugs[drug])

  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar />
      <DrugDetails drug={drugs[drug]}/>
      <ShopBottomNav />
      <Footer drug={true}/>
    </>
  )
}
