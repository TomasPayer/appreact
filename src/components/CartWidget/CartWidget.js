import './CartWidget.css'

const CartWidget = () => {
    return(
        <button className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget