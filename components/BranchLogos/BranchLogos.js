import { branchLogos } from '../../utils/section';
import styles from './BranchLogos.module.css';

export default function BranchLogos() {


  return (
    <div className={styles.container}>
      {branchLogos?.map((logo, i) => 
      <a href={logo.link}  key={i} >
        <img src={logo.src} alt={logo.src}/>
      </a>
      )}
    </div>
  )
}
