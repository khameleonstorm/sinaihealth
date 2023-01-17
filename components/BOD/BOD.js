import styles from './BOD.module.css';
import { bod } from '../../utils/about';

export default function BOD() {
  return (
    <div className={styles.container}>
      <h1>BOARD OF DIRECTORS</h1>
      {bod?.map((leader, i) => 
      <div className={styles.card} key={i}>
        <img src={leader.src} alt={leader.name} width="200"/>
        <div>
          <h2>{leader.name}</h2>
          <h3>{leader.position}</h3>
          <p>{leader.desc}</p>
        </div>
      </div>
      )}
    </div>
  )
}
