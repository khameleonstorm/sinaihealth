import HomeHero from "../../components/HomeHero/HomeHero"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import { contact } from "../../utils/heroes"
import Navbar from "../../components/Navbar/Navbar"

export default function index() {
  return (
    <>
      <Navbar />
      <HomeHero heroes={contact} regular={true}/>
      <ContactForm />
      <Footer />
    </>
  )
}
