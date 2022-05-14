import { ProfilePage } from './ProfilePage';
import React from 'react';
import ReactDOM from 'react-dom';

export function renderProfilePage(username: string) {
  const targetNode = document.querySelector(
    '#js-pjax-container > div:nth-last-child(1) > div > div:nth-child(2)'
  );

  ReactDOM.render(React.createElement(ProfilePage, { username }), targetNode);
}
