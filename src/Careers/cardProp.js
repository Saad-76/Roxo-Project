import React from 'react';
import "./cardProp.css"
const  CardProp=({headLg,headSm,content,button})=> {
  return (
      <>
      <div>
          <div className="card-main-style">
              <h4 className="large-heading"> {headLg}</h4>
              <h6 className="small-heading">{headSm}</h6>
              <p className="content-card">{content}</p>
              <button className="card-button-style">{button}</button>
          </div>
      </div>
      </>
  );
}

export default CardProp;
