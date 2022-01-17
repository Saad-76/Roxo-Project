import React from 'react'
import "./withDrawModal.css"

const WithDrawModal=()=> {
    return (
        <>
                     
    <div
      class="modal fade"
      id="WithDrawModal"
      tabindex="-1"
      aria-labelledby="EarningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
         
        <div class="withDraw-modal-style">
        <h6 className="withDrawModal-heading">WithDraw:</h6>
        

        <div className="withDraw-address">
            <h6>WithDraw Address: </h6>
            <p className="withdraw-address-field" >0x00000000000000000000000000000000000</p>
        </div>

        <div className="withDraw-network">
            <h6>Select Network: </h6>
            <p className="withDraw-network-field">Ensure the network is same while sending.</p>
        </div>

        <div className="withDraw-Amount">
            <h6>WithDraw Amount: </h6>
            <p className="withDraw-Amount-field">0.2342 ROXO</p>
        </div>
        <div className="withDraw-Receive">
            <h6>Receive Amount: </h6>
            <p className="withDraw-recieve-field">7990 ROXO<br/>ROXO network fee included</p>
        </div>
<div className="withDrawModal-button">
<button className="withDrawModal-button-style"> WithDraw</button>
</div>
          </div>
       
      
        </div>
      </div>
    </div>

        </>
    )
}

export default WithDrawModal;
