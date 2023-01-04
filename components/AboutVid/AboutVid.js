import styles from './AboutVid.module.css';

export default function AboutVid() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About Sinai Health</h1>
        <p>
          Sinai Health is a leading academic health science centre and a trailblazer for integrated care across the health continuum. Our fusion of science, innovation, care and learning has earned us international, national and provincial leadership for unique programs and compassionate care.
        </p>
        <p>
          Since 2015, Sinai Health has delivered excellent care in hospital, community and home. Comprised of Mount Sinai Hospital(opens in a new tab), Hennick Bridgepoint Hospital(opens in a new tab), the Lunenfeld-Tanenbaum Research Institute(opens in a new tab) and our system partner Circle of Care(opens in a new tab), Sinai Health discovers and translates scientific breakthroughs, pushes boundaries for health solutions, and educates future clinical and scientific leaders.
        </p>
      </div>
      <div className={styles.vid}>
        <iframe src="https://www.youtube-nocookie.com/embed/CKufC1X1e0U" title="About Health Sinai" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}
