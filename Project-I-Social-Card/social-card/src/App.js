import React from 'react';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

import './App.scss';

const App = () => {
  return (
    <article class="social-card-holder">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </article>
  );
};

export default App;
