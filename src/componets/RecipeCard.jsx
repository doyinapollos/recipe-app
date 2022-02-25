import React from 'react'
import { useState } from 'react';


export default function RecipeCard(props) {

    
  console.log("props", props)
    
  return (
  
    <div>
      
      
      <div className='recipe-card--container'>
          <div className="recipe--card">
              <div className="recipe--card--img--div">
                  <img className='recipe--img' src= {props.img} alt='' />
              </div>
              <span>{props.name}</span><br />
              <span>ingredients</span><br />
              <span onClick={() => window.open(props.url)}>see complete recipe</span>
          </div>
        </div>
        
        

    </div>
  )
}
