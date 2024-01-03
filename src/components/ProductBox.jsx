import React, { useState } from 'react'

const ProductBox = (props) => {
  let { title, description, brand, price, imageUrl, addToCart, item} = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
    
  return (
    <div className='my-3' >
      <div className="card" onClick={handleClick}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{color:'orange'}}>{title}</h5>
          <p className='card-text'><b>{brand}</b></p>
          <p className="card-text">{description}...</p>
          <p className="card-text"><b><em>Price : ${price} </em></b></p>
          <button className='btn btn-primary' onClick={() => addToCart(item)}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductBox