import React from 'react'
import { NavbarBrand } from 'react-bootstrap'

const Composo = ({car,showDetails}) => {
const {brand,img,price}=car

   
  return (
    <div>
       <h1>  {brand} </h1>
       <img  height=
       "300" width="200" src={img} alt="" />
       <button onClick={()=>showDetails(brand,price)}>View price</button>
          

           
       
      
    </div>
  )
}

export default Composo