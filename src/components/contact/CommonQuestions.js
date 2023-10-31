import React from "react";
import "./CommonQuestions.css";
import Question from "./Question";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <div className="cq--headline">
        Trước khi gửi tin nhắn cho chúng tôi đây là những điều bạn nên biết
      </div>
      <div className="cq--questions_container">
        <Question
          question={"Sứ mệnh của Kindness là gì?"}
          answer={
            "Sứ mệnh của chúng tôi là Kindness. Chúng tôi cam kết hỗ trợ cộng đồng, đối phó với những thách thức xã hội, và tạo nên những cơ hội cho sự phát triển bền vững."
          }
        />
        <Question
          question={"Tại sao chúng tôi tồn tại?"}
          answer={
            "Kindness ra đời với sứ mệnh giúp đỡ và lan tỏa tình thương đến tất cả mọi người. Chúng tôi cam kết hỗ trợ cộng đồng, đối phó với những thách thức xã hội, và tạo nên cơ hội cho sự phát triển bền vững."
          }
        />
        <Question
          question={"Cách chúng tôi hoạt động"}
          answer={
            "Kindness hoạt động thông qua việc tổ chức các sự kiện từ thiện, quyên góp tài chính, hỗ trợ giáo dục, .... Chúng tôi luôn đảm bảo sự minh bạch và hiệu quả trong mọi hoạt động của chúng tôi."
          }
        />
        <Question
          question={
            "Những cơ hội cho bạn tham gia"
          }
          answer={
            "Chúng tôi tin rằng mọi người đều có khả năng thay đổi cuộc sống của người khác. Hãy cùng Kindness: từ thiện-quyên góp, tham gia sự kiện, .... Mọi bước đi nhỏ của bạn có thể tạo nên sự khác biệt lớn."
          }
        />
        <Question
          question={"Thay đổi thế giới cùng nhau"}
          answer={`Chúng ta có thể thay đổi thế giới cùng nhau. Hãy cùng nhau xây dựng một thế giới tốt đẹp hơn. Chúng tôi chắc chắn rằng bằng sự đoàn kết và lòng nhân ái, chúng ta có thể thực hiện sứ mệnh của mình và tạo nên niềm tin và hy vọng.`}
        />
        <Question
          question={"Chúng tôi làm gì?"}
          answer={
            "Chúng tôi hoạt động thông qua nhiều cách khác nhau. Kindness tổ chức các sự kiện từ thiện, hỗ trợ giáo dục, quyên góp tài chính, và tham gia vào những dự án xã hội quan trọng."
          }
        />
        <Question
          question={"Tiền đóng góp sẽ được Kindness sử dụng thế nào?"}
          answer={
            "Kindness sẽ dùng tiền quyên góp của các bạn để bảo trì web hoặc mua thêm các phần thưởng cho thành viên nhiệm vụ, tạo niềm vui để các bạn tích cực tham gia."
          }
        />
        <Question
          question={"Tôi có thể đóng góp cho Kindness bằng cách nào?"}
          answer={
            "Các bạn có thể tham gia nhiệm vụ với tư cách từ thiện viên của chúng tôi. Bạn cũng có thể quyên góp cho chúng tôi và nhận được quyền truy cập những thông tin mới nhất của dự án."
          }
        />
      </div>
    </div>
  );
};

export default CommonQuestions;
