import NavBar from "../../components/NavBar/NavBar"
import HomeHero from "../../components/HomeHero/HomeHero"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import { contact } from "../../utils/heroes"

export default function index() {
  return (
    <>
      <NavBar />
      <HomeHero heroes={contact} regular={true}/>
      <ContactForm />
      <Footer />
    </>
  )
}
