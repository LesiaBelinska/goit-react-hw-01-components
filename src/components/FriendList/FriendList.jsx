import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';

import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({id, name, avatar, isOnline}) => (
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
  ))}
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    )
}