import Link from 'next/link';
import styles from './ShopBottomNav.module.css';
import { HiHome } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { MdFavorite } from "react-icons/md"
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

export default function ShopBottomNav() {
  const { items, dispatch } = useContext(CartContext)

  const handleCart = () => {
    if (items.length !== 0){
      dispatch({type: "SHOWCART", payload: true})
    }
  }

  return (
    <div className={styles.container}>
      <Link href="/shop"><HiHome /></Link>
      <Link href="#" onClick={handleCart}><BsCart4 /></Link>
      <Link href="/shop/wishlist"><MdFavorite /></Link>
    </div>
  )
}
