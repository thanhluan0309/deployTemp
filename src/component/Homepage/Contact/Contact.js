import Navbar from "../../navbar/navbar";
const pageContact = () => {
  return (
    <>
    
      <Navbar></Navbar>
      <div style={{display:"flex",marginLeft:"15px",marginRight:"15px",backgroundColor:"aliceblue"}} class="row">
      <div style={{ width: "100%" ,padding:"3% 0% 8% 0%",fontSize:"1.5em"}} className="Bodyleft-content">
            <div
              style={{ textAlign: "center" }}
              className="Bodyleft-content-title"
            >
              {" "}
              Contact us
            </div>
            <p
              style={{ textAlign: "center" }}
              className="Bodyleft-content-content"
            >
              Feel free to contact us for further information about company or career opportunities.
            </p>
          </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4  p-2 text-dark">
          <div style={{ width: "100%" }} className="Bodyleft-content" data-aos="fade-down" data-aos-duration="1000">
            <div
              style={{ textAlign: "center" }}
              className="Bodyleft-content-title"
            >
              {" "}
              Call us
            </div>
            <p
              style={{ textAlign: "center" }}
              className="Bodyleft-content-content"
            >
              Tel: 
036 935 7270<br></br>
              Fax: 
036 935 7270
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4  p-2">
          <div style={{ width: "100%" }} className="Bodyleft-content" data-aos="fade-down" data-aos-duration="2000">
            <div
              style={{ textAlign: "center" }}
              className="Bodyleft-content-title"
            >
              {" "}
              Meet us
            </div>


            <p
              style={{ textAlign: "center" }}
              className="Bodyleft-content-content"
            >
             39 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 p-2 rounded ">
          <div style={{ width: "100%" }} className="Bodyleft-content" data-aos="fade-down" data-aos-duration="2500">
            <div
              style={{ textAlign: "center" }}
              className="Bodyleft-content-title"
            >
              {" "}
              Email us
            </div>
            <p
              style={{ textAlign: "center" }}
              className="Bodyleft-content-content"
            >
              Email : 
phototime1974@gmail.com
            </p>
          </div>{" "}
        </div>
      </div>

      <section >
    
        <div style={{display:"flex",marginTop:"10%",justifyContent:"center",width:"100%"}} className="cssGoogleMap">
        
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1126483903877!2d106.71300847583848!3d10.80268355870719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a3eb5944ef%3A0x5b93fac1240a78ca!2zMzkgTmd1eeG7hW4gR2lhIFRyw60sIFBoxrDhu51uZyAyNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1703314912517!5m2!1sen!2s" width="600" height="450" style={{border:0,width:"90%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
     
        </div>
     
      </section>
    </>
  );
};
export default pageContact;
