import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NotificationServicesProvider } from './services/notification/NotificationServices';

const App = () => {

  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
