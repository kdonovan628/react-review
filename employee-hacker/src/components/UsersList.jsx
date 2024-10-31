import { useState, useEffect } from 'react';

const UsersList = ({ setShowList, setUserDetails }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
      const allUsers = await response.json();
      setUsers(allUsers);
  }

     getUsers();
  }, []);
 
  const userClicked = (user) => {
    setShowList(false);
    setUserDetails(user);
  }

  return (  
    <ol>
      {
        users.map((singleUser) => {

          return (
            <li 
            key={singleUser.id}
            onClick={() => userClicked(singleUser)}  
          >
            {singleUser.name}
            </li>
          )
      })
    }
    </ol>
  )
}

export default UsersList;