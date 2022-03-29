import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import Swal from 'sweetalert2'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

        addItem(productToAdd, quantity)
        setNotification (Swal.fire(
            'Great Choice!',
            'Your product has been added to the cart!',
            'success'
          ))
    }
 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Category: {category}
                </p>
                <p className="Info">
                    Description: {description}
                </p>
                <p className="Info">
                    Price: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantity > 0 ? 
                        <Link to={'/cart'} className='Option'>Go to Shopping Cart</Link> :
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                } 
            </footer>
        </article>
    )
}

export default ItemDetail