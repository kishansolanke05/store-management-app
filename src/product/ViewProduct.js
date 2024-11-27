import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function  ViewProduct() {
    const[product,setProduct]=useState([]);
    const getData=()=>{
        axios.get('http://localhost:5000/product')
        .then((res)=>setProduct(res.data))

    }
     useEffect(getData,[])

     function deleteProduct(id)
     {
        axios.delete(`http://localhost:5000/product/${id}`)
        .then(res=>{
            if(res.status===200)
            {
                alert("Product details removed...!")
                window.location.reload();
            }
        })
     }
    return(
      <div>
        <table className='table table-hover tabel-dark'>
            <thead>
                <tr>Id</tr>
                <th>Product Name</th>
                <th>Specification</th>
                <th>Manufacture</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Actions</th>
                
            </thead>
            <tbody>
                {
                    product.map((product)=><tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.Specification}</td>
                        <td>{product.manufacture}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.instock}</td>
                        <td><input type='checkbox'checked={product.inStock}></input></td>
                        <td>
                            <button className="btn btn-outline-denger me-4" onClick={()=>deleteProduct(product.id)}>
                                <i class="bi bi-trash3-fill"></i>
                            </button>

                            <Link className="btn btn-outline-primary"to={`/add/${product.id}`}>
                                <i class="bi bi-pencil-square"></i>
                            </Link>

                        </td>
                    </tr>)
                }
            </tbody>
         </table>
        </div>
    
    )
}

export default ViewProduct