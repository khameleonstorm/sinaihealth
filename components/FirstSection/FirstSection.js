import Image from 'next/image'
import styles from './FirstSection.module.css'
import groupDoc from "../../public/assets/group_doc_smile.png"
import Link from 'next/link'

export default function FirstSection({text, normal, reversed}) {
  return (
    <div className={styles.container}>
      <div className={!reversed? styles.wrapper1 : styles.wrapper3}>
        <div className={styles.left}>
          <h1>{text.title}</h1>
          <p>{text.desc}</p>
          <Link href={text.link}>{text.button} <span>→</span></Link>
        </div>
        <div className={styles.right}>
          <div className={styles.imgWrapper}>
              <img src={text.src} alt="doctors"/>
          </div>
        </div>
      </div>

      {!normal && <div className={styles.wrapper2}>
        <div className={styles.img}>
          <Image src={groupDoc} alt="grouped doctors"/>
        </div>
      </div>}
    </div>
  )
}
