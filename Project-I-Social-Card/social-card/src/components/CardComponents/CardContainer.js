import React from 'react';

import CardContent from './CardContent';
import CardBanner from './CardBanner';

import './Card.scss';

const CardContainer = () => {
  return (
    <div class="card-content">
      <CardBanner />
      <CardContent />
    </div>
  );
}

export default CardContainer;