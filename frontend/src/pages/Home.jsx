import React from 'react';
import Hero from '../components/Hero';
import Tools from '../components/Tools';
import Community from '../components/Community';
import './Home.css';

const Home = ({ setCurrentPage }) => {
  return (
    <main className="home-page">
      <Hero setCurrentPage={setCurrentPage} />
      <Tools />
      <Community />
    </main>
  );
};

export default Home;
