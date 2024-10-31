import React from 'react';
import { useState } from 'react';
import UsersList from './components/UsersList'
import UsersDetails from './components/UsersDetails'

const App = () => {
  const [showList, setShowList] = useState(true);
  const [userDetails, setUserDetails] = useState({});

  return (
    <>
      <h1>Billionare Hackers</h1>

      {
        showList ?
          <UsersList 
            setShowList={setShowList}
            setUserDetails={setUserDetails}
          /> : 
          <UsersDetails 
            userDetails={userDetails} 
            setShowList={setShowList}
          />
      }
    </>
  );
};

export default App