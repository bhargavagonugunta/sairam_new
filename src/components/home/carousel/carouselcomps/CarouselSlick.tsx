import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselA from './CarouselA';
import CarouselB from './CarouselB';
import CarouselC from './CarouselC';
import CarouselD from './CarouselD';
import { Leftdouble } from '../../../../assets/svgs/Leftdouble';
import { Rightdouble } from '../../../../assets/svgs/Rightdouble';

const CarouselSlick = () => {
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const LeftdoubleButton = () => (
    <button className='w-10 absolute top-1/2 transform -translate-y-1/2 left-2' onClick={() => sliderRef.current.slickPrev()}>
      <Leftdouble />
    </button>
  );

  const RightdoubleButton = () => (
    <button className='w-10 absolute top-1/2 transform -translate-y-1/2 right-2' onClick={() => sliderRef.current.slickNext()}>
      <Rightdouble />
    </button>
  );

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const CustomDot = ({ index, onClick, active }) => (
    <button
      className={`slick-dot ${active ? 'active' : ''} cursor-pointer`}
      onClick={() => handleDotClick(index)}
      
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    customPaging: (i) => <CustomDot index={i} active={i === 0} />,
  };

  return (
    <div className='relative max-w-screen overflow-hidden' onMouseEnter={() => sliderRef.current.slickPause()} onMouseLeave={() => sliderRef.current.slickPlay()}>
      
      <Slider {...settings} ref={sliderRef} className='h-full'>
        <div>
          <CarouselA />
        </div>
        <div>
          <CarouselB />
        </div>
        <div>
          <CarouselD />
        </div>
      </Slider>
      {/* <RightdoubleButton /> */}
      
    </div>
  );
};

export default CarouselSlick;


// import React, { useRef, useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import CarouselA from './CarouselA';
// import CarouselB from './CarouselB';
// import CarouselC from './CarouselC';
// import CarouselD from './CarouselD';
// import { Leftdouble } from '../../../../assets/svgs/Leftdouble';
// import { Rightdouble } from '../../../../assets/svgs/Rightdouble';

// const CarouselSlick = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!document.hidden) { // Check if the tab is visible
//         sliderRef.current.slickNext();
//       }
//     }, 5000); // Adjust the autoplay speed as needed
//     return () => clearInterval(interval);
//   }, []);

//   const LeftdoubleButton = () => (
//     <button className='absolute top-1/2 transform -translate-y-1/2 left-0' onClick={() => sliderRef.current.slickPrev()}>
//       <Leftdouble />
//     </button>
//   );

//   const RightdoubleButton = () => (
//     <button className='absolute top-1/2 transform -translate-y-1/2 right-0' onClick={() => sliderRef.current.slickNext()}>
//       <Rightdouble />
//     </button>
//   );

//   const handleDotClick = (index) => {
//     sliderRef.current.slickGoTo(index);
//     setCurrentSlide(index);
//   };

//   const CustomDot = ({ index }) => (
//     <button
//       className={`slick-dot ${currentSlide === index ? 'active' : ''}`}
//       onClick={() => handleDotClick(index)}
//     />
//   );

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000, // Adjust the autoplay speed as needed
//     pauseOnHover: true,
//     nextArrow: <LeftdoubleButton />,
//     prevArrow: <RightdoubleButton />,
//     customPaging: (i) => <CustomDot index={i} />,
//     appendDots: (dots) => (
//       <div
//         style={{
//           borderRadius: "10px",
//           padding: "10px",
//           textAlign: "center",
          
//         }}
//       >
//         {dots}
//       </div>
//     ),
//   };

//   return (
//     <div className='relative' onMouseEnter={() => sliderRef.current.slickPause()} onMouseLeave={() => sliderRef.current.slickPlay()}>
//       <LeftdoubleButton />
//       <Slider {...settings} ref={sliderRef} className='h-full'>
//         <div><CarouselA /></div>
//         <div><CarouselB /></div>
//         <div><CarouselC /></div>
//         <div><CarouselD /></div>
//       </Slider>
//       <RightdoubleButton />
//     </div>
//   );
// };

// export default CarouselSlick;
