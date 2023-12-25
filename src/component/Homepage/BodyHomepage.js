import Carousel from "../carousel/carousel";
import CarouselP from "../carousel/carouselProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faLocationDot from '@fortawesome/free-solid-svg-icons'
const bodyhomepage = () => {
  return (
    <>
      <section className="cssSection" data-aos="fade-up" data-aos-duration="2000">
        <div class="row backgroundRowBody"  style={{ height: "100%" }}>
          <div style={{ display: "flex" }} class="col-xs-12 col-sm-12 col-md-6">
            <div className="Bodyleft-content">
              <div className="Bodyleft-content-title"  data-aos="zoom-in" data-aos-duration="2500">About us</div>
              <p className="Bodyleft-content-content"  data-aos="zoom-in" data-aos-duration="2500">
                Với tên gọi 'Self Photo Studio', chúng tôi dự định ra mắt thương
                hiệu của riêng mình và xây dựng các chương trình cũng như hệ
                thống máy chủ cần thiết cho hoạt động nhằm mở rộng ra nước ngoài
                bằng cách kết hợp nhiều nội dung Hàn Quốc với văn hóa trong nước
                hiện đang dẫn đầu xu hướng của thế hệ MZ.
              </p>
              <div className="Bodyleft-content-content"  data-aos="zoom-in" data-aos-duration="2500">
                <button type="button" class="btn btn-warning mt-1">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 bodyRight-Img" data-aos="slide-left" data-aos-duration="2500"></div>
        </div>
      </section>
      <section className="cssSection">
            <h1 className="Bodyleft-content-title" style={{marginTop:"5%",textAlign:"center",marginBottom:"5%"}}>Một số kiểu chụp</h1>
        <Carousel></Carousel>
      </section>
      
      <section style={{marginBottom:"10%",padding:"0em"}} className="cssSection cssSectionBottom" data-aos="slide-up"  data-aos-duration="2000" >
      <h1 className="Bodyleft-content-title" style={{marginTop:"5%",textAlign:"center",marginBottom:"5%"}}>Các chi nhánh PHOTO TIME</h1>
      
        <div class="row backgroundRowBody backgroundRowBodyBottom"  style={{ height: "100%" }}>
        <div class="col-xs-12 col-sm-12 col-md-6 bodyBottom-Img" data-aos="zoom-in-up" data-aos-duration="3000"></div>
          <div style={{ display: "flex" }} class="col-xs-12 col-sm-12 col-md-6">
            <div className="Bodyleft-content">
              <div className="Bodyleft-content-title" data-aos="flip-up" data-aos-duration="2500">Đến với PHOTO TIME</div>
              <p className="Bodyleft-content-content" data-aos="flip-up" data-aos-duration="2500">
         
              <br></br>
                <br></br>🏠 Tất cả cửa hàng của tụi mình đều được trang bị vô vàn phụ kiện, trang phục và không gian đẹp mắt để bạn tha hồ check-in sống ảo. Hơn nữa, chi phí cho mỗi lần chụp ảnh tại PHOTO TIME lại rất "hạt dẻ", phù hợp với học sinh sinh viên nè!
              </p>
           
            </div>
          </div>
    
        </div>
      </section>

      <section style={{marginTop:"10%"}} className="cssSection">
            <h1 id="pproduct" className="Bodyleft-content-title" style={{marginTop:"5%",textAlign:"center",marginBottom:"5%"}}>Sản phẩm</h1>
        <CarouselP></CarouselP>
      </section>

      <section >
      <div style={{marginTop:"20%"}} className="Bodyleft-content">
              <div style={{textAlign:"center"}} className="Bodyleft-content-title">
                Position</div>
              <p style={{textAlign:"center",fontSize:".8em"}} className="Bodyleft-content-content">
              39 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh
              </p>
        </div>
        <div style={{display:"flex",justifyContent:"center",width:"100%"}} className="cssGoogleMap">
        
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1126483903877!2d106.71300847583848!3d10.80268355870719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a3eb5944ef%3A0x5b93fac1240a78ca!2zMzkgTmd1eeG7hW4gR2lhIFRyw60sIFBoxrDhu51uZyAyNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1703314912517!5m2!1sen!2s" width="600" height="450" style={{border:0,width:"90%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
     
        </div>
     
      </section>

      
    </>
  );
};
export default bodyhomepage;
