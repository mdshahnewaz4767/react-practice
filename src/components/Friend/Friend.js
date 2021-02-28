import { useEffect, useState } from 'react';
import './Friend.css';
import Cart from '../Cart/Cart';
import Summery from '../Summery/Summery';
import friendsData from '../../data/data.json';

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendsData);
    // console.log(friendsData);
  }, [])
  
  //Friend Summery
  const [summery, setSummery] = useState([]);

  const handleAddFriend = (fd) => {
    //   console.log('added', fd);
      const newSummery = [...summery, fd]
      setSummery(newSummery);
  }

  const appStyle = {
    fontWeight: 'bold'
  }
  return (
    <div>
        <h1 style={appStyle}>Friends List: {friends.length}</h1>
        <div className="container">
            <div className="friend-container">
                {
                friends.map(friend => <Cart friend={friend} key={friend.id}  handleAddFriend={handleAddFriend}></Cart>)
                }
            </div>
            <div className="summery-container">
                <Summery summery={summery}></Summery>
            </div>
        </div>
    </div>
  );
}

export default App;
