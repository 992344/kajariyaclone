import React from 'react';
import './main1.css';
import {NavLink} from 'react-router-dom';

const Main1 = ({filterItem , setDisplay}) => {
  return (
     <>
     <div class="container" >
          <div className="items">

               <div className='cards'>
                   <h2> <i className="bi bi-hospital"></i></h2>
                    <h5><NavLink class="dropdown-item" to="/card"   onClick={() =>{filterItem("living");  setDisplay(true) } } >Living Room wall tiles</NavLink></h5>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
           <div className="items">

               <div className='cards'>
                   <h2> <i class="bi bi-house-door"></i></h2>
                    <h6><NavLink class="dropdown-item" to="/card" onClick={() =>{filterItem("Bedroom");  setDisplay(true) } }  >Bathroom wall tiles</NavLink></h6>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
           <div className="items">

               <div className='cards'>
                   <h2> <i className="bi bi-hospital"></i></h2>
                    <h6>Outdoor Wall Tiles</h6>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
           <div className="items">

               <div className='cards'>
                   <h2> <i class="bi bi-house-door"></i></h2>
                    <h6><NavLink class="dropdown-item" to="/card"  onClick={() =>{filterItem("kitchen");  setDisplay(true) } }  >Kitchen Room wall tiles</NavLink></h6>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
           <div className="items">

               <div className='cards'>
                   <h2> <i className="bi bi-hospital"></i></h2>
                    <h6>Commercial room Wall Tiles</h6>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
           <div className="items">

               <div className='cards'>
                   <h2> <i class="bi bi-house-door"></i></h2>
                    <h6>Bedroom Wall Tiles</h6>
                    <NavLink class="nav-link active" aria-current="page" to="/card"  onClick={() => setDisplay(true)} >Explore All</NavLink>               </div>
          </div>
          
     </div>
     <div className='aboutKajaria'>
     <div>
          <h2>About Kajaria</h2>
     </div>
     <p>
     Kajaria, the largest manufacturer of ceramic and vitrified tiles in India. Equipped with cutting-edge technology, we strive to deliver quality products and services to our customers. Our team of experts work around the clock to ensure that the quality of our product is never compromised. 
     </p><br />
     <p>In order to cater to the specific needs of our customers we produce various categories of tiles, including kitchen tiles, bathroom tiles, wall tiles, floor tiles and exterior wall tiles. We aim at producing tiles that complement the distinctive style of our customers and cater to the vast needs of Indian audience. All of our tiles are crafted with intense care using state-of-the-art technology to ensure that we live up to the expectations of our buyers. Choicest of materials are used to produce our magnificent range of products.</p><br />
     <h6>Designer Wall Tiles India for Bathroom & Kitchen</h6>
     <p>Our mesmerizing range of designer bathroom & kitchen floor and wall tiles have a luxurious appeal and seem to have been struck with afflatus. The premier collection is a showstopper and has the ability to make any dimension look grand. Every single piece of tile from our range of designer bathroom & kitchen floor and wall tiles has a compelling aura. The matt finish tiles for kitchen from our collection fit perfectly with modern day designs while our rustic kitchen wall tiles blend easily with every surrounding.</p><br />
     <h6>Design Available in Gloss, Matt, Metallic, Anti Slip, Digital & Rustic tiles</h6>
     <p>The exquisite collection we offer comes in various designs available in gloss, matt, metallic, anti-slip and rustic finishes. Our floor tiles design use special technology that makes them strong and stylish. The wooden floor tiles from our collection brings you closer to nature with their realistic finish. We promise to leave you in awe with our range of floor tiles also. Being one of India's top manufacturer of tiles, our motto is to keep fulfilling your appetite for style & aesthetics with innovation.</p>

     </div>
    
     </> 


  )
};

export default Main1
