import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Body.css';
import img from '../assets/body.jpg';
import Card from './Card';

// Sample restaurant data with real image URLs (from Google)
const restaurants = [
  {
    name: 'Manek Chowk',
    description: 'A popular street food market in Ahmedabad, known for its local delicacies.',
    imageUrl: "https://ahmedabadtourism.in/images/places-to-visit/headers/manek-chowk-ahmedabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    orderLink: '/order',
    bookTableLink: '/booktable'
  },
  {
    name: 'Agashiye',
    description: 'A traditional Gujarati restaurant offering a fine dining experience.',
    imageUrl: 'https://eatapp.co/global-restaurants/images/agashiye-43-restaurant-1.jpg?height=500&width=850',
    orderLink: '/order',
    bookTableLink: '/booktable'
  },
  {
    name: 'The Green House',
    description: 'A vegetarian restaurant offering organic and healthy food options.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ModsbCv-R-mQNVk2rxDgiInSg11rTOXSAQ&s',
    orderLink: '/order',
    bookTableLink: '/booktable'
  },
  {
    name: 'Law Garden Food Street',
    description: 'Known for its vibrant food stalls and local treats.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tCu2yDJS-YXXHaYlBGsZYW2uDKA13qwBTQ&s',
    orderLink: '/order',
    bookTableLink: '/booktable'
  },
  {
    name: 'Patang Restaurant',
    description: 'Famous rooftop restaurant with a great view city.',
    imageUrl: 'https://i0.wp.com/myahmedabad.blog/wp-content/uploads/2023/12/6-1024x576.jpg?ssl=1',
    orderLink: '/order',
    bookTableLink: '/booktable'
  },
  {
    name: 'Rajwadu',
    description: 'A food market with traditional dishes and food.',
    imageUrl: 'https://rajwadu.com/wp-content/uploads/2014/05/gujarati_restaurant_in_gujarat.jpg',
    orderLink: '/order',
    bookTableLink: '/booktable'
  }
];

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [textAnimate, setTextAnimate] = useState(false);
  const [restaurantsAnimate, setRestaurantsAnimate] = useState(false);
  const textRef = useRef(null);
  const restaurantsRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextAnimate(true);
          } else {
            setTextAnimate(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRestaurantsAnimate(true);
          } else {
            setRestaurantsAnimate(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (restaurantsRef.current) {
      observer.observe(restaurantsRef.current);
    }

    return () => {
      if (restaurantsRef.current) {
        observer.unobserve(restaurantsRef.current);
      }
    };
  }, []);

  // Function to handle "Contact Us" button click
  const handleContactClick = () => {
    navigate('/Contact'); // Redirect to the Contact page
  };

  // Function to handle "Restaurants Near You" button click
  const handleRestaurantClick = () => {
    navigate('/restaurantlist'); // Redirect to the Restaurant List page
  };

  return (
    <div>
      <section
        className={`hero-section ${animate ? 'animate' : ''}`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="overlay">
          <div className={`content ${textAnimate ? 'text-animate' : ''}`} ref={textRef}>
            <h1 className="title">Find The Real Taste.</h1>
            <p className="subtitle">
              Platform where you find the taste that matches with your expectations.
            </p>
            <button className="contact-btn" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      </section>

      <section
        className={`restaurants-section ${restaurantsAnimate ? 'restaurants-section-animate' : ''}`}
        ref={restaurantsRef}
      >
        <h2 className="section-title">Explore Famous Restaurants in Ahmedabad</h2>
        <div className="container">
          <div className="row">
            {restaurants.map((restaurant, index) => (
              <Card
                key={index}
                name={restaurant.name}
                description={restaurant.description}
                imageUrl={restaurant.imageUrl}
                orderLink={restaurant.orderLink}
                bookTableLink={restaurant.bookTableLink}
              />
            ))}
          </div>
        </div>
        <button className="view-restaurants-btn" onClick={handleRestaurantClick}>
  View Restaurants Near You
</button>
      </section>
    </div>
  );
};

export default HeroSection;
