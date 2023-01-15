import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import DrugCards from "../../../components/DrugCards/DrugCards"
import Navbar from "../../../components/Navbar/Navbar"
import ShopBottomNav from "../../../components/ShopBottomNav/ShopBottomNav"
import Footer from "../../../components/Footer/Footer"
import Cart from "../../../components/Cart/Cart"
import Checkout from "../../../components/Checkout/Checkout"
import { CartContext } from "../../../context/CartContext"

export default function index() {
  const [wish, setWish] = useState(null)
  const { showCart, showCheckout } = useContext(CartContext)


  useEffect(() => {
  const items = JSON.parse(window.localStorage.getItem("sinai_wishList"))

  if(items !== null || items.length !== 0) {
    setWish(items)
  }
  },[])

  return (wish &&
    <>
      <Head>
        <title>Sinai Health</title>
        <meta name="description" content="Discovering and delivering life-changing care" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Navbar cart={true}/>
      <DrugCards drugs={wish} shop={true}/>
      <ShopBottomNav />
      <Footer drug={true}/>
      {showCart &&<Cart />}
      {showCheckout &&<Checkout />}
    </>
  )
}
