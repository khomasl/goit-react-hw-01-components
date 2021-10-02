//import logo from './logo.svg';
import './App.css'
import { name, tag, location, avatar, stats } from './jsons/user.json'
import { Profile } from './components/Profile/Profile'
import statisticalData from './jsons/statistical-data.json'
import { Statistics } from './components/Statistics/Statistics'
import friends from './jsons/friends.json'
import { FriendList } from './components/FriendList/FriendList'

function App() {
  return (
    <div className="App">
      <h1>React-hw-01-Components</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </div>
  )
}

export default App
