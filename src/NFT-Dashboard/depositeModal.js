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
      <div class="modal-dialog">
        <div class="modal-content">
         
          <div class="modal-body">
        <h6>Deposite:</h6>
        <div >
            <h6>Make Sure:</h6>
            <p>1. Send only ROXO to this deposit address.</p>
            <p>2. Ensure that the network is same while sending.</p>
        </div>

        <div className="deposit-address">
            <h6>Address: </h6>
            <p>0x00000000000000000000000000000000000</p>
        </div>

        <div className="deposit-network">
            <h6>Select Network: </h6>
            <p>Ensure the network is same while sending.</p>
        </div>

        <div className="deposit-minimum">
            <h6>Minimum Deposit: </h6>
            <p>0.2342 ROXO</p>
        </div>

          </div>
       
      
        </div>
      </div>
    </div>

        </>
    )
}

export default DepositeModal;
