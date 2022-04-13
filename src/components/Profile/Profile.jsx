import { ProfileDescription } from "components/ProfileDescription/ProfileDescription.jsx";

import user from '../../data/user.json';

export const Profile = () => {
 
    return <div className="profile">
        <ProfileDescription
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar ={user.avatar}
        />
    </div>
}