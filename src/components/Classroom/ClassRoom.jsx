import React from "react";
import "../Classroom/classroom.scss";
import classroom from "../../img/classRoom.png";
import gpay from "../../img/google-play.png";
import apple from "../../img/apple.png";
function ClassRoom() {
  return (
    <div>
      <div id="classRoom">
        <div className="classroom-left-sec">
          <div className="heading-text">Classroom In Your Pocket</div>
          <div className="text-sub">
            Choose Your Courses & Grow Your Career with All New Lurnigo App
          </div>
          <div className="number-input-outer">
            <div className="number-dropdown">+1 </div>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="input-number"
            />
            <button className="btn-started">Get Started</button>
          </div>
          <div className="text-download">Download App Now</div>
          <div className="app-sec">
            <div className="text-bg">
              <div className="g-pay-outer">
                <img src={gpay} alt="" />
                <div className="g-pay-text">Get it on Play Store</div>
              </div>
            </div>
            <div className="text-bg">
              <div className="g-pay-outer">
                <img src={apple} alt="" />
                <div className="g-pay-text">Get it on App Store</div>
              </div>
            </div>
          </div>
        </div>
        <img src={classroom} alt="classroom" className="img-classroom" />
      </div>
    </div>
  );
}

export default ClassRoom;
