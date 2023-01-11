import { createContext, useEffect, useReducer } from 'react'

export const CartContext = createContext()

const addItem = (item) => {
  const newItem = {
    name: item.name, 
    amount: item.amount,
    src: item.src,
    quantity: 1
  }

  // getting list of items from local storage
  const items = JSON.parse(window.localStorage.getItem("sinai_cart"))

  if(items === null) {
    window.localStorage.setItem("sinai_cart", JSON.stringify([]))
  } 

  // check if the item already exists
  const checkArray = items.filter(drug => drug.name === item.name)

  if(checkArray.length === 0) {
    items.push(newItem)
    window.localStorage.setItem("sinai_cart", JSON.stringify(items))
  }
}

const removeItem = (drug) => {
  const items = JSON.parse(window.localStorage.getItem("sinai_cart"))
  const newArray = items.filter(item => item.name !== drug.name)
  window.localStorage.setItem("sinai_cart", JSON.stringify(newArray))
}



const updateQuantity = (updatedItem) => {
  const items = JSON.parse(window.localStorage.getItem("sinai_cart"))

  const newArray = items.map(item => {
    if (item.name === updatedItem.name) {
      return {...item, quantity: updatedItem.quantity};
    }
  
    return item;
  });
  window.localStorage.setItem("sinai_cart", JSON.stringify(newArray))
}




export const CartReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATEITEMS':
          return {...state, items: action.payload}
      case 'UPDATEQUANTITY':
          return {...state, item: action.payload, updateQuantity: true}
      case 'ADDITEM':
          return {...state, item: action.payload, add: true}
      case 'REMOVEITEM':
          return {...state, item: action.payload, remove: true}
      case 'SHOWCART':
          return {...state, showCart: action.payload, showCheckout: false}
      case 'SHOWCHECKOUT':
          return {...state, showCheckout: action.payload, showCart: false}
      case 'RESET':
          return {...state, add: false, remove: false, update: false, updateQuantity: false, item: null}
      default:
          return state
  }
}





export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, {
      items: [],
      item: null,
      add: false,
      remove: false,
      update: false,
      showCart: false,
      showCheckout: false,
      updateQuantity: false
    })

    if(state.add) {
      addItem(state.item)

      // updding items
      const items = JSON.parse(window.localStorage.getItem("sinai_cart"))
      dispatch({type: "UPDATEITEMS", payload: items})

      // reset state
      dispatch({type: "RESET"})
    }

    if(state.remove) {
      removeItem(state.item)

      // updding items
      const items = JSON.parse(window.localStorage.getItem("sinai_cart"))
      dispatch({type: "UPDATEITEMS", payload: items})

      // reset state
      dispatch({type: "RESET"})
    }

    if(state.updateQuantity) {
      updateQuantity(state.item)

      // updating items
      const drugs = JSON.parse(window.localStorage.getItem("sinai_cart"))
      dispatch({type: "UPDATEITEMS", payload: drugs})

        // reset state
      dispatch({type: "RESET"})
    }



    
    useEffect(() => {
      // updding items
      const items = JSON.parse(window.localStorage.getItem("sinai_cart"))
      dispatch({type: "UPDATEITEMS", payload: items})
    }, [])

  return (
    <CartContext.Provider value={{...state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}
