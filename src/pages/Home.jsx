import React from "react";
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";
import { MdLocalPharmacy } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bg1 from "../assets/images/bg-1.png"
import bg2 from "../assets/images/bg-2.png"
import search from "../assets/images/search-sc2.png"
import rate from "../assets/images/rate-sc2.png"
import cmt from "../assets/images/cmt-sc2.png"
import img_sc3 from "../assets/images/img-sc3.png"
import number_sc3 from "../assets/images/number-sc3.png"
import sc4_img1 from "../assets/images/sc4-img1.png"
import sc4_img2 from "../assets/images/sc4-img2.png"
import sc4_img3 from "../assets/images/sc4-img3.png"
import sc4_img4 from "../assets/images/sc4-img4.png"
import sc4_img5 from "../assets/images/sc4-img5.png"
import sc4_img6 from "../assets/images/sc4-img6.png"
import sc5_vid from "../assets/videos/sc5-vid.mp4"
import sc6_img1 from "../assets/images/sc6-img1.png"
import sc6_img2 from "../assets/images/sc6-img2.png"
import sc6_img3 from "../assets/images/sc6-img3.png"
import sc6_icons from "../assets/images/sc6-icons.png"
import bg_sc7 from "../assets/images/bg-sc7.png"
import sc8_img1 from "../assets/images/sc8-img1.png"
import sc8_img2 from "../assets/images/sc8-img2.png"
import sc8_img3 from "../assets/images/sc8-img3.png"
import search_more from "../assets/images/search-more-sc2.png";
import rate_more from "../assets/images/rate-more-sc2.png";
import cmt_more from "../assets/images/cmt-more-sc2.png";
import bg1_sc4 from "../assets/images/sc4-more-img1.png"
import bg2_sc4 from "../assets/images/sc4-more-img2.png"
import bg3_sc4 from "../assets/images/sc4-more-img3.png"
import bg4_sc4 from "../assets/images/sc4-more-img4.png"
import bg5_sc4 from "../assets/images/sc4-more-img5.png"
import bg6_sc4 from "../assets/images/sc4-more-img6.png"
import ct1_sc4 from "../assets/images/sc4-content-img1.png"
import ct2_sc4 from "../assets/images/sc4-content-img2.png"
import ct3_sc4 from "../assets/images/sc4-content-img3.png"
import ct4_sc4 from "../assets/images/sc4-content-img4.png"
import ct5_sc4 from "../assets/images/sc4-content-img5.png"
import ct6_sc4 from "../assets/images/sc4-content-img6.png"
import sc6_more_img1 from "../assets/images/sc6-more-img1.png"
import sc6_more_img2 from "../assets/images/sc6-more-img2.png"
import sc6_more_img3 from "../assets/images/sc6-more-img3.png"
import sc6_more_icons from "../assets/images/sc6-more-icons.png"
import sc8_more_img1 from "../assets/images/sc8-more-img1.png"
import sc8_more_vid2 from "../assets/videos/sc8-more-vid2.mp4"
import sc8_more_img3 from "../assets/images/sc8-more-img3.png"

const Line = () => {
    return (
        <div className="line"></div>
    )
}

const ContainPartSc2 = ({ img, title, content, isVisible, ClosePart }) => {
    if (!isVisible) return null;

    return (
        <div className="ContainPartSc2">
            <IoClose onClick={ClosePart} />
            <div className="ContainPartIMG" data-aos="fade-right">
                <img src={img} data-aos="zoom-in" alt={title} />
            </div>
            <div className="ContentPart" data-aos="fade-left">
                <h3 data-aos="fade-down">{title}</h3>
                <p data-aos="fade-up">{content}</p>
            </div>
        </div>
    );
};

const ContainPartSc4 = ({bg, img, title, content, isVisible, ClosePart }) => {
    if (!isVisible) return null;

    return (
        <div className="ContainPartSc4">
            <img src={bg} data-aos="zoom-in" alt="images" />
            <IoClose onClick={ClosePart} />
            <div className="Container">
                <div className="ContainPartIMG" data-aos="fade-right">
                    <img src={img} data-aos="zoom-in" alt={title} />
                </div>
                <div className="ContentPart" data-aos="fade-left">
                    <h3 data-aos="fade-down">{title}</h3>
                    <p data-aos="fade-up">{content}</p>
                </div>
            </div>
        </div>
    );
};

const ContainPartSc6 = ({ img, title, content, isVisible, ClosePart }) => {
    if (!isVisible) return null;

    return (
        <div className="ContainPartSc6">
            <IoClose onClick={ClosePart} />
            <div className="ContainPartIMG" data-aos="fade-right">
                <img src={img} data-aos="zoom-in" alt={title} />
            </div>
            <div className="ContentPart" data-aos="fade-left">
                <div className="TitlePart" data-aos="fade-down">
                    <img src={sc6_more_icons} alt="icons" />
                    <h3>{title}</h3>
                </div>
                <p data-aos="fade-up">{content}</p>
            </div>
        </div>
    );
};


const ContainPartSc8 = ({vd, bg, title, content, isVisible, ClosePart }) => {
    if (!isVisible) return null;

    return (
        <div className="ContainPartSc8">
            <video loop autoPlay muted data-aos="zoom-in">
                <source src={vd} type="video/mp4" />
            </video>
            <img src={bg} data-aos="zoom-in" alt="images" />
            <IoClose onClick={ClosePart} />
            <div className="Container" data-ao="zoom-in" >
                <h3 data-aos="fade-down">{title}</h3>
                <p data-aos="fade-up">{content}</p>
            </div>
        </div>
    );
};

const Contain = ({link, img, title, item, handleOpenPart }) => {
    return (
        <div className="Contain"  data-aos="fade-up" onClick={() => handleOpenPart(link)}>
            <div className="Contain_IMG">
                <img src={img} alt="search" />
            </div>
            <div className="Content">
                <h3>{title}</h3>
            </div>
            <p>{item}</p>
            <a>Xem Thêm</a>
        </div>
    )
}

const Home = () => {
    const [openPart, setOpenPart] = useState(null); 

    useEffect(() => {
        const savedState = localStorage.getItem("containPartOpen");
        if (savedState) {
            setOpenPart(savedState);
        }
    }, []);

    const handleOpenPart = (part) => {
        setOpenPart(part);
        localStorage.setItem("containPartOpen", part);
        document.body.style.overflow = 'hidden';
    };

    const handleClosePart = () => {
        setOpenPart(null);
        localStorage.setItem("containPartOpen", null);
        document.body.style.overflow = 'scroll';
    };

    return (
        <div>
            <Header />
                <div className="home">
                    <div className="Section_1" >
                        <div className="ContainIMG">
                            <img src={bg1} alt="bg-1" data-aos="fade-down"/>
                        </div>

                        <div className="Container" data-aos="fade-left">
                            <h1>Tìm Nhà Vệ Sinh Nhanh Chóng Với RestroomFinder</h1>
                            <p>Tìm nhà vệ sinh gần bạn dễ dàng với ứng dụng 
                                RestroomFinder – công cụ hữu ích cho người đi du lịch, 
                                người làm việc và cư dân thành phố. Trải nghiệm sự tiện 
                                lợi khi biết chính xác vị trí nhà vệ sinh công cộng ngay 
                                trong tầm tay.</p>

                            <div className="btn">
                                <Link to='/GoogleMap' ><button><h3>Tìm Kiếm Ngay</h3></button></Link>
                                <Link to='/MoreInfo' ><h3 className="More">Xem Thêm</h3></Link>
                            </div>
                        </div>
                    </div>

                    <div className="Section_2" id="Section_2" >
                        <div className="ContainIMG"  data-aos="fade-up">
                            <img src={bg2} alt="bg-2" />
                        </div>
                        <div className="Description" data-aos="fade-down"> 
                            <div className="Content"><h3>TÍNH NĂNG CỦA RESTROOM FINDER</h3></div>
                            <Line/>
                        </div>
                        <div className="Title" data-aos="zoom-in">
                            <h2>Các Tính Năng Tạo Nên Thương Hiệu <br/> Mang Đến Sự Tiện Ích Cho Người Dùng</h2>
                        </div>
                        <div className="Container">
                            <div className="Contain" data-aos="fade-right" onClick={() => handleOpenPart("search")}>
                                <div className="Contain_IMG">
                                    <img src={search} alt="search" />
                                </div>
                                <h3>Tìm Kiếm <br/>
                                Nhanh Chóng</h3>
                                <p>Ứng dụng được tích hợp AI với khả năng tìm kiếm nhanh chóng hiệu quả</p>
                            </div>

                            <div className="Contain" data-aos="fade-up" onClick={() => handleOpenPart("rate")}>
                                <div className="Contain_IMG">
                                    <img src={rate} alt="rate" />
                                </div>
                                <h3>Đánh Giá <br/>
                                Người Dùng</h3>
                                <p>Cho phép người dùng đánh giá và lựa chọn từ các đánh giá</p>
                            </div>

                            <div className="Contain" data-aos="fade-left" onClick={() => handleOpenPart("cmt")}>
                                <div className="Contain_IMG">
                                    <img src={cmt} alt="cmt" />
                                </div>
                                <h3>Góp Ý <br/>
                                Cải Thiện</h3>
                                <p>Cải thiện hệ thống từ các đánh giá từ người dùng</p>
                            </div>
                        </div>
                    </div>

                    <ContainPartSc2
                    img={search_more}
                    title="Tìm Kiếm Nhanh Chóng"
                    content="Sản phẩm của chúng tôi không chỉ là một ứng dụng tìm nhà vệ sinh thông thường mà còn được tích hợp các công nghệ định vị, hiển thị vị trí theo thời gian thực và đề xuất các nhà vệ sinh gần nhất dựa trên vị trí của người dùng. Qua đó, RestroomFinder đảm bảo việc sử dụng dễ dàng và hiệu quả."
                    isVisible={openPart === "search"}
                    ClosePart={handleClosePart}
                    />

                    <ContainPartSc2
                        img={rate_more}
                        title="Đánh Giá Người Dùng"
                        content="Tính năng này giúp cộng đồng dễ dàng chọn lựa nhà vệ sinh phù hợp nhất dựa trên trải nghiệm thực tế của người dùng trước đó. Bạn có thể xem các đánh giá chi tiết về độ sạch sẽ, tiện nghi và an toàn của từng địa điểm. Chúng tôi hy vọng tính năng đánh giá này sẽ góp phần nâng cao chất lượng dịch vụ và tạo nên một môi trường tiện lợi, thân thiện cho mọi người."
                        isVisible={openPart === "rate"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc2
                        img={cmt_more}
                        title="Góp Ý Cải Thiện"
                        content="Chúng tôi luôn lắng nghe ý kiến của người dùng để phát triển ứng dụng ngày càng hoàn thiện hơn. Bạn có thể dễ dàng gửi phản hồi và góp ý trực tiếp qua ứng dụng để chúng tôi có thể xem xét và đưa ra các cải tiến phù hợp. Chúng tôi tin rằng sự đóng góp từ cộng đồng sẽ giúp RestroomFinder trở thành công cụ hữu ích và đáng tin cậy hơn cho mọi người."
                        isVisible={openPart === "cmt"}
                        ClosePart={handleClosePart}
                    />

                    <div className="Section_3" id="Section_3">
                        <div className="Container">
                            <div className="Contain_Right" data-aos="fade-right">
                                <img src={img_sc3} alt="images" />
                            </div>

                            <div className="Contain_Left" data-aos="fade-left" >
                                <div className="Top" data-aos="fade-down">
                                    <div className="Description">
                                        <div className="Content"><h3>MỤC TIÊU CỦA RESTROOM FINDER</h3></div>
                                        <Line/>
                                    </div>
                                    <div className="Title">
                                        <h2>Mang Đến Cuộc Sống Tốt Hơn <br/>
                                        Góp Phần Thúc Đẩy Nền Kinh Tế</h2>
                                    </div>
                                    <div className="Contain">
                                        <p>Tìm nhà vệ sinh gần bạn dễ dàng với ứng dụng RestroomFinder – công cụ hữu ích cho người đi du lịch, người làm việc và cư dân thành phố. Trải nghiệm sự tiện lợi khi biết chính xác vị trí nhà vệ sinh công cộng ngay trong tầm tay.</p>
                                    </div>
                                </div>

                                <div className="Bottom" data-aos="fade-up">
                                    <img src={number_sc3} alt="images" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Section_4" id="Section_4">
                        <div className="Description" data-aos="fade-down">
                            <div className="Content"><h3>TRÁCH NHIỆM CỦA CHÚNG TÔI ?</h3></div>
                            <Line/>
                        </div>
                        <div className="Title" data-aos="fade-down">
                            <h2>Bảo Vệ Môi Trường <br/>
                            Cải Thiện Môi Trường Sống</h2>
                        </div>
                        <div className="Container">
                            <Contain 
                                link="ct1"
                                img={sc4_img1}
                                title="Xanh - Sạch - Đẹp"
                                item="Các chương trình vì cộng đồng nhằm lan tỏa thông điệp Xanh - Sạch - Đẹp"
                                handleOpenPart={handleOpenPart} />
                            <Contain
                            link="ct2"
                            img={sc4_img2}
                            title="Ý Thức Xanh"
                            item="Hướng tới một Hành Tinh Xanh, mang lại cuộc sống tươi tót hơn cho mọi người" 
                            handleOpenPart={handleOpenPart} />
                             <Contain 
                             link="ct3"
                            img={sc4_img3}
                            title="Thành Phố Xanh"
                            item="Cải thiện thành phố với hàng cây xanh và không khí trong lành" 
                            handleOpenPart={handleOpenPart} />
                             <Contain 
                             link="ct4"
                            img={sc4_img4}
                            title="Không Khí Xanh"
                            item="Cải thiện môi trường sống, giảm bớt cái nóng và giảm bớt nguy cơ nóng lên toàn cầu" 
                            handleOpenPart={handleOpenPart} />
                             <Contain 
                             link="ct5"
                            img={sc4_img5}
                            title="Mầm Non Tương Lai"
                            item="Môi trường sống xanh giúp trẻ phát triển tốt hơn và khỏe mạnh hơn" 
                            handleOpenPart={handleOpenPart} />
                             <Contain
                             link="ct6"
                            img={sc4_img6}
                            title="Trao Yêu Thương"
                            item="Mang lại tình yêu cho những mảnh đời bất hạnh. Lan tỏa tình yêu đến mọi người" 
                            handleOpenPart={handleOpenPart} />
                        </div>
                    </div>

                    <ContainPartSc4
                        bg={bg1_sc4}
                        img={ct1_sc4}
                        title="Xanh - Sạch - Đẹp"
                        content="RestroomFinder không chỉ là công cụ tìm kiếm nhà vệ sinh công cộng mà còn đóng góp vào sứ mệnh bảo vệ môi trường. 

                                Bằng cách hỗ trợ người dân dễ dàng tiếp cận nhà vệ sinh công cộng, chúng tôi mong muốn khuyến khích việc sử dụng các tiện ích công cộng, giảm thiểu xả rác bừa bãi và nâng cao ý thức bảo vệ môi trường. 

                                RestroomFinder cam kết đồng hành cùng cộng đồng hướng đến một hành tinh xanh, sạch hơn, nhằm mang lại cuộc sống tươi tắn và lành mạnh cho mọi người."
                        isVisible={openPart === "ct1"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc4
                        bg={bg2_sc4}
                        img={ct2_sc4}
                        title="Ý Thức Xanh"
                        content="RestroomFinder không ngừng tham gia các chương trình vì cộng đồng để lan tỏa thông điệp Xanh - Sạch - Đẹp.

                                Chúng tôi phối hợp với các tổ chức xã hội và chính quyền địa phương trong các chiến dịch làm sạch môi trường, bảo vệ nguồn nước, và nâng cao ý thức giữ gìn vệ sinh công cộng. 

                                Những hoạt động này không chỉ tạo nên một môi trường sống tốt hơn mà còn góp phần giáo dục cộng đồng về trách nhiệm bảo vệ hành tinh xanh. "
                        isVisible={openPart === "ct2"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc4
                        bg={bg3_sc4}
                        img={ct3_sc4}
                        title="Thành Phố Xanh"
                        content="RestroomFinder không chỉ tập trung vào tiện ích công cộng mà còn hướng tới mục tiêu cải thiện chất lượng sống trong các thành phố.

                                Chúng tôi tin rằng một thành phố xanh với hàng cây rợp bóng và không khí trong lành sẽ mang lại môi trường sống tốt hơn cho mọi người. 

                                RestroomFinder hỗ trợ các chương trình trồng cây, tăng cường mảng xanh và xây dựng hệ thống nhà vệ sinh thân thiện với môi trường nhằm giảm thiểu tác động đến thiên nhiên. "
                        isVisible={openPart === "ct3"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc4
                        bg={bg4_sc4}
                        img={ct4_sc4}
                        title="Không Khí Xanh"
                        content="RestroomFinder còn hướng đến sứ mệnh bảo vệ môi trường sống. 

                                Chúng tôi tham gia các chương trình và sáng kiến nhằm tăng cường mảng xanh đô thị, giúp hạ nhiệt bề mặt đô thị và giảm thiểu ô nhiễm không khí. 

                                Bằng cách trồng thêm cây xanh và khuyến khích sử dụng nhà vệ sinh công cộng thay vì các phương pháp vệ sinh không an toàn cho môi trường, RestroomFinder đóng góp vào việc giảm thiểu hiệu ứng nhà kính và nguy cơ nóng lên toàn cầu."
                        isVisible={openPart === "ct4"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc4
                        bg={bg5_sc4}
                        img={ct5_sc4}
                        title="Mầm Non Tương Lai"
                        content="Một môi trường sống xanh đóng vai trò quan trọng trong sự phát triển toàn diện và sức khỏe của trẻ em. 

                                RestroomFinder không chỉ tập trung vào việc tạo thuận lợi cho người dùng mà còn cam kết xây dựng một cộng đồng xanh, sạch và an toàn cho trẻ nhỏ. 

                                Không gian xanh giúp trẻ em tiếp xúc với thiên nhiên nhiều hơn, tạo nên lối sống lành mạnh, giảm căng thẳng và hỗ trợ sự phát triển thể chất và tinh thần. "
                        isVisible={openPart === "ct5"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc4
                        bg={bg6_sc4}
                        img={ct6_sc4}
                        title="Trao Yêu Thương"
                        content="Một môi trường sống xanh đóng vai trò quan trọng trong sự phát triển toàn diện và sức khỏe của trẻ em. 

                                RestroomFinder không chỉ tập trung vào việc tạo thuận lợi cho người dùng mà còn cam kết xây dựng một cộng đồng xanh, sạch và an toàn cho trẻ nhỏ. 

                                Không gian xanh giúp trẻ em tiếp xúc với thiên nhiên nhiều hơn, tạo nên lối sống lành mạnh, giảm căng thẳng và hỗ trợ sự phát triển thể chất và tinh thần. "
                        isVisible={openPart === "ct6"}
                        ClosePart={handleClosePart}
                    />

                    <div className="Section_5"  data-aos="zoom-in">
                        <video autoPlay muted loop>
                            <source src={sc5_vid} type="video/mp4" />
                        </video>
                    </div>

                    <div className="Section_6" id="Section_6">
                        <div className="Description"  data-aos="fade-down">
                            <div className="Content"><h3>SỰ MONG MUỐN CỦA MỌI NGƯỜI</h3></div>
                            <Line/>
                        </div>
                        <div className="Title"  data-aos="zoom-in">
                            <h2>HÃY LẮNG NGHE <br/>
                            LỜI CHIA SẺ DƯỚI ĐÂY</h2>
                        </div>
                        <div className="Container"  data-aos="fade-up">  
                            <div  className="Contain"  data-aos="fade-right"  onClick={() => handleOpenPart("people1")}>
                                <div className="Contain_IMG">
                                    <img src={sc6_img1} alt="images" />
                                </div>
                                <div className="Content">
                                <h3>Trần Minh Quang</h3>
                                <img src={sc6_icons} alt="images" />
                                <p>"Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."</p>
                                </div>
                            </div>

                            <div  className="Contain"  data-aos="fade-up"  onClick={() => handleOpenPart("people2")}>
                                <div className="Contain_IMG">
                                    <img src={sc6_img2} alt="images" />
                                </div>
                                <div className="Content">
                                <h3>Võ Thị Mỹ Đặng</h3>
                                <img src={sc6_icons} alt="images" />
                                <p>"Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."</p>
                                </div>
                            </div>
                            
                            <div className="Contain"  data-aos="fade-left"  onClick={() => handleOpenPart("people3")}>
                                <div className="Contain_IMG">
                                    <img src={sc6_img3} alt="images" />
                                </div>
                                <div className="Content">
                                <h3>Hồ Duy Vũ</h3>
                                <img src={sc6_icons} alt="images" />
                                <p>"Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContainPartSc6
                    img={sc6_more_img1}
                    title="Trần Minh Hiếu"
                    content="Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."
                    isVisible={openPart === "people1"}
                    ClosePart={handleClosePart}
                    />

                    <ContainPartSc6
                        img={sc6_more_img2}
                        title="Phạm Bảo Khang"
                        content="Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."
                        isVisible={openPart === "people2"}
                        ClosePart={handleClosePart}
                    />

                    <ContainPartSc6
                        img={sc6_more_img3}
                        title="Đặng Thành An"
                        content="Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn! Hãy bắt đầu từ việc không xả rác bừa bãi và tái chế những gì có thể để bảo vệ môi trường cho thế hệ sau."
                        isVisible={openPart === "people3"}
                        ClosePart={handleClosePart}
                    />

                    <div className="Section_7" id="Section_7">
                        <div className="ContainIMG"  data-aos="fade-up">
                            <img src={bg_sc7} alt="bg_sc7" />
                        </div>

                        <div className="Description"  data-aos="fade-down">
                            <div className="Content"><h3>BẠN ĐANG CÓ KHÓ KHĂN ?</h3></div>
                            <Line/>
                        </div>
                        <div className="Title"  data-aos="zoom-in">
                            <h2>HÃY LIÊN HỆ TÔI NẾU <br/>
                            CẦN GIÚP ĐỠ</h2>
                        </div>

                        <div className="Container"  data-aos="fade-up">
                            <input type="email" placeholder="Vui lòng điền Email của bạn"></input>
                            <button><h3>Gửi</h3></button>
                        </div>
                    </div>

                    <div className="Section_8">
                        <div className="Description"  data-aos="fade-down">
                            <div className="Content"><h3>TƯƠNG LAI HƯỚNG TỚI</h3></div>
                            <Line/>
                        </div>
                        <div className="Title"  data-aos="zoom-in">
                            <h2>NHỮNG ĐIỀU XẢY RA <br/>
                            TRONG TƯƠNG LAI</h2>
                        </div>
                        <div className="Container"  data-aos="zoom-in">
                            <div className="Contain"  data-aos="fade-up" onClick={() => handleOpenPart("Sc8Part1")}>
                                <div className="Contain_IMG">
                                    <img src={sc8_img1} alt="search" />
                                </div>
                                <div className="Content">
                                    <h3>Mở rộng ra nhiều thành phố và quốc gia</h3>
                                </div>
                            </div>

                            <div className="Contain"  data-aos="fade-up" onClick={() => handleOpenPart("Sc8Part2")}>
                                <div className="Contain_IMG">
                                    <img src={sc8_img2} alt="search" />
                                </div>
                                <div className="Content">
                                    <h3>Tích hợp công nghệ tiên tiến</h3>
                                </div>
                            </div>

                            <div className="Contain"  data-aos="fade-up" onClick={() => handleOpenPart("Sc8Part3")}>
                                <div className="Contain_IMG">
                                    <img src={sc8_img3} alt="search" />
                                </div>
                                <div className="Content">
                                    <h3>Thực hiện các sáng kiến vì cộng đồng</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <ContainPartSc8   
                    bg={sc8_more_img1}
                    title="Mở rộng ra nhiều thành phố và quốc gia"
                    content="RestroomFinder sẽ mở rộng phạm vi hoạt động không chỉ ở TP. Hồ Chí Minh mà còn đến các thành phố lớn khác trong nước và quốc tế. Điều này giúp người dân và du khách dễ dàng tìm kiếm các nhà vệ sinh công cộng sạch sẽ và tiện lợi hơn khi di chuyển."
                    isVisible={openPart === "Sc8Part1"}
                    ClosePart={handleClosePart} />

                    <ContainPartSc8
                    vd={sc8_more_vid2}
                    title="Mở rộng ra nhiều thành phố và quốc gia"
                    content="RestroomFinder sẽ mở rộng phạm vi hoạt động không chỉ ở TP. Hồ Chí Minh mà còn đến các thành phố lớn khác trong nước và quốc tế. Điều này giúp người dân và du khách dễ dàng tìm kiếm các nhà vệ sinh công cộng sạch sẽ và tiện lợi hơn khi di chuyển."
                    isVisible={openPart === "Sc8Part2"}
                    ClosePart={handleClosePart} />

                    <ContainPartSc8
                    bg={sc8_more_img3}
                    title="Mở rộng ra nhiều thành phố và quốc gia"
                    content="RestroomFinder sẽ mở rộng phạm vi hoạt động không chỉ ở TP. Hồ Chí Minh mà còn đến các thành phố lớn khác trong nước và quốc tế. Điều này giúp người dân và du khách dễ dàng tìm kiếm các nhà vệ sinh công cộng sạch sẽ và tiện lợi hơn khi di chuyển."
                    isVisible={openPart === "Sc8Part3"}
                    ClosePart={handleClosePart} />
                </div>

                <div className="Section9_btn">
                    <button className="Grap">
                        <RiEBikeFill/>
                    </button>

                    <button className="Pharma">
                        <MdLocalPharmacy/>
                    </button>

                    <button className="Chatbot">
                        <IoMdChatbubbles/>
                    </button>
                </div>
            <Footer />
        </div>
    )
}

export default Home;