import { Profile } from './Profile/Profile.jsx';

import user from '../data/user.json';

import s from './App.module.css';


export const App = () => {
  return (
    <div className={s.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
    </div>
  );
};
