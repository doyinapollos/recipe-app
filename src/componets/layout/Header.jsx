
import React, { useState } from 'react'




export default function Header(props) {

  return (
    <div className='header'>
      <div className="nav--bar">
            <div className='logo--div'>
                 <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeq9LGiUVqFDp1QzQ79HCx_9B6I88jfiSgw&usqp=CAU' alt='' />
            </div>
            <div className='search--bar--div'>
                 <input className='search--bar' type= "text" placeholder='search for recipe' onChange={props.getText} />
            </div>
      </div>
    </div>

    
  )
}
