import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function AddProduct(){
    const {register,handleSubmit,setValue,reset} =useForm();
    const {id} =useParams()
    const SaveData=product=>{
     axios.post('http://localhost:5000/product',product)
     .then(res=>{
        if(res.status===201){
            alert("Product Details Saved...!")
            reset();
     }
    })

     .catch(error=>console.log(error));
     }
     const getEditData=()=>{
        if(id)
        {

        
        axios.get(`http://localhost:5000/product/${id}`)
          .then(res=>{
         for (let prop in res.data)
         {
           setValue(prop,res.data[prop])
         }
       })

    }
    }

       useEffect(getEditData,[]);
    return(
        <div className="d-flex justify-content-center">
            <div className="bg-white w-50 mt-3 p-3">
                <h1 className="text-center fs-3 text-primary">AddProduct Details..!</h1>
                <form onSubmit={handleSubmit(SaveData)}>
                    <div>
                        <label className="form-label">Enter Product Id</label>
                        <input type="text"{...register('id')}className="form-control border border-dark"/>
                    </div>

                    <div>
                        <label className="form-label">Enter Product Name</label>
                        <input type="text"{...register('productName')}className="form-control border border-dark"/>
                    </div>

                    <div>
                        <label className="form-label">Enter Product Specification</label>
                        <input type="text"{...register('specification')}className="form-control border border-dark"/>
                    </div>

                    <div>
                        <label className="form-label">Enter manufacture Name</label>
                        <input type="text"{...register('manufacture')}className="form-control border border-dark"/>
                    </div>

                    <div>
                        <label className="form-label">Enter Product Quantity</label>
                        <input type="text"{...register('quantity')}className="form-control border border-dark"/>
                    </div>

                    <div>
                        <label className="form-label">Enter Product Price</label>
                        <input type="text"{...register("price")}className="form-control border border-dark"/>
                    </div>
                    <div>
                        <label className="form-label">Is Product instock..?</label>
                        <input type="text"{...register('inStock')}className="form-control border border-dark"/>
                    </div>

                    <div className="mt-3">
                        <label className="form-check-label" me-4>Enter Product Id</label>&nbsp;
                        <input type="checkbox"className="form-check-input border border-dark"/>
                    </div>

                    <button className="btn btn-sucess"mt-3>submit</button>

                  </form>
            </div>
            
        </div>
    )
}

export  default AddProduct