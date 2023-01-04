import Link from 'next/link';
import styles from './HomeHero.module.css';
import { BsFillPlayCircleFill } from "react-icons/bs"

export default function HomeHero({heroes, regular, shop}) {

  return (
    <div className={styles.majorContainer}>
      {heroes?.map((hero, i) =>
        <div className={!regular ? styles.container : styles.regular} key={i} style={{backgroundImage: `url(${hero.bg})`}}>
          <div className={styles.wrapper}>
            <div className={styles.heroText}>
              <h1>{hero.title}</h1>
              <p>{hero.subtitle}</p>
              <div className={styles.btnGroup}>
                {!shop && <Link href="/about">Find Out More <span>→</span></Link>}
                {shop && <Link href="/shop">Visit Drug Store <span>→</span></Link>}
                <Link href="/about"><BsFillPlayCircleFill/> See Our Video <span>→</span></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
