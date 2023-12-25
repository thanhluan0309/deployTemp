import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from '../../img/Time-PNG-HD.png'

import Imgf1 from '../../imgframe/event4C1.png'
import Imgf2 from '../../imgframe/event4C2.png'
import Imgf3 from '../../imgframe/event4C3.png'
import Imgf4 from '../../imgframe/event4C4.png'
import Imgf5 from '../../imgframe/event4C5.png'
import Imgf6 from '../../imgframe/event4C6.png'
import Imgf7 from '../../imgframe/event4C7.png'
import Imgf8 from '../../imgframe/event4C8.png'
import Imgf9 from '../../imgframe/event4C9.png'
import Imgf10 from '../../imgframe/event4C10.png'
import Imgf11 from '../../imgframe/event4C11.png'
import Imgf12 from '../../imgframe/event4C12.png'
import Imgf13 from '../../imgframe/event4C13.png'
import Imgf14 from '../../imgframe/event4C14.png'
import Imgf15 from '../../imgframe/event4C15.png'
const imagePaths = [
    Imgf1,
    Imgf2,
    Imgf3,
    Imgf4,
    Imgf5,
    Imgf6,
    Imgf7,
    Imgf8,
    Imgf9,
    Imgf10,
    Imgf11,
    Imgf12,
    Imgf13,
    Imgf14,
    Imgf15
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
