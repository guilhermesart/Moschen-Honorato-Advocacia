import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/home/TeamSection';
import BlogSection from '../components/home/BlogSection';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <CallToAction />
    </Layout>
  );
};

export default Home;