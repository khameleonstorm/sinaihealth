import Head from "next/head";
import DrugCards from "../../components/DrugCards/DrugCards";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShopBottomNav from "../../components/ShopBottomNav/ShopBottomNav";
import { drugs } from "../../utils/drugs";
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Checkout from "../../components/checkout/Checkout";

export default function index() {
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
      <DrugCards drugs={drugs} shop={true}/>
      <ShopBottomNav />
      <Footer drug={true}/>
      {showCart &&<Cart />}
      {showCheckout &&<Checkout />}
    </>
  )
}
