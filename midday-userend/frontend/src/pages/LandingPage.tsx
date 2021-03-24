import React from 'react';
import WelcomeModal from 'src/components/WelcomeModal';
import CategoriesList from '../components/CategoriesList';
import Footer from '../components/Footer';

export default function LandingPage () {
  return (
    <>
      <WelcomeModal/>
      <CategoriesList></CategoriesList>
      <Footer></Footer>
    </>
  );
}
