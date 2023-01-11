import styles from './Cart.module.css'; 
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscClose } from 'react-icons/vsc';

export default function Cart() {
  const { items, dispatch } = useContext(CartContext)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalItem, setTotalItem] = useState(0)

  useEffect(() => {
    const combine = items.map(item => item.amount * item.quantity)

    if(combine.length > 0) {
      const added = combine.reduce((a, c) => a + c, 0)
      setTotalAmount(added)
      setTotalItem(combine.length)
      console.log(added, "added")
    }

  }, [items])

  const reduceQuantity = (item) =>{
    const newItem = {...item, quantity: item.quantity - 1}

    if(item.quantity > 1) dispatch({type: "UPDATEQUANTITY", payload: newItem})
  }

  const addQuantity = (item) =>{
    const newItem = {...item, quantity: item.quantity + 1}
    console.log(newItem.quantity)
    dispatch({type: "UPDATEQUANTITY", payload: newItem})
  }

  const checkout = () => {
    dispatch({type: "SHOWCHECKOUT", payload: true})
  }


  return (items.length > 0 &&
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.items}>
        <h1 className={styles.title}>Cart</h1>
        {items.map((item, i) =>
        <div key={i} className={styles.card}>
          <img src={item.src} alt={item.name}/>
          <div>
            <h2 className={styles.amount}>£{item.amount}.00</h2>
            {item.name.length > 30 && <h2 className={styles.name2}>{item.name}</h2>}
            {item.name.length < 30 && <h2 className={styles.name}>{item.name}</h2>}
            <div className={styles.button1}>
              <span onClick={() => reduceQuantity(item)}>-</span>
              {item.quantity}
              <span onClick={() => addQuantity(item)}>+</span>
            </div>
          <AiOutlineDelete onClick={() => dispatch({type: "REMOVEITEM", payload: item})}/>
          </div>
        </div>
        )}
      </div>
      <div className={styles.total}>
        <h1 className={styles.title}>Cart Total</h1>
        <h3 className={styles.title}>Total Items: <span>{totalItem}</span></h3>
        <h3 className={styles.title}>SubTotal: <span>£{totalAmount}.00</span></h3>
        <h3 className={styles.title}>Total: <span>£{totalAmount}.00</span></h3>
        <div className={styles.coupon}>
          <input type="text" placeholder='Enter Coupon' />
          <button>Apply</button>
        </div>
        <button className={styles.checkout} onClick={checkout}>Proceed To Checkout</button>
      </div>
      </div>
      <VscClose className={styles.close}
      onClick={() => dispatch({type: "SHOWCART", payload: false})}
      />
    </div>
  )
}
