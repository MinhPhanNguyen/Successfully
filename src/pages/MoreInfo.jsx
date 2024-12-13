import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import more_img1 from "../assets/images/more-img1.png";
import more_img2 from "../assets/images/more-img2.png";
import more_img3 from "../assets/images/more-img3.png";
import more_img4 from "../assets/images/more-img4.png";
import more_img5 from "../assets/images/more-img5.png";

const Contain_Top = ({img, title, content}) => {
    return (
        <div className="Contain Top">
            <div className="ContainIMG" data-aos="fade-right">
                <img src={img} data-aos="zoom-in"/>
            </div>

            <div className="Content" data-aos="fade-left">
                <h3 data-aos="fade-down">{title}</h3>
                <p data-aos="fade-down">{content}</p>
            </div>
        </div>
    )
}

const Contain_Bottom = ({img, title, content}) => {
    return (
        <div className="Contain Bottom">
            <div className="Content" data-aos="fade-left">
                <h3 data-aos="fade-down">{title}</h3>
                <p data-aos="fade-down">{content}</p>
            </div>

            <div className="ContainIMG" data-aos="fade-right">
                <img src={img} data-aos="zoom-in"/>
            </div>
        </div>
    )
}

const MoreInfo = () => {
    return (
        <div>
            <Header/>
            <div className="MoreInfo">
                <Contain_Top 
                    img={more_img1}
                    title="1. Đến Từ Nhu Cầu Của Cộng Đồng"
                    content="Nhu cầu tìm kiếm nhà vệ sinh công cộng nhanh chóng và dễ dàng là một vấn đề mà nhiều người gặp phải đặc biệt trong các thành phố lớn như TP. Hồ Chí Minh."    />
                <Contain_Bottom 
                    img={more_img2}
                    title="2. Xem Xét Và Lên Kế Hoạch"
                    content="RestroomFinder được tạo ra để đáp ứng nhu cầu thiết yếu này, giúp người dùng không còn phải lo lắng khi cần tìm nhà vệ sinh ngay lập tức. Chúng tôi đã lắng nghe từ cộng đồng, từ những khó khăn, mong muốn, và nhu cầu của họ, từ đó phát triển một giải pháp tiện ích và dễ sử dụng."    />
                <Contain_Top 
                    img={more_img3}
                    title="3. Nghiên cứu và phát triển"
                    content="Nghiên cứu kỹ lưỡng về hành vi người dùng cũng như các vị trí có sẵn nhà vệ sinh công cộng. Tích hợp các công nghệ định vị, hiển thị vị trí theo thời gian thực và đề xuất các nhà vệ sinh gần nhất dựa trên vị trí của người dùng."    />
                <Contain_Bottom 
                    img={more_img4}
                    title="4. Ra mắt và trải nghiệm"
                    content="Sau quá trình phát triển, RestroomFinder đã chính thức ra mắt với giao diện thân thiện, dễ sử dụng cho mọi đối tượng. Chúng tôi cam kết sẽ mang lại trải nghiệm tốt nhất cho người dùng khi tìm kiếm và sử dụng dịch vụ công cộng tại thành phố."    />
                <Contain_Top 
                    img={more_img5}
                    title="5. Kết quả đạt được"
                    content="RestroomFinder đã nhận được phản hồi tích cực từ cộng đồng và ngày càng có nhiều người sử dụng. Với tính năng tìm nhà vệ sinh nhanh chóng, hiệu quả, ứng dụng đã giải quyết một nhu cầu cơ bản nhưng quan trọng trong đời sống hàng ngày. "    />
            </div>
            <Footer/>
        </div>
    )
}

export default MoreInfo;