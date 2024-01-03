import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ cart, handleShow, showCart }) => {

  const handleSubmit = (e) => {
    // console.log("uasidfi");
    // e.preventDefault();
  }
 
return (
  <div >
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:'lightgray'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => handleShow(false)} style={{color:'coral' }} ><img src='../../public/vite.svg' alt='Shoppy' width={45} style={{borderRadius:'50%'}} /></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"} onClick={() => handleShow(false)} >Home</Link>
            </li>
          </ul>
          <div style={{ marginRight: '3vh', color: 'orange' }} onClick={() => handleShow(!showCart)}>
            <i style={{ fontSize: "37px", cursor: 'pointer' }} className="fa">&#xf07a;</i><sup style={{ fontWeight:'600', fontSize:'15px',top: "-3.8vh", right: '2.5vh', color: 'orange ' }}>{cart}</sup>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
}

export default Navbar
