export const ProfileDescription = ({username, tag, location, avatar}) => {
    return <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
        <p className="name">{username}</p>
    <p className="tag">@{tag}a</p>
        <p className="location">{location}</p>
  </div>
}