import './NavBar.css'
import { useEffect, useState, useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  const { products } = useContext(CartContext)

  useEffect(() => {
      getDocs(collection(firestoreDb, 'categories')).then(response => {
        const categories = response.docs.map(cat => {
          return { id: cat.id, ...cat.data()}
        })
        setCategories(categories)
      })
  }, [])

  return (
      <nav className="NavBar" >
        <Link to={'/'}>
            <h3>Ecommerce</h3>
        </Link>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        {products.length > 0 && <CartWidget />}
      </nav>
  )
}

export default NavBar