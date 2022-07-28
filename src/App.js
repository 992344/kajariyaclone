import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Main from './component/Main';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Routes ,Route } from 'react-router-dom';
import Card from './component/Card';
import Data from './component/Api';
import About from './component/About';
function App() {


// ------filterout data from api------------
const[item ,setItem]=useState(Data)
const filterItem=(categItem)=>{
  const updatedItem=Data.filter((currentElem)=>{
    return currentElem.category===categItem;
  });
  setItem(updatedItem);
};

// ----------add to cart function=----------------
const [cart, setCart] = useState([]);
const handleClick = (item) => {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);    
  alert("item added succesfully");
};

// ------------cart handle--------and sotre session --------
const handleChange = (item, d) => {
  sessionStorage.setItem('tilesCount',d)
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) 
  arr[ind].amount = 1;
  setCart([...arr]);
};


  return (
   <>
<Navbar size={cart.length} filterItem={filterItem} cart={cart} setCart={setCart}handleChange = {handleChange}/>
   <Routes>
   <Route exact path='/' element={<Main/>}/>
   <Route exact path="/card/:id" element={<Card item={item} handleClick={handleClick}/>} />
   <Route exact path="/about" element={<About/>}/>
 </Routes>
<Footer/>

  </>
  )
};

export default App;
