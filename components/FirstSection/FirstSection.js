import Image from 'next/image'
import styles from './FirstSection.module.css'
import groupDoc from "../../public/assets/group_doc_smile.png"
import first from "../../public/assets/firstSec.jpg"
import Link from 'next/link'

export default function FirstSection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        <div className={styles.left}>
          <h1>Medical hospital center & health care</h1>
          <p>
            In January 2015, Sinai Health was formed through the integration of Mount Sinai Hospital, Hennick Bridgepoint Hospital, the Lunenfeld-Tanenbaum Research Institute, and the affiliation with our system partner, Circle of Care.
          </p>
          <Link href="#">Discover More <span>→</span></Link>
        </div>
        <div className={styles.right}>
          <div className={styles.imgWrapper}>
              <Image height="400" src={first} alt="doctors"/>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.img}>
          <Image src={groupDoc} alt="grouped doctors"/>
        </div>
      </div>
    </div>
  )
}
