import Head from "next/head";
import DrugDetails from "../../components/DrugDetails/DrugDetails";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { drugs } from "../../utils/drugs";
import ShopBottomNav from "../../components/ShopBottomNav/ShopBottomNav"
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Checkout from "../../components/Checkout/Checkout";


export default function Index(props) {
  const { showCart, showCheckout } = useContext(CartContext)


  return (
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar cart={true}/>
      <DrugDetails drug={props.drug}/>
      <ShopBottomNav />
      <Footer drug={true}/>
      {showCart &&<Cart />}
      {showCheckout &&<Checkout />}
    </>
  )
}


export async function getStaticPaths() {
  const paths = drugs.map((drug) => ({
    params: { id:  drug.name},
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps(context) {

  const drug = drugs.find(drug => drug.name === context.params.id)
  

  return {
    props: {
      drug,
    },
  }
}

