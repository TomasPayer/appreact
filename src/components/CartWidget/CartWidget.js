import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to={'/cart'} className="CartWidget">
            <img src="https://ps.w.org/woo-cart-abandonment-recovery/assets/icon-256x256.png?rev=2096894" alt='cart' className='CartImg'/>
            {getQuantity()}
        </Link>
    );
}

export default CartWidget