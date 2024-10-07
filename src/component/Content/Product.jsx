import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
    const [product,setProduct]=useState({});
    const {prodId}=useParams();
    const getProduct=async ()=>{
        const response =await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${prodId}`);
        // const data = (await response).json();
        const data = await response.json();
        setProduct(data.recipe);
        console.log(data.recipe);
    }

    useEffect(()=>{
        getProduct();
    },[])

  return (
    <>
        <div className="container">
            <div className="details ">
                <div>
                    <h1>${product.title}</h1>
                </div>
                <div>
                    <img src={product.image_url} alt="" />
                    <h4>${product.social_rank}</h4>
                </div>
            </div>
        </div>
    
    
    </>
  )
}
