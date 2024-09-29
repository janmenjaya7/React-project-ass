import React from "react";
import "../uniqe/unique.scss";
import girl from "../../img/unique/Image-girl.png";
import icon1 from "../../img/unique/icon-1.png";
import icon2 from "../../img/unique/icon-2.png";
import icon3 from "../../img/unique/icon-3.png";
import icon4 from "../../img/unique/icon-4.png";
import icon5 from "../../img/unique/icon-5.png";
import icon6 from "../../img/unique/icon-6.png";
function Unique() {
  return (
    <div>
      <div id="main-unique">
        <div className="heading-unique">
          <div className="heading">What's Unique with Lurnigo</div>
          <div className="text-dis">
            With Lurnigo you can completely re-write your career. No prior
            specific background/experience needed. Only willingness to put in
            efforts is required. We prioritize on teaching excellence above all
            else.
          </div>
        </div>
        <div className="unique-girl-section">
          {/* <div className="icon-main-sec"> */}
          <div className="icon-section">
            <div className="icon-outer-section">
              <img src={icon1} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">Live Online Classes</div>
                <div className="text-desc-unique">
                  Live interactive classes, on your comfort of location
                </div>
              </div>
            </div>
            <div className="icon-outer-section">
              <img src={icon2} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">1:1 Doubt Solving</div>
                <div className="text-desc-unique">
                  Personal Doubt solving classes, 1:1 mentoring for Different
                  exams.
                </div>
              </div>
            </div>{" "}
            <div className="icon-outer-section">
              <img src={icon3} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">Weekly Online Tests</div>
                <div className="text-desc-unique">
                  Daily practice paper after every class, and weekly online test
                  for each subject.
                </div>
              </div>
            </div>{" "}
            <div className="icon-outer-section">
              <img src={icon4} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">
                  Practice Till Perfection!
                </div>
                <div className="text-desc-unique">
                  Subject wise question banks with varying difficulty levels,
                  solutions and previous year question papers.
                </div>
              </div>
            </div>
            <div className="icon-outer-section">
              <img src={icon5} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">
                  Insights, Summary, Recommendations
                </div>
                <div className="text-desc-unique">
                  Meticulous performance tracking to create progress reports and
                  get recommendations on topics to focus.
                </div>
              </div>
            </div>
            <div className="icon-outer-section">
              <img src={icon6} alt="icon-1" className="icon-img" />
              <div>
                <div className="text-inner-heading">
                  Curriculum Mapped Learning
                </div>
                <div className="text-desc-unique">
                  Meticulous performance tracking to create progress reports and
                  get recommendations on topics to focus.
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={girl} alt="girl-png" className="girl-img" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Unique;
