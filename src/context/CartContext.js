import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity
        }

        if(isInCart(productToAdd.id)) {
            //Logica de producto repetido
        } else {
            setCart([...cart, newObj])
        }
    }

    const removeItem = (id) => {

    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context