import PropTypes from 'prop-types'
import { FriendListItem } from '../FriendListItem/FriendListItem.js'
import s from './FriendList.module.css'

export function FriendList({ friends }) {
  return (
    <>
      <h2 className={s.title}>3. Список друзей</h2>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        ))}
      </ul>
    </>
  )
}

FriendList.defaultProps = {
  friends: [
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
      name: 'Mango',
      isOnline: true,
      id: 1812,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
      name: 'Kiwi',
      isOnline: false,
      id: 1137,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
      name: 'Ajax',
      isOnline: true,
      id: 1213,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
      name: 'Jay',
      isOnline: true,
      id: 1714,
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
      name: 'Poly',
      isOnline: false,
      id: 1284,
    },
  ],
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
}
