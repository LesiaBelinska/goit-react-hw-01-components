import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

import user from '../data/user.json';
import data from '../data/data.json';

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
      <Statistics
        title="Upload stats"
        stats={data} />
    </div>
  );
};
