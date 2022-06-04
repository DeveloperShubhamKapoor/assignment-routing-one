import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Products = () => {
  const {id} = useParams()
  const[product,setProduct] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:3030/products/${id}`)
      .then(r=> r.json())
      .then(data=> setProduct(data))
    }
    
  },
  [id]);
  
  return (
    <div>
      Products: {id}
      {id ? <div>{product.name}</div> :<div>"Item does not exist"</div> }
      {/* <div>{product.name}</div> */}
       
    </div>
  )
}

export default Products