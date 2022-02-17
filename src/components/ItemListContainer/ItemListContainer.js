import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting = 'Hi'})=> {
    const handleOnAdd = (quantity) => {
        console.log('$(quantity) products added')
    }

    return (
        <div className="ItemListContainer">
            <h1>Hi, Welcome to the App!</h1>
            <ItemCount stock={10} initial={0} onAdd={handleOnAdd}/>
            <h2><button>Add to cart</button></h2>
        </div>
    )
}

export default ItemListContainer