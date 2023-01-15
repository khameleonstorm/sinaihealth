import styles from "./DrugCards.module.css";
import { Rating } from '@mui/material';
import { BsCart4 } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../../context/CartContext";

export default function DrugCards({drugs, shop, details}) {
  const router = useRouter()
  const [search, setSearch] = useState(null)
  const [filteredDoc, setFilteredDoc] = useState(null)
  const { dispatch} = useContext(CartContext)
  const [value, setValue] = useState(5)
  const [likedItems, setLikedItems] = useState([])


  const addToCart = (item) => {
    dispatch({type: "ADDITEM", payload: item})
  }


  const handleFav = (item) => {  
  // getting list of items from local storage
  const items = JSON.parse(window.localStorage.getItem("sinai_wishList"))

  if(items === null) {
    window.localStorage.setItem("sinai_wishList", JSON.stringify([]))
  } 

  // check if the item already exists
  const checkArray = items?.filter(drug => drug.name === item.name)

  if(checkArray.length === 0) {
    items.push(item)
    window.localStorage.setItem("sinai_wishList", JSON.stringify(items))
    setLikedItems(items)
  }

  if(checkArray.length !== 0) {
    const items = JSON.parse(window.localStorage.getItem("sinai_wishList"))
    const newArray = items.filter(drug => drug.name !== item.name)
    window.localStorage.setItem("sinai_wishList", JSON.stringify(newArray))
    setLikedItems(newArray)
  }
  }

  useEffect(() => {
    setFilteredDoc(drugs)
    if(search !== null){
      setFilteredDoc(drugs.filter(drug => drug.name.toLowerCase().includes(search.toLowerCase())))
      console.log(search)
    }

    const items = JSON.parse(window.localStorage.getItem("sinai_wishList"))
    setLikedItems(items)
  }, [search, likedItems.length])

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
       {likedItems.filter(likedItem => likedItem.name === drug.name).length > 0 && <FaHeart className={styles.fav} onClick={() => handleFav(drug)}/>}

       {likedItems.filter(likedItem => likedItem.name !== drug.name) && <FaRegHeart className={styles.fav} onClick={() => handleFav(drug)}/>}
        <img src={drug.src} alt={drug.name} onClick={() => {router.push(`/shop/${i}`)}}/>
        <h2 className={styles.name}>{drug.name}</h2>
        <div className={styles.rating}>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <h2 className={styles.amount}>£{drug.amount}.00</h2>
        <button onClick={() => addToCart(drug)}><span><BsCart4 /></span>Add to cart</button>
      </div>
      )}
    </div>
    </>
  )
}
