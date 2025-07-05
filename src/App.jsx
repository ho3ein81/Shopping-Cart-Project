import React ,{useState}from 'react'
import Header from './Components/Header'
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { product } from './data';
const App = () => {
  const [products, ] = useState(product);
  const [ShowShop, setShowShop] = useState(true);
  const [cart,setCart]= useState([]);

  const  handleAddToCart = (item)=>{
    setCart([...cart,item]);
    

  }
  const handleDelete = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  const HandleQty = (item , operator) => {
     const cartState = [...cart];
    const prod=cart.indexOf(item);
    cartState[prod].qty += operator;
    if(cartState[prod].qty <= 0){
      handleDelete(prod);
    }else{
      setCart(cartState);
    }
   
  }
  return (
    <div className="container">
    <div>
      <Header
      setShow={setShowShop}
      />
       </div>
       {
        ShowShop ? (
          <Shop products ={products}
          addToCart={handleAddToCart}/>
        ) :(
          <Cart
          cart ={cart}
          handleDelete={handleDelete}
          handleQty={HandleQty}/>
        )
       }
    </div>
  )
}

export default App