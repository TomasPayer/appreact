import './Item.css';

const Item = ({ product }) => {
    return ( 
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {product.title}
            </h2>
        </header>
        <picture>
            <img src={product.thumbnail} alt={product.title} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Category: {product.category}
            </p>
            <p className="Info">
                Price: ${product.price}
            </p>
        </section>
        <footer className="ItemFooter">
        </footer>
    </article>
    );
};

export default Item;