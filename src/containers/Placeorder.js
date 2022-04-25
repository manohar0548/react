import React from 'react'
import { Link } from 'react-router-dom';

const Placeorder = () => {

  return (

      <div className="container">
          <h3>Place Order</h3>
            <div className="row">
              <><form className="form">
                
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                
                
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" />
                
                
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" /><br></br>
                
                
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">Are you sure you want to place your order</label>&nbsp;
                

                <Link to="/successmessage"><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Place Your Order
                </button></Link>&nbsp;
                
              </form></>
            </div>

          </div>
);
}
export default Placeorder;