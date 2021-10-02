export function FriendListItem({ avatar, name, isOnLine, id }) {
  return (
    <li key={id.toString()} className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}
