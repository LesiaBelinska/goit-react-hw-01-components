import { ProfileDescription } from "components/ProfileDescription/ProfileDescription.jsx";
import { StatList } from "components/StatList/StatList.jsx";

import user from '../../data/user.json';

import s from './Profile.module.css'

export const Profile = () => {
 
    return <div className={s.profile}>
        <ProfileDescription
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar ={user.avatar}
        />
        <StatList
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        
    </div>
}