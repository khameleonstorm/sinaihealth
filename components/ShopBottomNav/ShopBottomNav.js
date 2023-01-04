import Link from 'next/link';
import styles from './ShopBottomNav.module.css';
import { HiHome } from "react-icons/hi"
import { BsCart4 } from "react-icons/bs";
import { MdFavorite } from "react-icons/md"

export default function ShopBottomNav() {


  return (
    <div className={styles.container}>
      <Link href="#"><HiHome /></Link>
      <Link href="#"><BsCart4 /></Link>
      <Link href="#"><MdFavorite /></Link>
    </div>
  )
}
