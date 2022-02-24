import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => { //{ title: 'ecommerce ', color='red'}
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
      <nav className="NavBar" >
        <div>
            <h3 className='h3'>React App</h3>
        </div>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar