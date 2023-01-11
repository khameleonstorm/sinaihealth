import styles from './Checkout.module.css'; 
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { countries } from '../../utils/countries';
import { VscClose } from "react-icons/vsc"
import { BiArrowBack } from "react-icons/bi"


export default function Checkout() {
  const { items, dispatch } = useContext(CartContext)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalItem, setTotalItem] = useState(0)
  const [values, setValues] = useState({
    fullName: "",
    companyName: "",
    country: "",
    homeAddress: "",
    homeAddress2: "",
    city: "",
    county: "",
    postcode: "",
    email: "",
    phoneNumber: "",
    note: "",
  });

  const [formError, setFormError] = useState({
    fullName: null,
    companyName: null,
    country: null,
    homeAddress: null,
    city: null,
    county: null,
    postcode: null,
    email: null,
    phoneNumber: null, 
  })

  
  // handling change for input fields
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setFormError({ ...formError, [prop]: null })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName: values.fullName,
      companyName: values.companyName,
      country: values.country,
      homeAddress: values.homeAddress,
      homeAddress2: values.homeAddress2,
      city: values.city,
      county: values.county,
      postcode: values.postcode,
      email: values.email,
      phoneNumber: values.phoneNumber,
      note: values.note,
    };

    // validating form
    if(values.fullName === "") {
      setFormError({...formError, fullName: "Full name is invalid"});
      return
    }

    if(values.fullName.length < 3) {
      setFormError({...formError, fullName: "Full name is too short"});
      return
    }
    
    if(values.country === "") {
      setFormError({...formError, country: "Select Your Country"});
      return
    }

    if(values.homeAddress === "") {
      setFormError({...formError, homeAddress: "Home address is invalid"});
      return
    }

    if(values.city === "") {
      setFormError({...formError, city: "City is invalid"});
      return
    }

    if(values.postcode === "") {
      setFormError({...formError, postcode: "Postcode is invalid"});
      return
    }

    if(values.email === "" || !values.email.includes("@") || values.email.length < 5) {
      setFormError({...formError, email: "Email is invalid"});
      return
    }

    if(values.phoneNumber === "" || values.phoneNumber.length < 5) {
      setFormError({...formError, phoneNumber: "Phone Number is invalid"});
      return
    }

    console.log(data);
  };


  useEffect(() => {
    const combine = items.map(item => item.amount * item.quantity)

    if(combine.length > 0) {
      const added = combine.reduce((a, c) => a + c, 0)
      setTotalAmount(added)
      setTotalItem(combine.length)
      console.log(added, "added")
    }

  }, [items])


  return (items.length > 0 &&
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <h3 className={styles.title}>BILLING DETAILS</h3>
          <p>Enter your details to the form below to process your order</p>
        <TextField 
        id="full_name"
        label="Full Name"
        variant="outlined"
        name="fullName"
        type="text"
        {...(formError.fullName && {error: true, helperText: formError.fullName})}
        autoComplete='off'
        onChange={handleChange("fullName")}/>

        <TextField 
        id="companyName" 
        label="Company Name (optional)"   
        variant="outlined" 
        name="companyName"
        type="text" 
        {...(formError.companyName && {error: true, helperText: formError.companyName})}
        autoComplete='off'
        onChange={handleChange("companyName")}/>

        <FormControl fullWidth>
        <InputLabel id="country">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="select country"
          value={values.country}
          label="Country"
          {...(formError.country && {error: true})}
          onChange={handleChange('country')}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.name}>{country.name}</MenuItem>
            ))}
        </Select>
        </FormControl>
        
        <TextField 
        id="homeAddress" 
        label="Home Address 1" 
        variant="outlined" 
        name='homeAddress'
        type="text" 
        autoComplete='off'
        {...(formError.homeAddress && {error: true, helperText: formError.homeAddress})}
        onChange={handleChange("homeAddress")}/>
        
        <TextField 
        id="homeAddress2" 
        label="Home Address 2 (optional)"  
        variant="outlined" 
        name='homeAddress2'
        type="text" 
        autoComplete='off'
        onChange={handleChange("homeAddress2")}/>
        
        <TextField 
        id="city" 
        label="City"  
        variant="outlined" 
        name='city'
        type="text" 
        autoComplete='off'
        {...(formError.city && {error: true, helperText: formError.city})}
        onChange={handleChange("city")}/>
        
        <TextField 
        id="county" 
        label="County (optional)"  
        variant="outlined" 
        name='county'
        type="text" 
        autoComplete='off'
        onChange={handleChange("county")}/>
        
        <TextField 
        id="postcode" 
        label="Postcode"  
        variant="outlined" 
        name='postcode'
        type="text" 
        autoComplete='off'
        {...(formError.postcode && {error: true, helperText: formError.postcode})}
        onChange={handleChange("postcode")}/>

        <TextField
        id="email" 
        label="Email" 
        variant="outlined" 
        name='email'
        type="email" 
        autoComplete='off'
        {...(formError.email && {error: true, helperText: formError.email})}
        onChange={handleChange("email")}/>

        <TextField 
        id="phoneNumber" 
        label="Phone Number" 
        variant="outlined"
        name='phoneNumber'
        type="tel"
        autoComplete='off'
        {...(formError.phoneNumber && {error: true, helperText: formError.phoneNumber})}
        onChange={handleChange("phoneNumber")}/>

        <p>Additional Information</p>
        <TextField 
        id="note" 
        label="Note (optional)"  
        variant="outlined"
        name='note'
        type="text"
        multiline
        rows={4}
        autoComplete='off'
        onChange={handleChange("note")}/>

        </form>
      </div>



      <div className={styles.total}>
        <h1 className={styles.title}>Cart Total</h1>
        <h4 className={styles.title} onClick={() => dispatch({type: "SHOWCART", payload: true})}>Confirm the last time to your order, You can change it here</h4>
        {items.map((item, i) =>
        <div key={i} className={styles.card}>
          <img src={item.src} alt={item.name}/>
          <div>
            <h2 className={styles.amount}>£{item.amount}.00</h2>
            {item.name.length > 30 && <h2 className={styles.name2}>{item.name}</h2>}
            {item.name.length < 30 && <h2 className={styles.name}>{item.name}</h2>}
          </div>
        </div>
        )}
        <h3 className={styles.title}>Total Items: <span>{totalItem}</span></h3>
        <h3 className={styles.title}>SubTotal: <span>£{totalAmount}.00</span></h3>
        <h3 className={styles.title}>Total: <span>£{totalAmount}.00</span></h3>
        <div className={styles.coupon}>
          <input type="text" placeholder='Enter Coupon' />
          <button>Apply</button>
        </div>

        <div className={styles.payment}>
          <h3 className={styles.title}>PAYMENT METHOD</h3>
          <div>
            <h4 className={styles.title}>CRYPTO PAYMENT</h4>
            <p>
              Sorry, all our other payment methods are currently down and we only accept crypto payments for now.
              Make your payment directly into our crypto wallet. use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <p>
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes
            </p>
          </div>
        </div>

        <button className={styles.checkout}>Place Order</button>
      </div>
      </div>
      <VscClose className={styles.close}
      onClick={() => dispatch({type: "SHOWCHECKOUT", payload: false})}
      />
      <BiArrowBack className={styles.back}
      onClick={() => dispatch({type: "SHOWCART", payload: true})}
      />
    </div>
  )
}
