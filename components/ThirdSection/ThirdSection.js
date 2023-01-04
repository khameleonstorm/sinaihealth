import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import styles from './ThirdSection.module.css';
import { testimonials } from '../../utils/text';

export default function ThirdSection() {
  return (
    <div className={styles.container}>
      <h1>What People Say About Sinai Health</h1>
      <div className={styles.wrapper}>
        {testimonials?.map((testimonial, i) => 
            <div key={i} className={styles.card}>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className={styles.message}>
              <ImQuotesLeft/>
              {testimonial.message}
              <ImQuotesRight />
              </p>
    
              <div className={styles.profile}>
                <Image src={testimonial.img} alt={testimonial.treatment} />
                <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.treatment}</p>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}
