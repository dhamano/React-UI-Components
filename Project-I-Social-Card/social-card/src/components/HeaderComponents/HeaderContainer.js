import React from 'react';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.scss';

const HeaderContainer = () => {
  return (
    <div class="header-container">
      <ImageThumbnail />
      <div class="header-main">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;