import React from 'react';
import Hero from '../components/Hero';
import Tools from '../components/Tools';
import Community from '../components/Community';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Tools />
      <Community />
    </main>
  );
};

export default Home;
