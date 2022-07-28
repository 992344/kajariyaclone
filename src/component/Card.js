
import React,{useEffect, useState} from "react";
import Data from "./Api";
import { useParams } from "react-router-dom";
import './card.css';

const Card = ({handleClick} ) => {

  const {id}=useParams()
  console.log(id)
  
  const[item ,setItem]=useState(Data)
  const user=true
  
  useEffect(()=>{
    if(id==="all"){
      setItem(Data)
    }else{
      const filteredItem=Data.filter((currentElem)=>{
        return currentElem.category===id;
      });
      setItem(filteredItem);
    }
    
  },[id])
 
  console.log(item)
  return (
    <>   
      <section className="mainCardCointainer">
      {item.map((curElem) => {
          
        return (
            
              <div className="card-container" key={curElem.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle"> {curElem.category}</span>
                    <h2 className="card-title"> {curElem.name} </h2>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media" />

                  <button className="card-tag  subtle" onClick={() => handleClick(curElem)} >Add to Cart</button>
                </div>
              </div>
          );
     })}
      </section>
      
    </>
  );
};

export default Card;