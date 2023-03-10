import styles from './SecondSection.module.css';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function SecondSection({ treatments }) {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Treatments</h1>
      <div className={styles.wrapper}>
        {treatments?.map((treatment, i) => 
        <div key={i} className={styles.card}>
          <Image 
          src={treatment.img} 
          alt={treatment.name} 
          width="340"
          height="340"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 100vw,
          100vw"
          blurDataURL={treatment.src}
          placeholder='blur'/>
          <h2>{treatment.name}</h2>
          <p>{treatment.content[0].desc.substring(0, 150)}...</p>
          <Link href={`./treatments/${treatment.name}`}>Learn More<span>→</span></Link>
        </div>
        )}
      </div>
    </div>
  )
}
