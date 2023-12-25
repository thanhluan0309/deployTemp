import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from '../../img/Time-PNG-HD.png'

import Imgp1 from '../../imgProduct/p1.jpg'
import Imgp2 from '../../imgProduct/p2.jpg'
import Imgp3 from '../../imgProduct/p3.jpg'
import Imgp4 from '../../imgProduct/p4 (1).jpg'
import Imgp5 from '../../imgProduct/p4 (2).jpg'
import Imgp6 from '../../imgProduct/p4 (3).jpg'
import Imgp7 from '../../imgProduct/p5 (1).jpg'
import Imgp8 from '../../imgProduct/p5 (2).jpg'
import Imgp9 from '../../imgProduct/p5 (3).jpg'
import Imgp10 from '../../imgProduct/p5 (5).jpg'

const imagePaths = [
    Imgp1,
    Imgp2,
    Imgp3,
    Imgp4,
    Imgp5,
    Imgp6,
    Imgp7,
    Imgp8,
    Imgp9,
    Imgp10,
    // Thêm các đường dẫn hình ảnh khác nếu cần
  ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const carousel = () => {
 
  return (
    <>
    
    <Carousel 
    swipeable={true}
    draggable={false}
    showDots={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    containerClass="carousel-container"
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    itemClass="carousel-item-padding-40-px"
    responsive={responsive}>
        {imagePaths.map((path, index) => (
               <div >
                <img key={index} width={375} height={562} src={path} alt={`Image ${index + 1}`} />
                </div>
        ))}
       

  </Carousel>
  </>
  );
};
export default carousel;
