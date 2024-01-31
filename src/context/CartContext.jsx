import { createContext, useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

        const addItem = (itemToAdd) => {
        const isInCart = cart.some(prod => prod.id === itemToAdd.id);
  
        !isInCart 
      ? setCart(prev => [...prev, itemToAdd])
      : console.error('El producto ya fue agregado');
        }

        const removeItem = (id) => {
            const cartUpdated = cart.filter(prod => prod.id === id)
            setCart(cartUpdated)
        }

        const getTotalQuantity = () => {
            let accu = 0

            cart.forEach(prod => {
                accu += prod.quantity 
            })

            return accu
        }

        const totalQuantity = getTotalQuantity()

        const getTotal = () => {

        }

        const total = getTotal()

        const clearCart = () => {
            setCart([])
        }
    

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, total, clearCart}}>
            {children}
        </CartContext.Provider>
        )
}

export const useCart = () => {
    return useContext(CartContext)
}