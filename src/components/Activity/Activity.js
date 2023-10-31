import React from 'react';
import "./css/Activity.css";

const Activity = () => {
    return (
        <div>
            <div className = "group1" style={{position: 'relative', height: '100%'}}>
                <div style={{backgroundColor: 'black', position: 'absolute', top: 0, left: 0,
                right: 0, bottom: 0, opacity: 0.3, zIndex: 0}}></div>
                <div className = "bg_pic" >
                    <div className = "frame62" style={{zIndex: 1}}>
                        <div className = "frame61">
                            <div className = "phongtrao">
                            Phong trào “từ thiện”
                            </div>
                            <div className = "nangcao">Nâng cao nhận thức cộng đồng.</div>
                        </div>

                        <div className = "donrac" style={{zIndex: 1}}>
                        Tìm hiểu và lên kế hoạch thật kĩ càng về những kế hoạch và phương án để có thể tiến hành kêu gọi quyên góp.Có thể cân nhắc và lên kế hoạch về những đối tượng cần sự giúp đỡ để tiến hành kêu gọi.
                        </div>
                    </div>

                    
                    <div className = "second_pic">

                    </div>
                </div>
            </div>

            <div className = "group2" style={{position: 'relative', height: '100%'}}>
                <div style={{backgroundColor: 'black', position: 'absolute', top: 0, left: 0,
                right: 0, bottom: 0, opacity: 0.3, zIndex: 0}}></div>
                <div className = "bg__pic" >
                    <div className = "frame62">
                        <div className = "frame61" style={{zIndex: 1}}>
                            <div className = "phongtrao">
                            Từ thiện khuyên góp
                            </div>
                            <div className = "nangcao" >Nhóm bạn trẻ genZ từ thiện khuyên góp</div>
                        </div>

                        <div className = "donrac" style={{zIndex: 1}}>
                        Tiến hành quyên góp cho các tổ chức(bệnh viện,trường học ở vùng sâu vùng xa,trại trẻ mồ cô,viện dưỡng lão,...) có quy mô lớn hơn để có thể góp vào 1 dự án thậm chí lớn hơn/quyên góp trực tiếp cho những cá nhân đang cần sự giúp đỡ nhằm giúp họ có thể cải thiện cuộc sống cho bản thân mình.</div>
                    </div>

                    
                    <div className = "second__pic">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;