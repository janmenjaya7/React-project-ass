import React from "react";
import "../Home/Home.scss";
import img1 from "../../img/img-1.png";
import img2 from "../../img/img-2.png";
import img3 from "../../img/img-3.png";
import img4 from "../../img/img-4.png";
function Home() {
  return (
    <>
      <div id="main-section">
        <div>
          <div className="nav-text">Lurnigo</div>
        </div>
        <div className="nav-lest">
          <li>Courses</li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Achievements</li>
        </div>
        <div>
          <button className="btn-sign">Sign in</button>
        </div>
      </div>
      <div id="landing-content">
        <div className="text-section">
          <div>
            <div className="text-into">Get Into</div>
            <div className="text-college">Dream College</div>
            <div className="text-sat">
              Affordable SAT, ACT, PSAT and AP Test Prep That Raises Test
              Scores.
            </div>
            <button className="text-book">Book Free Session</button>
          </div>
        </div>
        <div className="img-section">
          <img src={img1} alt="img1" className="img-sec" />
          <img src={img4} alt="img4" className="img-sec" />
          <img src={img3} alt="img1" className="img-sec" />
          <img src={img2} alt="img1" className="img-sec" />
        </div>
      </div>
    </>
  );
}

export default Home;
