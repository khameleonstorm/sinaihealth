import styles from './CareerCards.module.css';
import career1 from "../../public/assets/career.jpg";
import career2 from "../../public/assets/career2.jpg";
import { RiMailSendFill } from "react-icons/ri"
import Image from 'next/image';

export default function CareerCards({home}) {
  return (
    <div className={styles.container}>
      {!home &&<div className={styles.wrapper1}>
        <div className={styles.img}>
          <Image src={career1} alt="employment"/>
        </div>
        <div className={styles.text}>
          <h2>Sinai Health Careers</h2>
          <p>
          Our patients come from all over the world — and so do our staff members. They come to be part of a professional and diverse health care team; to work beside the unequaled talent of Sinai Health physicians, nurses and providers; and to enjoy extensive benefits and opportunities for personal and professional growth.
          </p>

          <a href = "mailto: abc@example.com"><RiMailSendFill /> <span>Send Your Resume →</span></a>
        </div>
      </div>}
      <div className={styles.wrapper2}>
        <div className={styles.img}>
          <Image src={career2} alt="employment"/>
        </div>
        <div className={styles.text}>
          <h2>Explore Careers by Positions</h2>
          <p>
            From medicine and social work to finance and IT, Sinai Health employees get to make a difference every day. Join our team and help provide outstanding care to patients, train the next generation of doctors and nurses, and push the frontiers of biomedical discovery.
          </p>

          <a href = "mailto: abc@example.com"><RiMailSendFill /> <span>Send Your Resume →</span></a>
        </div>
      </div>
    </div>
  )
}
