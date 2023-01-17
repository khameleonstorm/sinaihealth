import Head from "next/head";
import BOD from "../../../components/BOD/BOD";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

export default function index() {
  return (
    <>
    <Head>
      <title>Sinai Health</title>
      <meta name="description" content="Discovering and delivering life-changing care" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
    </Head>
    <Navbar />
    <BOD />
    <Footer />
    </>
  )
}
