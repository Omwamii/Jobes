import React from "react";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import KidsDiaperImage from "../assets/images/Kids diapers collage design.png";
import AdultDiaperImage from "../assets/images/Adult diapers collage design.png";
import BabyWipesImage from "../assets/images/Baby wipes collage design.png";
import AdultWipesImage from "../assets/images/Adult body wipes  collage design.png";
import MaternityPadsImage from "../assets/images/Maternity pads  collage design.png";
import ServiettesImage from "../assets/images/Serviettes collage design.png";


const LandingPage = () => {
  const products = [
    {
      name: "Kids' Diapers",
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
      name: "Baby Wipes",
      image: BabyWipesImage,
    },
    {
      name: "Adult Wipes",
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
    const whatsappURL = `https://wa.me/254721400627?text=${encodeURIComponent(
      `Hi, I want to make an order for ${productName}.`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          {/* <Typical
            steps={["Jobes Solutions", 2000]} // Text and duration in milliseconds
            loop={1} // Number of loops
            wrapper="h1" // Element wrapper
          /> */}
          <h1>Jobes Solutions</h1>
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
          <a href="tel:+254721400627" className="cta-button">Call us now</a>
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
            <a href="https://wa.me/254721400627" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://web.facebook.com/profile.php?id=61571391310199" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="tel:+254721400627">
              <i className="fas fa-phone"></i>
            </a>
            {/* <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}
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
