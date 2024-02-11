import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    const userInformation = JSON.parse(localStorage.getItem("userInfo"));
    const {  price, rawItem, quantity,buyingDate} = userInformation;
  
    const deleteInfo = () => {
      setTimeout(() => {
        return localStorage.clear();
      }, 1000);
      window.location.reload();
    };
  
    return (
       <div className='container'>
        <div className='data-grid mt-5 py-3'>
          <h4>Raw Item</h4>
          <h4>Buying Date</h4>
          <h4>Quantity</h4>
           <h4>Price</h4>
        </div>
        <Link style={{textDecoration:"none"}} to={'/buy-now'}>
        <div className="showing-data">
          <h5>{rawItem}</h5>
          <h5>{buyingDate}</h5>
          <h5>{quantity}</h5>
          <h5>{price}</h5>
        </div>
     </Link>
        </div>
    );
};

export default List;