import styles from './Footer.module.css';
import logo from "../../public/assets/mainlogo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer({drug}) {

  return (
    <div className={styles.container} style={drug ?{paddingBottom: "80px"}: {}}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src={logo} alt="health sinai logo" />
          <div className={styles.social}>
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaFacebookF /></Link>
                <Link href="#"><AiFillInstagram /></Link>
                <Link href="#"><FaLinkedinIn /></Link>
          </div>
          <div className={styles.newsLetter}>
            <div className={styles.cirBtn}><p>&rarr;</p></div>
            <input placeholder='Subscribe to our newsletter' />
          </div>
        </div>
        <div className={styles.home}>
          <Link href="#">Home</Link>
          <Link href="#">Treatments</Link>
          <Link href="#">Specialist</Link>
          <Link href="#">Pharmacy</Link>
          <Link href="#">Events</Link>
          <Link href="#">Employment</Link>
          <Link href="#">About us</Link>
          <Link href="#">Contact us</Link>
        </div>
        <div className={styles.treatments}>
          <Link href="#">Treatments</Link>
          <Link href="#">Diagnostic Imaging</Link>
          <Link href="#">Gastroenterology</Link>
          <Link href="#">Urology</Link>
          <Link href="#">Hernia Repair</Link>
          <Link href="#">Physiotherapy</Link>
          <Link href="#">Pain Management</Link>
          <Link href="#">Shockwave Therapy</Link>
          <Link href="#">Ophthalmology</Link>
          <Link href="#">Orthopaedic</Link>
        </div>
      </div>

      <div className={styles.copyright}>COPYRIGHT 2017 © SINAI HEALTH</div>
    </div>
  )
}
