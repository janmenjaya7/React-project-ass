import React from "react";
import "../Demo/demo.scss";
import demo from "../../img/demo.png";
function Demo() {
  return (
    <div>
      <div id="demo-section">
        <div>
          <img src={demo} alt="demo" className="img-demo" />
        </div>
        <div className="input-main">
          <div className="heading-text">
            Book Your <span className="demo-inner-text">Free Demo</span> Session
          </div>
          <div className="sub-heading">
            Get a free academic counselling session
          </div>
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input-type"
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number (USA Only)"
              className="input-type"
            />
            <input
              type="text"
              placeholder="Select Your Class"
              className="input-type"
            />
            <button className="btn-sec">Book a Free Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
