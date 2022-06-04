import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AllProducts = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const url = "http://localhost:3030/products"
    useEffect(() => {
      
        fetch(url)
      .then(r=>r.json())
      .then(data=>setData(data))
    }, [])

  return (
    <div>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>More Details</th>
            </tr>
                {data.map((d)=>(
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                    <td><Link to={`/products/${d.id}`} ><button >More Details</button></Link></td>
                  </tr>
                ))}
                
        </table>
    </div>
  )
}

export default AllProducts