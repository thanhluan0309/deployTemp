import React, { useEffect, useState } from "react";
import Footer from "../../footer/footer";
import Navbar from "../../navbar/navbar";
import Img from "../../../imgProduct/p1.jpg";
import Img1 from "../../../imgProduct/p2.jpg";
import Img2 from "../../../imgProduct/p3.jpg";
import Img3 from "../../../imgProduct/p4.jpg";
import Img4 from "../../../imgProduct/p5.jpg";
import Img5 from "../../../imgProduct/p6.jpg";
import Img6 from "../../../imgProduct/p7.jpg";
import Img7 from "../../../imgProduct/p8.jpg";
import Img8 from "../../../imgProduct/p9.jpg";
import Img9 from "../../../imgProduct/p5 (5).jpg";
import Img10 from "../../../imgProduct/p5 (6).jpg";
import Img11 from "../../../imgProduct/p5 (7).jpg";
import Img12 from "../../../imgProduct/p5 (8).jpg";

// Example items, to simulate fetching from another resources.

const ImageGallery = () => {
  // Danh sách hình ảnh
  const imageArray = [
    Img,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img8,
    Img7,
    Img9,
    Img10,
    Img11,
    Img12,
    // Thêm các đường dẫn hình ảnh khác nếu cần
  ];

  // Số hình ảnh mỗi trang
  const imagesPerPage = 5;

  // State cho trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán chỉ mục bắt đầu và kết thúc của danh sách hiện tại
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Danh sách hình ảnh hiện tại
  const currentImages = imageArray.slice(startIndex, endIndex);

  // Tăng trang
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Giảm trang
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <>
      <Navbar></Navbar>
     <section className="cssbgProduct">
        <div>    .</div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span> Trang {currentPage} </span>
          <button onClick={nextPage} disabled={endIndex >= imageArray.length}>
            Next
          </button>
        </div>
        
      
     
    <div style={{ display: "flex", marginTop: "2%" ,marginRight:"10%"}}>
        <div style={{ marginLeft: "10%", width: "100%" }}>
          {/* Hiển thị danh sách hình ảnh hiện tại */}
          {currentImages.map((path, index) => (
            <img
            style={{padding:"1%"}}
              key={index}
              src={path}
              width={375}
              height={562}
              alt={`Image ${index + 1}`}
            />
          ))}

          {/* Nút phân trang */}
        </div>
      </div>
      </section>
    <Footer></Footer>
    </>
  );
};
export default ImageGallery;
