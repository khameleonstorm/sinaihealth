import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/mainlogo.png";
import { useState } from "react";
import { BiCaretDown } from "react-icons/bi"
import { BsCart4 } from "react-icons/bs";
import { treatments } from "../../utils/text"
import { useRouter } from 'next/router'

export default function Navbar({cart}) {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [showTreatments, setShowTreatments] = useState(false)


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image priority src={logo} alt="mountsinai logo" width={110}/>
          </Link>
        </div>
        <div className={styles.menu} style={menu? {right: "0"} : {right: "-100vw"}}>
          <Link href="/">Home</Link>
          <Link href="#"
            onMouseOver={() => setShowTreatments(!showTreatments)}
            className={styles.treatment}>
              <span onClick={() => router.push('/treatments')}>Treatments</span> 
              <BiCaretDown 
            onClick={() => setShowTreatments(!showTreatments)} />
          </Link>

          {showTreatments &&
          <div className={styles.treatmentMenu}>
            {treatments?.map((treatment, i) =>
            <Link key={i} href={`/treatments/${i}`} onClick={() => setMenu(false)}>{treatment.name}</Link>
            )}
          </div>
          }

          <Link href="/specialist">Specialist</Link>
          <Link href="/pharmacy">Pharmacy</Link>
          <Link href="/events">Events</Link>
          <Link href="/employment">Employment</Link>
          <Link href="/about">About us</Link>
          <Link className={styles.contact} href="/contact">Contact us</Link>
        </div>

        <div className={styles.hamburger} onClick={() => setMenu(!menu)}>
          <span className={menu ? styles.active : styles.bar}></span>
          <span className={menu ? styles.active : styles.bar}></span>
          <span className={menu ? styles.active : styles.bar}></span>
        </div>

          {cart &&
          <div className={styles.cartAmount}>
            <div className={styles.cartIcon}>
              <BsCart4 />
              <div>0</div>
            </div>
            <p>£0.00</p>
          </div>
          }
      </div>
    </div>
  )
}
