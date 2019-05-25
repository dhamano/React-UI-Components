import React from 'react';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

import './App.scss';

const App = () => {
  return (
    <div class="social-card-holder">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
