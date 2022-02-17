import { useState, useEffect } from "react";

const FunctionCounter = (props) => {
      const [count, setCount] = useState(0)

      useEffect(() => {
        console.log('El componente se monto')
        return () => {
            console.log('Me voy a desmontar')
        }
      }, [])
    
      console.log('Voy a renderizar')
    
    const decrement = () => {
        if (count > 0) {
        setCount(count -1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return( 
        <>
            <h3>FunctionCounter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h4><button>Add to cart</button></h4>
        </>
    )

}


export default FunctionCounter