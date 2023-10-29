import React from "react";
import "./css/Main.css";
// import logo from "./css/pictures/logo.png";
import gift from "./css/pictures/gifts.png";
import volunteer2 from "./css/pictures/group-volunteers-collecting-garbage 2.png";
import twitter from "./css/pictures/twitter.svg";
import insta from "./css/pictures/instagram.svg";
import dribble from "./css/pictures/dribbble.svg";
import Header from "../common-components/Header";
import { useNavigate } from "react-router";

const Main = () => {

  const navigate = useNavigate();

  const HandleToMissions = () => {
    navigate("/missions");
  }

  const handleToContact = () => {
    navigate("/contact");
  }

  return (
    <div className="main--container">
      <Header /> 
      {/* Header here because <Footer /> somehow does not stick to the end of the page... */}
      <main>
        <div className="main--intro">
          <div className="main--assist">
            <div className="main--chungtoi">Chúng tôi là Hội tình nguyện</div>

            <div className="main--mission">Nhiệm vụ của chúng tôi</div>

            <div className="main--la">
             là truyền cảm hứng, thúc đẩy và trao quyền cho các cá nhân tham gia vào những phong trào tình nguyện tại Việt Nam.
            </div>
          </div>

          <button className="main--thamgia" onClick={handleToContact}>Tham gia cùng chúng tôi</button>
        </div>

        <div className="main--challenge">
          <h3 className="main--challenge_header">Thách Thức</h3>
          <div className="main--challenge_content">
          Làm sao để cho mọi người có thể tin tường vào chúng tôi và quyết định là một phần của dự án lan tỏa yêu thương này.Kêu gọi mọi người chung tay đóng góp vì cộng đồng cũng như cho họ thấy được rằng việc đóng góp mang ý nghĩa thực sự là từ tấm lòng cũng là một trong những thách thức được đề ra cho dự án này.
          </div>
        </div>

        <div className="main--dump">
          <div className="main--problem">
            <h1 className="main--problem1">Vấn nạn ô nhiễm môi trường</h1>
            <div className="main--problem2">
              Cần hành động ngay vì một Việt Nam xanh và sạch
            </div>
          </div>

          <div className="main--pics">
            <div className="main--second_pic"></div>
            <div className="main--third_pic"></div>
          </div>
        </div>

        <div className="main--doiqua">
          <div className="main--gift">
            <div className="main--left_text">
              <div className="main--upper">
                <h3 className="main--tichdiem">Tích điểm đổi quà</h3>
                <div className="main--banseduoc">
                  Bạn sẽ được thưởng điểm tương ứng với mỗi nhiệm vụ thành công.
                  Quy đổi điểm thưởng để đổi lấy các phần quà hấp dẫn.
                </div>
              </div>

              <button className="main--dennhiemvu" onClick={HandleToMissions}>Đến nhiệm vụ</button>
            </div>

            <div className="main--right_text">
              <img src={gift} alt="fck"></img>
            </div>
          </div>
        </div>

        <div className="main--tiepcan">
          <h3 className="main--cachchungta">Chúng ta cần tiếp cận</h3>
          <div className="main--chungtoi">
          Bất kì ai cũng có thể đóng góp 1 phần nhỏ của mình,dù nhiều hay ít,thì quan trọng nhất vẫn là tấm lòng và lòng hảo tâm để giúp đỡ cộng đồng.Hơn thế nữa,bạn còn có thể lựa chọn quyên góp vào hoạt động cụ thể mà bạn mong muốn để đóng góp.Tất cả đóng góp của bạn đề được ghi nhận lại với lòng biết ơn và sự kính trọng
          </div>

          <img src={volunteer2} alt="fuck" className="main--volunteer2"></img>

          <h3 className="main--hayhanhdong">
            “Chung tay lan tỏa yêu thương đến mọi người”
          </h3>

          <div className="main--last">
            <div className="main--greenenv">(c) Kindness Viet Nam</div>

            <div className="main--middle">
              <div className="main--mail">kindness@gmail.com</div>

              <div className="main--number">(+84) 912 345 678</div>
            </div>

            <div className="main--icon">
              <img src={twitter} alt="fuck"></img>
              <img src={insta} alt="fuck"></img>
              <img src={dribble} alt="fuck"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
