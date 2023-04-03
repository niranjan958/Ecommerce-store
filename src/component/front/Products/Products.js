import React, {useState,useEffect} from 'react';
import "./Products.css";

// function Products({productItems, handleAddProduct}) {
//   return (
//     <div className='products'>
//      {productItems.map((productItem)=>(

//         <div className='card'>
//             <div>
//                 <img className="product-image"
//                 src={productItem.image}
//                  alt={productItem.name}    />
//             </div>
            
//             <div>
//                 <h3 className="product.name"> {productItem.name}</h3>
//             </div>

//             <div>
//             <h3 className="product.price"> {productItem.price}</h3>
//             </div>
            
//             <div>
//                 <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
//             </div>

//         </div>
//      ))}
//     </div>
//   )
// }





function Products ({handleAddProduct}) {

const [productItems, setProductItems] = useState(null);

useEffect(() => {
  fetch('https://fakestoreapi.com/products').then(data => data.json())
    .then(data => { setProductItems(data) });
}, []);


  return (
    <div className='products'>
 
      {
        (productItems) ?

          productItems.map((productItem)  => {
            return (
              <div className='card'>
            <div>
                <img className="product-image"
                src={productItem.image}
                 alt={productItem.title} />
            </div>
            
            <div>
                <h3 className="product.name"> {productItem.title}</h3>
            </div>

            <div>
            <h3 className="product.price"> ${productItem.price}</h3>
            </div>
            
            <div>
                <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>
                  Add to Cart</button>
            </div>

        </div>
            )
          }): (<h2>Loading....</h2>)
      }

    </div>
  )
}

export default Products;
