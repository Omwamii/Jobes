// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Header Section */}
//       <header className="header">
//         <div className="container">
//           <h1>Jobes Solutions</h1>
//           <p>Your trusted wholesale diaper supplier with free delivery within Eldoret.</p>
//           <a href="#products" className="cta-button">Shop Now</a>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="about">
//         <div className="container">
//           <h2>About Us</h2>
//           <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers at affordable prices. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="products">
//         <div className="container">
//           <h2>Our Products</h2>
//           <div className="product-list">
//             <div className="product-item">
//               <h3>Children's Diapers</h3>
//               <p>Comfortable and absorbent diapers for children of all ages.</p>
//             </div>
//             <div className="product-item">
//               <h3>Adult Diapers</h3>
//               <p>High-quality adult diapers designed for maximum comfort and protection.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <div className="container">
//           <h2>What Our Customers Say</h2>
//           <div className="testimonial-list">
//             <div className="testimonial-item">
//               <p>"Jobes Solutions delivers exactly what they promise! Excellent quality and timely delivery."</p>
//               <span>- Jane Doe</span>
//             </div>
//             <div className="testimonial-item">
//               <p>"Affordable prices and great customer service. Highly recommend them!"</p>
//               <span>- John Smith</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta">
//         <div className="container">
//           <h2>Ready to Order?</h2>
//           <p>Contact us today to place your order and enjoy free delivery within Eldoret!</p>
//           <a href="#contact" className="cta-button">Contact Us</a>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import Slider from "react-slick";

// const LandingPage = () => {
//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="landing-page">

//       {/* Header Section */}
//       <header className="header">
//         <div className="container">
//           <h1>Jobes Solutions</h1>
//           <p>Your trusted wholesale and retail diaper supply & delivery service</p>
//           <a href="#products" className="cta-button">Shop Now</a>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="about">
//         <div className="container">
//           <h2>About Us</h2>
//           <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers at affordable prices. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="products">
//         <div className="container">
//           <h2>Our Products</h2>
//           <div className="product-list">
//             <div className="product-item">
//               <h3>Children's Diapers</h3>
//               <p>Comfortable and absorbent diapers for children of all ages.</p>
//             </div>
//             <div className="product-item">
//               <h3>Adult Diapers</h3>
//               <p>High-quality adult diapers designed for maximum comfort and protection.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <div className="container">
//           <h2>What Our Customers Say</h2>
//           <Slider {...testimonialSettings}>
//             <div className="testimonial-item">
//               <p>"Jobes Solutions delivers exactly what they promise! Excellent quality and timely delivery."</p>
//               <span>- Frida Ambani</span>
//             </div>
//             <div className="testimonial-item">
//               <p>"Affordable prices and great customer service. Highly recommend them!"</p>
//               <span>- Jane Njeri</span>
//             </div>
//             <div className="testimonial-item">
//               <p>"Fantastic products and quick delivery! I'll definitely order again."</p>
//               <span>- Mary Moraa</span>
//             </div>
//           </Slider>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta">
//         <div className="container">
//           <h2>Ready to Order?</h2>
//           <p>Contact us today to place your order and enjoy free delivery within Eldoret!</p>
//           <a href="#contact" className="cta-button">Contact Us</a>
//         </div>
//       </section>

//        {/* Footer Section */}
//        <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
//           <div className="social-icons">
//             <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-whatsapp"></i>
//             </a>
//             <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="tel:yourphonenumber">
//               <i className="fas fa-phone"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import BatchArrivalGif from "../assets/gifs/offload_batch.mp4"
// import PackageDeliveryGif from "../assets/gifs/delivering_package_on_road.mp4"
// import DeliveryAssuranceGif from "../assets/gifs/stay_home_we_deliver.mp4"


// const LandingPage = () => {
//   const gifs = [BatchArrivalGif, PackageDeliveryGif, DeliveryAssuranceGif];
//   const [currentGifIndex, setCurrentGifIndex] = useState(0);
// //   const gifDuration = 5000;

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
// //     }, gifDuration);

// //     return () => clearTimeout(timer);
// //   }, [currentGifIndex, gifs.length]);

//   const switchToNextVideo = () => {
//     console.log('video has ended');
//     setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
//   }

//   const testimonialSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="landing-page">
//       {/* Header Section */}
//       <div className="header-videos">
//         <video key={currentGifIndex} autoPlay muted className="videoTag" onEnded={switchToNextVideo} preload="auto">
//             <source src={gifs[currentGifIndex]} type="video/mp4"/>
//         </video>
//       </div>
//       <header className="header">
//         <div className="container">
//           <h1>Jobes Solutions</h1>
//           <p>Your trusted wholesale and retail diaper supply & delivery service</p>
//           <a href="#products" className="cta-button">Shop Now</a>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="about">
//         <div className="container">
//           <h2>About Us</h2>
//           <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers at affordable prices. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="products">
//         <div className="container">
//           <h2>Our Products</h2>
//           <div className="product-list">
//             <div className="product-item">
//               <h3>Children's Diapers</h3>
//               <p>Comfortable and absorbent diapers for children of all ages.</p>
//             </div>
//             <div className="product-item">
//               <h3>Adult Diapers</h3>
//               <p>High-quality adult diapers designed for maximum comfort and protection.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <div className="container">
//           <h2>What Our Customers Say</h2>
//           <Slider {...testimonialSettings}>
//             <div className="testimonial-item">
//               <p>"Jobes Solutions delivers exactly what they promise! Excellent quality and timely delivery."</p>
//               <span>- Frida Ambani</span>
//             </div>
//             <div className="testimonial-item">
//               <p>"Affordable prices and great customer service. Highly recommend them!"</p>
//               <span>- Jane Njeri</span>
//             </div>
//             <div className="testimonial-item">
//               <p>"Fantastic products and quick delivery! I'll definitely order again."</p>
//               <span>- Mary Moraa</span>
//             </div>
//           </Slider>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta">
//         <div className="container">
//           <h2>Ready to Order?</h2>
//           <p>Contact us today to place your order and enjoy free delivery within Eldoret!</p>
//           <a href="#contact" className="cta-button">Contact Us</a>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
//           <div className="social-icons">
//             <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-whatsapp"></i>
//             </a>
//             <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="tel:yourphonenumber">
//               <i className="fas fa-phone"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useRef } from "react";
import Slider from "react-slick";
import BatchArrivalGif from "../assets/gifs/offload_batch.mp4";
import PackageDeliveryGif from "../assets/gifs/delivering_package_on_road.mp4";
import DeliveryAssuranceGif from "../assets/gifs/stay_home_we_deliver.mp4";

const LandingPage = () => {
  const videos = [
    {
      src: BatchArrivalGif,
      text: "Efficiently managing batch arrivals at our facilities.",
    },
    {
      src: PackageDeliveryGif,
      text: "Fast delivery to your doorstep.",
    },
    {
      src: DeliveryAssuranceGif,
      text: "Stay home while we ensure secure delivery.",
    },
  ];

  const sliderRef = useRef(null); // Reference for the slider

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

    const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Autoplay disabled since we trigger manually
    arrows: false,
  };

  return (
    <div className="landing-page">
          {/* Header Section */}
          <header className="header">
            <div className="container">
            <h1>Jobes Solutions</h1>
            <p>Your trusted wholesale and retail diaper supply & delivery service</p>
            <a href="#products" className="cta-button">Shop Now</a>
            </div>
        </header>

      {/* Video Carousel Section */}
      <div className="videos">
        <Slider ref={sliderRef} {...videoSettings}>
          {videos.map((video, index) => (
            <div key={index} className="video-slide">
              <video
                autoPlay
                muted
                className="videoTag"
                preload="auto"
                onEnded={handleVideoEnd}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="video-overlay">
                <h2 className="video-text">{video.text}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers at affordable prices. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
        </div>
      </section>
    
          {/* Products Section */}
          <section id="products" className="products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="product-list">
            <div className="product-item">
              <h3>Children's Diapers</h3>
              <p>Comfortable and absorbent diapers for children of all ages.</p>
            </div>
            <div className="product-item">
              <h3>Adult Diapers</h3>
              <p>High-quality adult diapers designed for maximum comfort and protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <Slider {...testimonialSettings}>
            <div className="testimonial-item">
              <p>"Jobes Solutions delivers exactly what they promise! Excellent quality and timely delivery."</p>
              <span>- Fridah Ambani</span>
            </div>
            <div className="testimonial-item">
              <p>"Affordable prices and great customer service. Highly recommend them!"</p>
              <span>- Jane Njeri</span>
            </div>
            <div className="testimonial-item">
              <p>"Fantastic products and quick delivery! I'll definitely order again."</p>
              <span>- Mary Moraa</span>
            </div>
          </Slider>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Contact us today to place your order and enjoy free delivery within Eldoret!</p>
          <a href="tel:yourphonenumber" className="cta-button">Contact us</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="tel:yourphonenumber">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

{/* Products Section */}

export default LandingPage;
