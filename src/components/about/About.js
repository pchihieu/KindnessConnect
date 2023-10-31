import React from "react";
import "./About.css";
import img1 from "./img/group-different-people-volunteering-foodbank.png";
import img2 from "./img/group-kids-friend-laughing-together.png";
import img3 from "./img/group-people-volunteering-foodbank-poor-people2.png";

const About = () => {
  return (
    <main className="about">
      <div className="about--text_container">
        <div className="about--who">
          <div className="about--headline">Chúng tôi là ai?</div>
          <div className="about--text">
          Là những học sinh, từ thiện giúp đỡ mọi người. Chúng tôi được thành lập bởi một nhóm những người tâm huyết, sẵn sàng đặt cả trái tim và tâm hồn vào công việc từ thiện.
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
          Lan tỏa được ý nghĩa của sự yêu thương giúp mọi người có thể nhận ra lòng trắc ẩn ở sâu bên trong con người mình.Điều quan trọng nhất chính là mọi người nhận ra rằng giúp đỡ người khác là một việc tốt.
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
