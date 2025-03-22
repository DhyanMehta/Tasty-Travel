import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css';

function About() {
    return (
        <div className="about-section container mt-5">
            <h1 className="text-center mb-5">About Us</h1>
            
            <div className="about-content">
                <p className="about-intro">
                    Welcome to <strong>Tasty Travel</strong> — your ultimate guide to discovering the best food and dining experiences around the world!
                </p>

                <h2>Our Story</h2>
                <p>
                    Tasty Travel was founded in 2024 by a group of passionate food lovers and explorers who believe that the best way to experience a place is through its food. Our journey started with a simple mission: to uncover hidden culinary gems and bring you closer to the flavors that define each destination.
                </p>
                <p>
                    What began as a small team of food enthusiasts has grown into a vibrant community dedicated to exploring the world one dish at a time. Whether it’s street food stalls in bustling cities or hidden, family-run restaurants in quiet villages, we’re here to share those mouthwatering discoveries with you.
                </p>

                <h2>What We Offer</h2>
                <ul>
                    <li><strong>Curated Restaurant Guides:</strong> We handpick the best dining spots, from trendy eateries to hidden local gems, ensuring you enjoy a truly authentic taste of each location.</li>
                    <li><strong>Honest Reviews:</strong> Our reviews are honest, unbiased, and based on real experiences, helping you choose the perfect spot to satisfy your cravings.</li>
                    <li><strong>Insider Food Tips:</strong> Discover must-try dishes, local specialties, and tips for navigating food markets like a pro.</li>
                    <li><strong>Culinary Travel Stories:</strong> Follow our journey as we explore new destinations, sharing the stories behind the flavors and the people who create them.</li>
                </ul>

                <h2>Our Mission</h2>
                <p>
                    At Tasty Travel, our mission is to connect food lovers with the world’s most delicious and authentic dining experiences. We believe that every meal tells a story, and we’re here to help you find those unforgettable culinary moments, whether you’re at home or on the road.
                </p>

                <h2>Meet the Team</h2>
                <p>
                    We’re a diverse team of food critics, chefs, writers, and travelers who share a passion for great food and cultural exploration. Our combined experiences and insights bring you trusted recommendations and inspiring stories that fuel your love for food.
                </p>

                <h2>Join Our Community</h2>
                <p className="thank-you">
                    We’re excited to have you as part of the Tasty Travel community! Follow us for the latest food guides, hidden restaurant finds, and culinary adventures. Let’s embark on this delicious journey together.
                </p>

                <p className="thank-you">Thank you for choosing Tasty Travel — where every journey is a feast!</p>
            </div>
        </div>
    );
}

export default About;
