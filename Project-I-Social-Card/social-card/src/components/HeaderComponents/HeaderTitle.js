import React from 'react';

import './Header.scss';

const HeaderTitle = () => {
  return (
    <div class="header">
      <h1>Lambda School</h1>
      <p><span class="username">@lambdaschool</span> &middot; <span class="date">26 jan</span></p>
    </div>
  );
}

export default HeaderTitle;