//import PropTypes from 'prop-types'
import { FriendListItem } from '../FriendListItem/FriendListItem.js'

export function FriendList({ friends }) {
  return (
    <>
      <h2 className="title">3. Список друзей</h2>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnLine, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnLine={isOnLine}
            id={id}
          />
        ))}
      </ul>
    </>
  )
}
