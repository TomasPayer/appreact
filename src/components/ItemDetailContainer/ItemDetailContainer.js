import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId]) // eslint-disable-line


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Loading...</h1> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer