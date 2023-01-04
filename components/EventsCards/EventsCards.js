import styles from './EventsCards.module.css';
import { events } from '../../utils/events';
import Image from 'next/image';
import neonatal from "../../public/assets/neonatal.jpg"

export default function EventsCards() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.neonatal}>
          <Image src={neonatal} alt='neonatal'/>
        </div>
        {events.map((event, i) => 
        <div key={i} className={styles.card}>
          <h1>{event.title}</h1>
          <p>{event.desc}</p>
          <a href='#'>Subscribe for more<span>→</span></a>
        </div>
        )}
        <div className={styles.vid}>
          <iframe src="https://www.youtube.com/embed/7_kyLOOUSAI" title="Bladder Cancer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
      </div>
    </div>
  )
}
