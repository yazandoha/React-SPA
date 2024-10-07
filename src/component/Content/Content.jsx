import React, { useEffect, useState } from 'react'
import style from './Content.module.css'
import { Link } from 'react-router-dom';
export default function Content() {
  const [products,setProducts] = useState([]);
  const getPizza =async()=>{
    const product= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data =await product.json();
    setProducts(data.recipes);
    // console.log(data.recipes);
  }

  useEffect(()=>{
    getPizza();
  },[])

  return (
    <>
      <h2>Pizaa Product</h2>
      <div className="container">
        <div className="product row">
          {
            
            products.map((product)=>{
                return <div className="col-md-4 border mb-4">
                        <h3 className='fs-5'>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
                        <img className={`${style.img}`} src={product.image_url} alt="" />
                        <p>{product.social_rank}</p>
                        <div className="details">
                          <Link  class="btn btn-primary" to={`/content/${product.recipe_id}`} >Details</Link>
                        </div>
                      </div>
            })
          }

        </div>
      </div>

    </>
  )
}
