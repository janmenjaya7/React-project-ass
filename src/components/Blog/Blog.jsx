import React from "react";
import "../Blog/Blog.scss";
import img1 from "../../img/blog-img/Ima-blog-1.png";
import img2 from "../../img/blog-img/ima-blog-2.png";
import img3 from "../../img/blog-img/ima-blog-3.png";

function Blog() {
  return (
    <div id="blog-section">
      <div className="heading-text">Lurnigo Blog</div>
      <div className="text-blog">
        Let's see why SAT has achieved an edge. Have a detailed view of our
        student projects, success stories and more.
      </div>
      <div className="blog-card-main">
        <div className="blog-card">
          <div className="img-main-section">
            <img src={img1} alt="img1" className="img-blog" />
          </div>
          <div className="main-text">
            <div className="text-summary">Summary of SAT 2023 Results</div>
            <div className="text-des-summary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet.
            </div>
            <div className="text-read">Read More</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="img-main-section">
            <img src={img2} alt="img" className="img-blog" />
          </div>
          <div className="main-text">
            <div className="text-summary">Summary of SAT 2023 Results</div>
            <div className="text-des-summary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet.
            </div>
            <div className="text-read">Read More</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="img-main-section">
            <img src={img3} alt="img" className="img-blog" />
          </div>
          <div className="main-text">
            <div className="text-summary">Summary of SAT 2023 Results</div>
            <div className="text-des-summary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet.
            </div>
            <div className="text-read">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
