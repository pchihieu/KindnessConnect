import React from "react";
import "./About.css";
import img1 from "./img/environment-volunteer-concept 1.png";
import img2 from "./img/environment-volunteer-teamwork-concept 1.png";
import img3 from "./img/group-volunteers-collecting-garbage 3.png";

const About = () => {
  return (
    <main className="about">
      <div className="about--text_container">
        <div className="about--who">
          <div className="about--headline">Chúng tôi là ai?</div>
          <div className="about--text">
          Là những học sinh,tình nguyện viên nguyện giúp đỡ mọi người
          </div>
        </div>
      </div>
      <div className="about--images">
        <img src={img1} alt="person collecting litter" className="img" />
        <img
          src={img2}
          alt="people determined in teamworking"
        />
        <img src={img3} alt="people collecting trash" className="img" />
      </div>
      <div className="about--text_container">
        <div className="about--what">
          <div className="about--headline">Chiến lược của  Kindness</div>
          <div className="about--text">
          Lan tỏa được ý nghĩa của sự yêu thương:giúp mọi người có thể nhận ra lòng trắc ẩn ở sâu bên trong con người mình.Điều quan trọng nhất chính là mọi người nhận ra rằng giúp đỡ người khác là một việc tốt.
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
