import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting = 'Hi'})=> {
    const [products, setProducts] = useState([])

            useEffect(() => {
                 getProducts().then(products => {
                    console.log(products)
                    setProducts(products)
                 })
            }, [])

    const handleOnAdd = (quantity) => {
        console.log('$(quantity) products added')
    }

    console.log(products)



    return (
        <div className="ItemListContainer">
            <h1>Hi, Welcome to the App!</h1>
            <ItemCount stock={10} initial={0} onAdd={handleOnAdd}/>
            <ItemList products={products} />
            <h2><button>Add to cart</button></h2>
        </div>
    )
}

export default ItemListContainer