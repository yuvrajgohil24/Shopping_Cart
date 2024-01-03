import React, { useState } from 'react';

const Cart = ({ cart }) => {

  let totalPrice = 0;
  const cartItems = cart.map(element =>
    <li key={element[0]}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2vh' }}>
        <img src={element[9]} width={"15%"} style={{ marginRight: '3vh', border: '2px black solid' }} alt="" />
        <div style={{flexDirection:'row'}}>
          <p style={{ marginRight: '3vh', fontWeight:'600' }}>Brand : {element[7]}</p>
          <p style={{ marginRight: '3vh', fontWeight:'600' }}>{element[1]}</p>
          <p style={{ marginRight: '3vh', fontWeight:'600' }}>Price : ${element[3]}</p>
        </div>
        <div style={{ visibility: 'hidden' }}>{totalPrice += element[3]}</div>
      </div>
      <hr style={{ width: '100%', borderWidth: '2px', borderColor: 'purple', marginRight: '200px' }} />
      {console.log(totalPrice)}
    </li>
  )

  return (
    <>
      <p style={{ marginLeft: '40%', color: 'purple', marginTop: '4vh', fontWeight: '700', fontSize: '30px' }}> Total Cart Price : ${totalPrice}</p>
      <ul style={{ listStyleType: 'none', backgroundColor: 'gray', border: '1.5px violet solid' }}>{cartItems}</ul>
    </>

  )

};

export default Cart;