import Head from "next/head";
import DrugCards from "../../components/DrugCards/DrugCards";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShopBottomNav from "../../components/ShopBottomNav/ShopBottomNav";

export default function index() {
  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar cart={true}/>
      <DrugCards shop={true}/>
      <ShopBottomNav />
      <Footer />
    </>
  )
}
