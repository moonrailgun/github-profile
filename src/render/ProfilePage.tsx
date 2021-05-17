import React from 'react';
import { buildProfileImage } from './utils';

interface ProfilePageProps {
  username: string;
}
export const ProfilePage: React.FC<ProfilePageProps> = React.memo((props) => {
  const { username } = props;

  return (
    <div className="mt-4">
      <h2 className="f4 mb-2 text-normal">{username}'s github profile</h2>

      <div>
        {buildProfileImage(
          'https://github-readme-streak-stats.herokuapp.com/',
          {
            user: username,
            hide_border: true,
          }
        )}
        {buildProfileImage('https://github-readme-stats.vercel.app/api', {
          username: username,
          show_icons: true,
          hide_border: true,
        })}
        {buildProfileImage(
          'https://github-readme-stats.vercel.app/api/top-langs/',
          {
            username: username,
            layout: 'compact',
            hide_border: true,
          }
        )}
        {/* Not every have there wakatime */}
        {/* {buildProfileImage(
          'https://github-readme-stats.vercel.app/api/wakatime',
          {
            username: username,
            layout: 'compact',
          }
        )} */}

        {/* https://github.com/Ashutosh00710/github-readme-activity-graph */}
        {buildProfileImage('https://activity-graph.herokuapp.com/graph', {
          username: username,
          theme: 'react-dark',
          bg_color: 'ffffff',
          point: '333333',
        })}
      </div>
    </div>
  );
});
