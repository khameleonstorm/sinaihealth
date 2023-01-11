import styles from "./DrugCards.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../../context/CartContext";

export default function DrugCards({drugs, shop, details}) {
  const router = useRouter()
  const [search, setSearch] = useState(null)
  const [filteredDoc, setFilteredDoc] = useState(null)
  const { dispatch} = useContext(CartContext)


  const addToCart = (item) => {
    dispatch({type: "ADDITEM", payload: item})
  }

  useEffect(() => {
    setFilteredDoc(drugs)
    if(search !== null){
      setFilteredDoc(drugs.filter(drug => drug.name.toLowerCase().includes(search.toLowerCase())))
      console.log(search)
    }
  }, [search])

  return (
    <>
    {!(shop || details) &&<h1 className={styles.title}>Drugs Top Collection</h1>}
    {shop && 
    <div className={styles.search}>
      <div>
        <CiSearch />
        <input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
      </div>
    </div>
    }
    <div className={styles.container}>
      {filteredDoc?.map((drug, i) => 
      <div key={i} className={styles.card}>
        <MdFavoriteBorder className={styles.fav}/>
        <img src={drug.src} alt={drug.name} onClick={() => {router.push(`./shop/${i}`)}}/>
        <h2 className={styles.name}>{drug.name}</h2>
        <div className={styles.rating}>
          <AiFillStar color="orange"/>
          <AiFillStar color="orange"/>
          <AiFillStar color="orange"/>
          <AiFillStar color="orange"/>
          <AiFillStar color="orange"/>
        </div>
        <h2 className={styles.amount}>£{drug.amount}.00</h2>
        <button onClick={() => addToCart(drug)}><span><BsCart4 /></span>Add to cart</button>
      </div>
      )}
    </div>
    </>
  )
}
