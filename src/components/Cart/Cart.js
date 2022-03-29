import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notification/NotificationServices"
import Swal from "sweetalert2"

const Cart = () => {
    const { products, removeItem, getTotal } = useContext(CartContext)

    const setNotification = useNotificationServices()

    if(products.length === 0) {
        return <h1>There are no products in the cart!</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
        setNotification(Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${name} has been removed`,
            showConfirmButton: false,
            timer: 1500
          }))
    }

    return (
        <>
            <h1>Cart</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: ${getTotal()}</h1>
        </>
    )
}

export default Cart