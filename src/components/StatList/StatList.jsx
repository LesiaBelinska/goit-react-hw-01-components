import PropTypes from 'prop-types';

import s from './StatList.module.css'

export const StatList = ({ followers, views, likes }) => {
  return <ul className={s.stats}>
    <li className={s.item}>
      <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
}

StatList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}