import styles from './Plans.module.css';
import { plans } from "../../utils/plans"
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

export default function Plans() {
  const text = ["Medical examination", "free consultation", "24h Assisance", "Routine checkup", "100 Tests & Treatments", "Blood Test", "Regular Health Checkups"]


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose your best price plan</h1>
      <div className={styles.wrapper}>
        {plans.map(plan => 
        <div className={styles.card} key={plan.amount}>
          <div className={styles.icon}></div>
          <h3>{plan.title}</h3>
          <div className={styles.amount}>
            <h1><span>$</span>{plan.amount}<span>.99<br/><b>Amount</b></span></h1>
          </div>
          <div className={styles.points}>
            {plan.points.map((point, i) => 
            <div key={i}>
              <span>{!point? <FaRegTimesCircle color="#cc000e"/> : <FaRegCheckCircle color="#00cc7b"/>}<p>{text[i]}</p></span>
            </div>
            )}
          </div>
          <button>Get Started</button>
        </div>
        )}
      </div>    
    </div>
  )
}
