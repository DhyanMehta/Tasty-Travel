import React, { useEffect } from 'react';
import '../css/ReviewForm.css'; 
import logo from '../assets/review.webp';

function ReviewForm() {
  useEffect(() => {
    const handleScroll = () => {
      const leftSection = document.querySelector('.review-left');
      const rightSection = document.querySelector('.review-right');

      if (!leftSection || !rightSection) return;

      const triggerHeight = window.innerHeight / 1.2;

      const leftTop = leftSection.getBoundingClientRect().top;
      const rightTop = rightSection.getBoundingClientRect().top;

      if (leftTop < triggerHeight) {
        leftSection.classList.add('animate-left');
      } else {
        leftSection.classList.remove('animate-left');
      }

      if (rightTop < triggerHeight) {
        rightSection.classList.add('animate-right');
      } else {
        rightSection.classList.remove('animate-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="review-section">
      <div className="divider" />
      <div className="review-container">
        <div className="review-left">
          <img className="review-image" src={logo} alt="Reviewer" />
          <h2>Give us your invaluable Review.</h2>
          <p>Your feedback helps us improve our services and serve you better.</p>
        </div>
        <div className="review-right">
          <form className="review-form" action="https://formspree.io/f/mnnqvyyz" method="POST">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Enter your First Name" name='FirstName'/>
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Enter your Last Name" name='LastName'/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter a valid email address" name='Email'/>
            </div>
            <div>
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone (e.g. +14155552675)" name='Phone'/>
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Enter your message" name='Message'></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
