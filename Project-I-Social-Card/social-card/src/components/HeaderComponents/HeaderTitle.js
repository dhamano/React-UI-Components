import React from 'react';
import moment from 'moment';

import './Header.scss';

const HeaderTitle = () => {
  return (
    <div class="header">
      <h1>Lambda School</h1>
      <p><span class="username">@lambdaschool</span> &middot; <span class="date">{ moment().format("D MMM") }</span></p>
    </div>
  );
}

export default HeaderTitle;