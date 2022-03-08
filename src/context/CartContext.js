import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
    }

    const isInCart = (id) => {
    }

    const updateItemCart = (productToAdd) => {
    }

    const addItemToCart = (productToAdd) => {
    }

    const removeItem = (id) => {
    }

    const clearCart = () => {
    }

    const getTotal = () => {
    }

    const getQuantity = () => {
    }


    return (
        <Context.Provider value={{
            products,
            addItem,
            removeItem,
            clearCart,
            getTotal,
            getQuantity
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context