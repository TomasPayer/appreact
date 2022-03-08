import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    const [title, setTitle] = useState('')

    // const setNotification = useNotificationServices()
     
    useEffect(() => {
        // setNotification('error', 'Welcome')
        setLoading(true)

        getProducts(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        setTimeout(() => {
            setTitle('React App')
        }, 2000)

        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line
    
    return (
        <div className="ItemListContainer">
            {title}
            {
                loading ? 
                    <h1>Loading...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No products found!</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer