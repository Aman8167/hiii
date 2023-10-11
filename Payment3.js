import React from 'react'
import './Payment3.css';
function Payment3() {
  return (
    <div className="container-fluid ">
   
    <div class="form-body" >
  <div className="card-1">
  <div className="row justify-content-center">
  <div className="col-md-10">
  <div className="card-body mt-5">
  <form>
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Vendor Name</label>
        <input type="text" class="form-control" placeholder="Enter your Vendor Name" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Vendor Address</label>
        <input type="text" class="form-control"  placeholder="Enter your Vendor Address" />
        
      </div>
    </div>
  </div>
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Vendor Mail</label>
        <input type="text" class="form-control" placeholder="Enter your Vendor Mail" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Vendor  Number</label>
        <input type="Number" class="form-control"  placeholder="Enter your Vendor Number" />
        
      </div>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Partial Payment</label>
        <input type="text" class="form-control" placeholder="Enter your Partial Payment" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Amount</label>
        <input type="number" class="form-control"  placeholder="Enter your Amount" />
        
      </div>
    </div>
  </div>
  
  
  
  
  
 
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >TDS 1%</label>
        <input type="text" class="form-control" placeholder="Enter your TDS 1%" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Amount</label>
        <input type="number" class="form-control"  placeholder="Enter your Amount" />
        
      </div>
    </div>
  </div>
  
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Total Amount</label>
        <input type="text" class="form-control" placeholder="Enter your Total Amount" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Amount</label>
        <input type="number" class="form-control"  placeholder="Enter your Amount" />
        
      </div>
    </div>
  </div>
  
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Paid Amount</label>
        <input type="text" class="form-control" placeholder="Enter your Paid Amount" />
        
      </div>
    </div>
    <div class="col-md">
      <div class="form-group">
      <label >Amount</label>
        <input type="number" class="form-control"  placeholder="Enter your Amount" />
        
      </div>
    </div>
  </div>
  
  
  <div className="form-group">
  <label> Payment Method </label>
  <input type="text" class="form-control"  placeholder="Enter your Payment Method" />
  
  </div>
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <br></br>
  <button id="btn1" className="btn btn-danger " >
  Edit
  </button>
  <button id="btn2" className="btn btn-danger " >
  Save
  </button>
  <button id="btn3" className="btn btn-danger " >
Print
</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Payment3
