import React, {useEffect, useState} from 'react'
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';


const Navbar = ({ cart,setCart, handleChange,size}) => {
//--------show navigation bar after scroll down-----------
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
      if (window.scrollY >=100 ) {
          setShow(false)
      } else {
          setShow(true)
      }
  };

    window.addEventListener('scroll', controlNavbar)

// modal-----------------------
const [price, setPrice] = useState(0);
const [amount, setAmount]=useState(0);

const handleRemove = (id) => {
  const arr = cart.filter((item) => item.id !== id);
  setCart(arr);
  handlePrice();
};

const handlePrice = () => {
  let ans = 0;
  cart.map((item) => (ans += item.amount * item.price));
 setPrice(ans);
};

useEffect(() => {
  handlePrice();
},[cart]);

const handleAmount = () => {
   let ans = 0;
   cart.map((item) => (ans += item.amount));
  setAmount(ans);
 };

 useEffect(() => {
   handleAmount();
 },[cart]);



   

  return (
    <div  >
      <nav class="navbar active navbar-expand-lg bg-light" >
  <div class="container-fluid"   id={show?  "navbar fixed" : "navbar"}>
    <a class="navbar-brand" href="/">Kajaria</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">


      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTS </a>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/card/Bedroom">Bathroom wall tiles</NavLink></li>
            <li><NavLink class="dropdown-item" to="/card/living"   >Living Room wall tiles</NavLink></li>            
            <li><a class="dropdown-item" to="/card"  >Outdoor wall tiles</a></li>
            <li><a class="dropdown-item" to="/card" > wall tiles</a></li>
            <li><NavLink class="dropdown-item" to="/card/kitchen "   >Kitchen Room wall tiles</NavLink></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            E-CATALOGUE </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Eternity-Glased Tiles</a></li>
            <li><a class="dropdown-item" href="#">Ciramic Tiles</a></li>
            <li><a class="dropdown-item" href="#">Polished Viterifide Tiles</a></li>
          </ul>
        </li>


         <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/card/all"  >WHERE TO BUY</NavLink>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MORE </a>
          <ul class="dropdown-menu">
            <Link class="dropdown-item" to="/about"  >About Us</Link>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
            <li><a class="dropdown-item" href="#">Career</a></li>
          </ul>
        </li>


 
      </ul> 
     
     
      

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  YOUR CART {size}
</button>
{/* -------modal for cart--------------- */}

<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Your choosen Tiles</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

    <article>
      {cart.map((item ) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div   className="totalQuantity">
      <span>Total Quantity</span>
      <span> = {amount}</span>
      </div>

      <div className="total">  
        <span>Total Price of your Cart</span>
        <span>₨ {price}</span>
      </div>
    </article>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">BUY</button>
      </div>
    </div>
  </div>

</div>
    </div>
  </div>
</nav>
    </div>
  )


}

export default Navbar;
