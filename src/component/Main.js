import React from 'react'
import './Navbar.css'
import Main1 from './Main1';
const Main = () => {
  return (
    <>
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image/Capture.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./image/Capture1.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./image/Capture2.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./image/Capture3.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./image/Capture4.JPG" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  <Main1/>
  </>
  )
};

export default Main
