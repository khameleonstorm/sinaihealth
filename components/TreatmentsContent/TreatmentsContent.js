import Link from 'next/link';
import { Fragment } from 'react';
import styles from './TreatmentsContent.module.css';

export default function TreatmentsContent({content, treatments}) {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Treatments</h2>
        {treatments?.map((link, i) => <Link href={`/treatments/${i}`} key={i}>{link.name}</Link>)}
      </div>
      <div className={styles.main}>
        {content?.map((c, i) =>
        <Fragment key={i}>
          <h1>{c.title}</h1>
          <p>{c.desc}</p>
        </Fragment>
        )}
      </div>
    </div>
  )
}
