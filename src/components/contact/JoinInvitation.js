import React from "react";
import "./JoinInvitation.css";

const JoinInvitation = () => {
  return (
    <div className="joinInvitation">
      <div className="ji--content_container">
        <div className="ji--headline">Chúng Tôi Sẵn Sàng Chung Tay</div>
        <div className="ji--text">
        Tại Kindness, chúng tôi đặt tình nguyện và lòng nhân ái ở trung tâm mọi hoạt động của chúng tôi. Chúng tôi tin rằng bằng sự đoàn kết và hỗ trợ lẫn nhau, chúng ta có thể thay đổi cuộc sống và tạo nên một thế giới tốt đẹp hơn.
        </div>
        <div className="ji--buttons">
          <button className="ji--btn1">kindness@gmail.com</button>
          <button className="ji--btn2">(+84) 915 542 251</button>
        </div>
      </div>
    </div>
  );
};

export default JoinInvitation;
