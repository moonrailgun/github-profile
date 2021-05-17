import React from 'react';

export function buildProfileImage(url: string, params = {}) {
  const search = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const src = `${url}?${search}`;
  return (
    <div>
      <img style={{ maxWidth: '100%' }} src={src} />
    </div>
  );
}
