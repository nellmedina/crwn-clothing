import React from 'react';

import './homepage.styles.scss';

export const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>SHOP</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='subtitle'>SHOP</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MEN</h1>
          <span className='subtitle'>SHOP</span>
        </div>
      </div>
    </div>
  </div>
);
