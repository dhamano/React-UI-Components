import React from 'react';

import './Card.scss';

const CardContainer = () => {
  return (
    <div class="content">
      <h2>Get Started with React</h2>
      <p>
        React makes it painless to create interative UIs. Design simple views
        for each state in your application.
      </p>
      <p class="link">
        <a href="//reactjs.org">reactjs.org</a>
      </p>
    </div>
  );
}

export default CardContainer;