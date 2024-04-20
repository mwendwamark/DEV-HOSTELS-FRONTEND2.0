import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import WelcomeImage from "../assets/welcomePageImage.jpg";
import Search from "../assets/search.png"
import Booking from "../assets/booking.jpg";
import Pay from "../assets/payment.jpg"
import "../Styles/WelcomePage.css";
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

// import images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpg";

// Icons
import {
  FaWifi,
  FaTshirt,
  FaShieldAlt,
  FaCouch,
  FaBookOpen,
  FaDumbbell,
} from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

const WelcomePage = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    //reveal animations for specific elements
    ScrollReveal().reveal(".introduction-section-contents-header", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".introduction-section-contents-header h1", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".introduction-info div", {
      delay: 700,
      origin: "left",
      interval: 100,
    });
    ScrollReveal().reveal(".introduction-section-image", {
      delay: 800,
      origin: "right",
    });
    ScrollReveal().reveal(".what-we-offer", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".what-we-offer-header", {
      delay: 600,
      origin: "bottom",
    });

    ScrollReveal().reveal(".what-we-offer-header, .accomodation-slider", {
      delay: 750,
      origin: "left",
    });

    ScrollReveal().reveal(
      ".what-we-offer-header, .accomodation-section-contents",
      {
        delay: 800,
        origin: "right",
      }
    );

    ScrollReveal().reveal(".feature-item", {
      delay: 500,
      origin: "bottom",
      distance: "200px", // Adjust as needed
      interval: 100, // Interval between each item
    });
  }, []);

  return (
    <>
      <div className="welcome-page">
        <div className="introduction-section section">
          <div className="introduction-section-contents container">
            <div className="introduction-section-contents-header">
              <h1>
                Elevate your hostel hunting experience with "Dev~Hostels"
                <span>
                  "Effortlessly book affordable and comfortable student hostels,
                  prioritizing convenience and safety."
                </span>
              </h1>
              <p>
                <span>Dev~Hostels</span> is a seamless platform for students to
                find tailored accommodations. Easy exploration, comparison, and
                confident booking. Prioritizing convenience, affordability, and
                safety, ensuring a comfortable and welcoming environment for an
                enhanced educational journey
              </p>
              <div className="introduction-info">
                <div className="hostel-count">
                  <h2> 1642+</h2>
                  <p>Hostels</p>
                </div>

                <div className="student-count">
                  <h2> 2507+</h2>
                  <p>Students</p>
                </div>

                <div className="hosts-count">
                  <h2> 389+</h2>
                  <p>Hosts</p>
                </div>
              </div>{" "}
              <div className="home-get-started-btn">
                <NavLink to="/login">Get started</NavLink>
                <FaArrowRight className="arrow-right" />
              </div>
            </div>
            <div className="introduction-section-image">
              <img src={WelcomeImage} alt="homeimage" />
            </div>
          </div>

          <div className="what-we-offer container section">
            <div className="what-we-offer-header">
              <h2>What we proudly offer</h2>
            </div>
            <div className="accomodation-options-section">
              <div className="accomodation-slider">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3400,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={image1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image7} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image8} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image9} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="accomodation-section-contents">
                <h2>Choose from a wide range of hostels</h2>
                <div className="accomodation-section-contents-info">
                  <div className="accomodation-info">
                    <ul>
                      <li>
                        <div className="sub-title-checkmark">
                          <IoIosCheckmark className="checkmark-icon" />{" "}
                          <h3>Single Rooms</h3>
                        </div>
                        <p>
                          Private and comfortable rooms designed for individual
                          students which provide privacy and personal space.
                        </p>
                      </li>

                      <li>
                        <div className="sub-title-checkmark">
                          <IoIosCheckmark className="checkmark-icon" />{" "}
                          <h3>Double Rooms</h3>
                        </div>
                        <p>
                          Ideal for couples or friends traveling together, these
                          rooms feature a double bed or two single beds.
                        </p>
                      </li>

                      <li>
                        <div className="sub-title-checkmark">
                          <IoIosCheckmark className="checkmark-icon" />
                          <h3>Dormitory Rooms</h3>
                        </div>
                        <p>
                          Sociable atmosphere for those looking to connect with
                          fellow travelers.
                        </p>
                      </li>

                      <li>
                        <div className="sub-title-checkmark">
                          <IoIosCheckmark className="checkmark-icon" />
                          <h3>Private Rooms</h3>
                        </div>
                        <p>
                          Upgraded rooms with additional amenities such as
                          better views, larger floor space.
                        </p>
                      </li>

                      <li>
                        <div className="sub-title-checkmark">
                          <IoIosCheckmark className="checkmark-icon" />
                          <h3>Economy rooms</h3>
                        </div>
                        <p>
                          Budget-friendly rooms with basic amenities, ideal for
                          travelers looking for a comfortable yet affordable
                          stay.
                        </p>
                      </li>
                    </ul>
                    <button className="explore-more-rooms-button">
                      Explore more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="available-features">
              <h2>Available features</h2>
              <div className="feature-lists">
                <div className="top-feature-list">
                  <div className="feature-item">
                    <FaWifi className="feature-icon" />
                    <p>High-speed WiFi</p>
                    <span>Stay connected with our reliable WiFi network.</span>
                  </div>

                  <div className="feature-item">
                    <FaTshirt className="feature-icon" />
                    <p>Laundry facilities</p>
                    <span>Convenient access to on-site laundry services.</span>
                  </div>

                  <div className="feature-item">
                    <FaShieldAlt className="feature-icon" />
                    <p>24/7 Security</p>
                    <span>
                      Ensuring your safety with round-the-clock security.
                    </span>
                  </div>
                </div>

                <div className="bottom-feature-list">
                  <div className="feature-item">
                    <FaCouch className="feature-icon" />
                    <p>Common areas</p>
                    <span>Relax and socialize in our cozy common areas.</span>
                  </div>
                  <div className="feature-item">
                    <FaBookOpen className="feature-icon" /> <p>Study rooms</p>
                    <span>Quiet spaces for focused studying.</span>
                  </div>
                  <div className="feature-item">
                    <FaDumbbell className="feature-icon" />{" "}
                    <p>Fitness center</p>
                    <span>Stay fit with our well-equipped fitness center.</span>
                  </div>
                </div>
                <div className="cta-button-container">
                  <button className="cta-button">Explore More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="looking-for-hostels-section section container">
            <h1>Book a hostel of you liking in 3 simple steps!</h1>
            <div className="steps-for-looking-for-hostels">
              <div className="step-1">
                <div className="step-1-contents">
                  <h2>1. Choose the hostel you like the most.</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus dolores sed cum, commodi incidunt odit adipisci
                    magni non natus accusantium labore cumque delectus iure
                    possimus quasi voluptate molestiae.
                  </p>
                </div>
                <div className="step-1-image">
                  <img src={Search} alt="" className="image-settings" />
                </div>
              </div>

              <div className="step-2">
                <div className="step-2-contents">
                  <h2>2. Book the chosen hostel</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi porro temporibus iusto id aperiam alias at, cumque quas
                    corporis atque, sit dolore possimus. Delectus ab unde
                    similique sed?
                  </p>
                </div>
                <div className="step-2-image">
                  <img src={Booking} alt="" className="image-settings" />
                </div>
              </div>

              <div className="step-3">
                <div className="step-3-contents">
                  <h2>3. Make necessary payment to secure the hostel</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugit quisquam deleniti cupiditate facere eveniet. Alias
                    dolore inventore, nulla illum repudiandae iste deleniti
                    ipsum, sapiente aliquam officia ex laborum!
                  </p>
                </div>
                <div className="step-3-image">
                  <img src={Pay} alt="" className="image-settings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
