import { Rating } from '@mui/material';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import styles from './DrugDetails.module.css';
import { drugs } from "../../utils/drugs";
import DrugCards from "../DrugCards/DrugCards"
import { CartContext } from "../../context/CartContext";

export default function DrugDetails({drug}) {
  const [value, setValue] = useState(2)
  const [quantity, setQuantity] = useState(1)
  const [relatedDrugs, setRelatedDrugs] = useState(null)
  const [isRelated, setIsRelated] = useState(false)
  const { items, dispatch } = useContext(CartContext)
  
  const reduceQuantity = () =>{
    const newItem = {...drug, quantity: drug.quantity - 1}

    if(drug.quantity > 1) {
      dispatch({type: "UPDATEQUANTITY", payload: newItem})
      setQuantity(prev => prev - 1)
    }
  }

  const addQuantity = () =>{
    const checkArray = items?.filter((item) => item.name === drug.name)

    if(checkArray.length === 0) {
      dispatch({type: "ADDITEM", payload: {...drug, quantity: drug.quantity + 1}})
    } else {
      const newItem = {...drug, quantity: drug.quantity + 1}
      dispatch({type: "UPDATEQUANTITY", payload: newItem})
      setQuantity(prev => prev + 1)
    }
  }

  
  const addToCart = () => {
    dispatch({type: "ADDITEM", payload: drug})
  }




  useEffect(() =>{
    if(drugs){
      const related = drugs.filter(d => d?.category.toLowerCase().includes(drug?.category.toLowerCase()))
      if (related.length > 0){
        setRelatedDrugs(related)
        setIsRelated(true)
      }
    }
  }, [drugs, isRelated])

  console.log(drug, relatedDrugs)

  return (drug &&
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={drug.src} alt={drug.name} width="300" height="300" />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{drug.name}</h2>
        <div className={styles.rating}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>({drug.discount * 25})</p>
          <p>(sold {drug.sold})</p>
        </div>
        <h2 className={styles.amount}>£{drug.amount}.00</h2>
        <h2 className={styles.category}>CATEGORY : <span>{drug.category}</span></h2>
        <p className={styles.desc}>{drug.desc}</p>

        <div className={styles.addTo}>
          <button className={styles.button2} onClick={addToCart}><span><BsCart4 /></span>Add to cart</button>
          <button className={styles.button3}><span><BsCart4 /></span>Buy Now</button>
          <div className={styles.button1}>
            <span onClick={reduceQuantity}>-</span>
            {quantity}
            <span onClick={addQuantity}>+</span>
          </div>
        </div>
      </div>

      <div className={styles.note}>
        <Image src={drug.src} alt={drug.name} width="300" height="300" />
        <div className={styles.description}>
          <h2 className={styles.name}>{drug.note.title}</h2>
          {drug.note.desc.map((note, i) =>
            <p key={i} className={styles.desc}>{note}</p>
          )}
        </div>
      </div>

      <div className={styles.related}>
        <h1 className={styles.relatedTitle}>Related Drugs</h1>

        {isRelated && <DrugCards drugs={relatedDrugs} details={true}/>}
      </div>
    </div>
  )
}
