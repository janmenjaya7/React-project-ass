import React from "react";
import "../Footer/footer.scss";
import icon1 from "../../img/footer-icon/icon-1.png";
import icon2 from "../../img/footer-icon/icon-2.png";
import icon3 from "../../img/footer-icon/icon-3.png";
import icon4 from "../../img/footer-icon/icon-4.png";
import icon5 from "../../img/footer-icon/icon-5.png";

function Footer() {
  return (
    <>
      <div id="footer-section">
        <div>
          <div className="footer-heading">Lurnigu</div>
          <div className="footer-sub-text">
            Let’s grow up your education level up, We are here to help you keep
            focus when studying
          </div>
          <div className="fab-icon">
            <img src={icon1} alt="icon1" />
            <img src={icon2} alt="icon1" />
            <img src={icon3} alt="icon1" />
            <img src={icon4} alt="icon1" />
            <img src={icon5} alt="icon1" />
          </div>
        </div>
        <div className="footer-list">
          <div>
            <li className="list-heading">IMPORTANT LINKS</li>
            <li className="list-test">About Us</li>
            <li className="list-test">Contact Us</li>
            <li className="list-test">Career</li>
          </div>
          <div>
            <li className="list-heading">KNOWLEDGE</li>
            <li className="list-test">Blogs</li>
            <li className="list-test">Site Map</li>
          </div>
          <div>
            <li className="list-heading">POLICIES</li>
            <li className="list-test">Terms & Condition</li>
            <li className="list-test">Privacy Policy</li>
            <li className="list-test">Refund Policy</li>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-end-text">
          © 2024 All rights reserved Lurnigu PVT Ltd.
        </div>
      </div>
    </>
  );
}

export default Footer;
