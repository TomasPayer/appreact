import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import ItemList from '../ItemList/ItemList'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    const setNotification = useNotificationServices()
     
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProducts(products)
        }).catch((error) => {
            setNotification('error',`Error searching products: ${error}`)
        }).finally(() => {
            setLoading(false)
        })


        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line
    
    return (
        <div className="ItemListContainer">
            {
                loading ? 
                <h1><button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button></h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No products found!</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer