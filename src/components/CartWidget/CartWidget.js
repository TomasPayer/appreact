import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to={'/cart'} className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            {getQuantity()}
        </Link>
    );
}

export default CartWidget