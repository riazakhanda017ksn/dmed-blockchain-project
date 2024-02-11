import Slide from './Slide';
import img from '../../src/images/farmer.jpg'
import { Link } from 'react-router-dom';
const Farmer = () => {
    
    const h1 = `Farmer list`
    const h3 = ``
    return (
        <div className='farmer-Management'>
           <Slide h1={h1} h3={h3} img={img}/>
          
           <div className="input-form">
           <h2 className='mb-4'>Please fill up the form</h2>

            <form action="">
                <div className="input-field">
                    
                    <p>Crop Name*</p>
                    <input type="text" name='' required/>
                </div>
                <div className="input-field">
                    <p>Seed Company*</p>
                    <input type="text" name='' required/>
                </div>
                <div className="input-field">
                    <p>Farming Start Date*</p>
                    <input type="text" name='' required/>
                </div>
                <div className="input-field">
                    <p>Farming End Date*</p>
                    <input type="text" name='' required/>
                </div>
                <div className="input-field">
                    <p>Location*</p>
                    <input type="text" name='' required/>
                </div>
                <div className="input-field">
                    <p>Quantity*</p>
                    <input type="number" name='' required/>
                </div>
                <div className="input-field">
                    <p>Price*</p>
                    <input type="number" name='' required/>
                </div>
               <Link style={{textDecoration:"none"}} to={'/'}>
               <button>Submit</button>
               </Link>
            </form>
           </div>
        </div>
    );
};

export default Farmer;