import React from 'react'
import "./depositeModal.css"

const DepositeModal=()=> {
    return (
        <>
                     
    <div
      class="modal fade"
      id="DepositeModal"
      tabindex="-1"
      aria-labelledby="EarningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-size-deposit">
        <div class="modal-content">
         
          <div class="modal-style">
        <h6 className="depositeModal-heading">Deposit:</h6>
        <div className="depositModal-makeSure" >
            <h6>Make Sure:</h6>
            <p>1. Send only ROXO to this deposit address.</p>
            <p>2. Ensure that the network is same while sending.</p>
        </div>

        <div className="deposit-address">
            <h6>Address: </h6>
            <input  className="address-field" type="text" placeholder="0x00000000000000000000000000000000000" />
        </div>

        <div className="deposit-network col-md-4">
           <h6>Select Network: </h6> 
            {/* <input className="network-field" placeholder="Ensure the network is same while sending."/> */}
<div>
     <select
              className="network-field"
              
            >
      
              <option selected>Ensure the network is same while sending.</option>
              <option value="Customer">Customer</option>
              <option value="Employee">Employee </option>
            </select>
          </div>


        </div>

        <div className="deposit-minimum">
            <p>Minimum Deposit: </p>
            <p className="minimumDeposite-field">0.2342 ROXO</p>
        </div>

          </div>
       
      
        </div>
      </div>
    </div>

        </>
    )
}

export default DepositeModal;
