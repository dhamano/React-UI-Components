import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div class="comment">
        <img src="imgs/comment.gif" />
        <span class="times"></span>
      </div>
      <div class="shared">
        <img src="imgs/shared.gif" />
        <span class="times">6</span>
      </div>
      <div class="liked">
        <img src="imgs/liked.gif" />
        <span class="times">4</span>
      </div>
      <div class="email">
        <img src="imgs/email.gif" />
      </div>
    </footer>
  );
}

export default Footer;