import React from 'react';
import logo from "../assets/react.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Header = ({setShow}) => {
  return (
    <div>
      <div className='header'>
        <div className="logo">
          <img src={logo} alt="logo" onClick={()=> setShow(true)}/>
        </div>
        <div className="icon-shop" onClick={()=> setShow(false)}>
          <FontAwesomeIcon icon={faBagShopping} />
          <span className='cart-count'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
