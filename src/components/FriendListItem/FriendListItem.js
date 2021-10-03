import s from './FriendListItem.module.css'

export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id.toString()} className={s.item}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}
