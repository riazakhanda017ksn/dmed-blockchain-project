import React, { useState } from 'react';
import Slide from './Slide';
import img from '../../src/images/distributor.jpg'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import List from './List';

const Distributor = () => {
    const [success,setSuccess] = useState(false)
    const [show,setShow]=useState(true)
    const handleChange = () =>{
        setShow(!show)
    }
    const [user, setUser] = useState({
        rawItem: "",
        buyingDate: "",
        quantity: "",
        price:""
      });
      const { rawItem,buyingDate,quantity,price} = user;
      const valueHandler = (event) => {
        return setUser({ ...user, [event.target.name]: event.target.value });
      };
    
      const submitHandler = (e) => {
        window.location.reload()
        e.preventDefault();
        return localStorage.setItem("userInfo", JSON.stringify(user));
        
      };
    
      const loadPage = () => {
        setTimeout(() => {
          return setSuccess(true);
        }, 1000);
      };
    const h1 = `Distributor list`
    const h3 = ``
    return (
        <>
       <div className='produre'>
        <Slide h1={h1} h3={h3} img={img}/>
        <div className="flex-post">
            <button onClick={handleChange}>Post <FaPlus/></button>
            <Link to>List Page</Link>
        </div>
        <div className="input-form">
       
      {
        show && (
            <div>
                 <h2 className='mb-4'>Please fill up the form</h2>

<form onSubmit={submitHandler}>
<div className="input-field">
    
    <p>Buying Raw Item*</p>
    <input type="text" name='rawItem' value={rawItem} onChange={valueHandler} required/>
</div>
<div className="input-field">
    <p>Buying Date*</p>
    <input type="text" name='buyingDate' value={buyingDate} onChange={valueHandler} required/>
</div>
<div className="input-field">
    <p>Quantity*</p>
    <input type="text" name='quantity' value={quantity} onChange={valueHandler} required/>
</div>
<div className="input-field">
    <p>Price*</p>
    <input type="text" name='price' value={price} onChange={valueHandler} required/>
</div>
<button type='submit' onClick={loadPage}>Submit</button>
</form>
            </div>
        )
      }
       </div>
    </div>
       </>
    );
};

export default Distributor;