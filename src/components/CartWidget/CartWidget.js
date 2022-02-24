import './CartWidget.css'

const CartWidget = () => {
    return(
        <button className="CartWidget">
            <img src="/img/logo.webp" alt='cart' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget