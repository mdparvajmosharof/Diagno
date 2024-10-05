// src/pages/HealthAwareness.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import Footer from '../Component/Footer';

const HealthAwareness = () => {
  const healthTips = [
    "Stay Hydrated: Drink at least 8 glasses of water daily.",
    "Exercise Regularly: 30 minutes of activity daily.",
    "Get Enough Sleep: 7-8 hours for stress reduction.",
    "Eat a Balanced Diet: Include fruits and vegetables.",
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Health Awareness & Tips</h1>

      <section className="campaign">
        <h2 className="text-3xl font-semibold mb-4 rounded-md">Featured Health Campaigns</h2>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img className='rounded-md' src="https://i.ibb.co.com/4d38wzJ/julia-koblitz-Rl-OAw-Xt2f-EA-unsplash.jpg" alt="Campaign 1" />
            <p className="legend">Heart Health Month - Checkups for cardiovascular disease prevention.</p>
          </div>
          <div>
            <img className='rounded-md' src="https://i.ibb.co.com/KFk2cZk/louis-reed-pwc-KF7-L4-no-unsplash.jpg" alt="Campaign 2" />
            <p className="legend">Flu Awareness - Get vaccinated for seasonal flu protection.</p>
          </div>
        </Carousel>
      </section>

      <section className="health-tips mt-8">
        <h2 className="text-3xl font-semibold mb-4">Quick Health Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {healthTips.map((tip, index) => (
            <div key={index} className="card shadow-lg bg-base-200 p-4">
              <div className="card-body">
                <h3 className="card-title">Tip {index + 1}</h3>
                <p>{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="articles mt-8">
        <h2 className="text-3xl font-semibold mb-4">Health Articles from Professionals</h2>
        <div className="tabs tabs-boxed">
          <a href="#article1" className="tab tab-active">Blood Tests</a>
          <a href="#article2" className="tab">Cholesterol</a>
          <a href="#article3" className="tab">Vaccines</a>
        </div>
        <p className="mt-4">
          <a href="#article1" className="link link-primary">Importance of Regular Blood Tests</a> <br />
          <a href="#article2" className="link link-primary">Lowering Cholesterol Naturally</a> <br />
          <a href="#article3" className="link link-primary">The Importance of Flu Vaccines</a>
        </p>
      </section>

      <footer className='mt-8'>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HealthAwareness;
