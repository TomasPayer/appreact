import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])  
    console.log(products)

    const addItem = (item, quantity) => {
        /*
        const newProduct = {
            ...item,
            quantity: quantity
        }
        if(!isInCart(item.id)) {
            setProducts([...products, newProduct])
        } else {
            const newProducts = products.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        quantity: quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
        }
        */

        /*
        let isUpdated = false
        const productsUpdated = products.map(p => {
            if(p.id === item.id) {
                isUpdated = true
                return {...p, quantity: p.quantity + quantity }
            } else {
                return {...p}
            }
        })
       setProducts(isUpdated ? productsUpdated : [...products, {...item, quantity}])
       */

        const productToAdd = {
            ...item,
            quantity
        } 

        isInCart(item.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd) 
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const updateItemInCart = (productToAdd) => {
        const updatedCart = products.map(prod => {
            if(prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
                }
                return updatedProduct
            } else {
                return prod
            }
        })

        setProducts(updatedCart)
    }

    const addItemToCart = (productToAdd) => {
        setProducts([...products, productToAdd])
    }

    const removeItem = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
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