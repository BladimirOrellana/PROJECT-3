import React from "react";
import './../index.css';

const CompanyInformation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
        <h3>Company Information:</h3>
        <p>Name: <span>H&B Fencing</span></p>
        <p>Address: <span>15608 S Brentwood St, Channelview, TX 77530</span></p>
        <p>Tel: <span>(832)-296-4721</span></p>
        <p>Emai: <span>info@hbfencingandlandscaping.com</span></p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="customer-info-container">
        <h3>Customer Information:</h3>
        <p>Name: <span>H&B Fencing</span></p>
        <p>Address: <span>15608 S Brentwood St, Channelview, TX 77530</span></p>
        <p>Tel: <span>(832)-296-4721</span></p>
        <p>Emai: <span>info@hbfencingandlandscaping.com</span></p>
        
        
        </div>
       </div>
        
      </div>
    </div>
  );
};

export default CompanyInformation;
