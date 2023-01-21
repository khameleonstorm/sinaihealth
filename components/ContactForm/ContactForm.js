import { TextField } from '@mui/material'
import { BsHeadset } from "react-icons/bs"
import styles from './ContactForm.module.css'

export default function ContactForm() {

  const handleSubmit =(e) => {
    e.preventDefault();
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.emergency}>
          <div className={styles.number}>
            <BsHeadset />
            <div>
              <p>Emergency Cases</p>
              <h1>1-800-123-4560</h1>
            </div>
          </div>
          <div className={styles.message}>
            <p>
              Your safety is our No. 1 priority. In the event of an emergency, potential, or actual disaster, it is essential to quickly alert us at Health Sinai.
            </p>
          </div>
          <button>Contact us</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Schedule An Appointment</h1>
          <TextField fullWidth label="First Name" id="firstName" />
          <TextField fullWidth label="Last Name" id="lastName" />
          <TextField fullWidth label="Email" id="email" type="email" />
          <TextField fullWidth label="Phone" id="phone" type="tel"/>
          <TextField fullWidth label="" id="date" type="date"/>
          <TextField fullWidth label="Message" id="message" />
          <button type='submit'>Book Appointment</button>
        </form>
      </div>
    </div>
  )
}
