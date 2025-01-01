// import React, { useRef } from "react";
// import Slider from "react-slick";

// import BatchArrivalGif from "../assets/gifs/offload_batch.mp4";
// import PackageDeliveryGif from "../assets/gifs/delivering_package_on_road.mp4";
// import DeliveryAssuranceGif from "../assets/gifs/stay_home_we_deliver.mp4";
// import HomeDeliveryGif from "../assets/gifs/home_delivery.mp4"

// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const LandingPage = () => {
//   const videos = [
//     {
//       src: BatchArrivalGif,
//       text: "Efficiently managing batch arrivals at our facilities.",
//     },
//     {
//       src: PackageDeliveryGif,
//       text: "Fast and secure diaper delivery.",
//     },
//     {
//       src: HomeDeliveryGif,
//       text: "Stay home while we ensure delivery to your doorstep.",
//     },
//   ];

//   const handleBeforeChange = (currentSlide, nextSlide) => {
//     console.log(currentSlide)
//     const videoElements = document.querySelectorAll(".videoTag");
//     if (videoElements[currentSlide]) {
//       videoElements[currentSlide].currentTime = 0;
//       // videoElements[currentSlide].pause();
//     }
//   }

//   const handleVideoEnd = (index) => {
//     console.log('video has ended')
//     const videoElements = document.querySelectorAll(".videoTag");
//     const video = videoElements[index];
//     video.currentTime = 0;
//     video.play()
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

//   const videoSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     // autoplay: false, // Autoplay disabled since we trigger manually
//     autoplaySpeed: 6000,
//     arrows: false,
//     beforeChange: handleBeforeChange,
//   }

//   return (
//     <div className="landing-page">
//           {/* Header Section */}
//           <header className="header">
//             <div className="container">
//             <h1>Jobes Solutions</h1>
//             <p>Your trusted wholesale and retail diaper supply & delivery service</p>
//             <a href="#products" className="cta-button">Shop Now</a>
//             </div>
//         </header>

//       {/* Video Carousel Section */}
//       <div className="videos">
//         <Slider {...videoSettings}>
//           {videos.map((video, index) => (
//             <div key={index} className="video-slide">
//               <video
//                 autoPlay
//                 muted
//                 className="videoTag"
//                 preload="auto"
//                 // onEnded={() => handleVideoEnd(index)}
//                 loop
//               >
//                 <source src={video.src} type="video/mp4" />
//               </video>
//               <div className="video-overlay">
//                 <h2 className="video-text">{video.text}</h2>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* About Section */}
//       <section id="about" className="about">
//         <div className="container">
//           <h2>About Us</h2>
//           <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers at affordable prices. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
//         </div>
//       </section>
    
//           {/* Products Section */}
//           <section id="products" className="products">
//             <div className="container">
//               <h2>Our Products</h2>
//               <div className="product-list">
//                 <div className="product-item">
//                   <h3>Children's Diapers</h3>
//                   <p>Comfortable and absorbent diapers for children of all ages.</p>
//                 </div>
//                 <div className="product-item">
//                   <h3>Adult Diapers</h3>
//                   <p>High-quality adult diapers designed for maximum comfort and protection.</p>
//                 </div>
//               </div>
//             </div>
//           </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <div className="container">
//           <h2>What Our Customers Say</h2>
//           <Slider {...testimonialSettings}>
//             <div className="testimonial-item">
//               <p>"Jobes Solutions delivers exactly what they promise! Excellent quality and timely delivery."</p>
//               <span>- Fridah Ambani</span>
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
//           <a href="tel:yourphonenumber" className="cta-button">Call us</a>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="container">
//         <div className="location-container">
//             <a
//               href="https://www.google.com/maps?q=0.514277,35.269779" // Replace with actual coordinates
//               target="_blank"
//               rel="noopener noreferrer"
//               className="location-link"
//             >
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
//             </a>
//             <p className="location">Daima Towers, 15th floor - Eldoret</p>
//           </div>
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
//           <div className="cp-container">
//             <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// {/* Products Section */}

// export default LandingPage;
import React from "react";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";

import KidsDiaperImage from "../assets/images/Kids diapers collage design.png";
import AdultDiaperImage from "../assets/images/Adult diapers collage design.png";
import BabyWipesImage from "../assets/images/Baby wipes collage design.png";
import AdultWipesImage from "../assets/images/Adult body wipes  collage design.png";
import MaternityPadsImage from "../assets/images/Maternity pads  collage design.png";
import ServiettesImage from "../assets/images/Serviettes collage design.png";


const LandingPage = () => {
  const products = [
    {
      name: "Children's Diapers",
      image: KidsDiaperImage,
    },
    {
      name: "Adult Diapers",
      image: AdultDiaperImage,
    },
    {
      name: "Maternity Pads",
      image: MaternityPadsImage,
    },
    {
      name: "Diaper Wipes",
      image: BabyWipesImage,
    },
    {
      name: "Kids & Adult Wipes",
      image: AdultWipesImage,
    },
    {
      name: "Serviettes",
      image: ServiettesImage,
    },
  ];

    const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleOrderClick = (productName) => {
    const whatsappURL = `https://wa.me/254722379630?text=${encodeURIComponent(
      `Hi, I want to make an order for ${productName}.`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Jobes Solutions</h1>
          {/* <p>Your trusted wholesale and retail diapers, wipes and serviettes supply & delivery service</p> */}
          <p>Your Trusted Partner in wholesale and retail diaper supply</p>
          <a href="#products" className="cta-button">Shop Now</a>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="product-item" 
                style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div
                  className="order-overlay"
                  onClick={() => handleOrderClick(product.name)}
                >
                  <button className="order-button">Make Order</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>At Jobes Solutions, we specialize in providing high-quality adult and children diapers, wet wipes, maternity pads and serviettes. With on-time delivery and exceptional customer service, we strive to meet your needs efficiently.</p>
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
          <a href="tel:yourphonenumber" className="cta-button">Call us</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="location-container">
            <a
              href={`https://www.google.com/maps?q=0°30'42.5"N 35°16'27.3"E`}
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            </a>
            <p className="location">Eldo city business center - Eldoret</p>
          </div>
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
          <div className="cp-container">
            <p>&copy; 2024 Jobes Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
