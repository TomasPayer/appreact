import './Item.css';

const Item = ({ product }) => {
    return ( <div class = "item">
        <img src = {product.img}/> 
        <h1> {product.name}</h1>
        </div>
    );
};

export default Item;