import PropTypes from 'prop-types';

import s from './ProfileDescription.module.css';

export const ProfileDescription = ({ username, tag, location, avatar }) => {
    return <div className={s.description}>
    <img
        src={avatar}
        alt={username}
        className={s.avatar}
    />
      <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}a</p>
        <p className={s.location}>{location}</p>
  </div>
}

ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}