import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting = 'Hi'})=> {
    const [products, setProducts] = useState([])

            useEffect(() => {
                (fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone'))
                .then(response => {
                    return response.json()
                })
                .then(res => {
                    setProducts(res.results)
                })
            }, [])


    return (
        <div className="ItemListContainer">
            <h1>Hi, Welcome to the App!</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer