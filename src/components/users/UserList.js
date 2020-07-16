import React from 'react'


 const UserList = ({users}) => {
    return (
        <ul className="collection with-header">
        <li className="collection-header"><h4>User List</h4></li>
       {users.map(user=>{
           return <li data-testid='user-item' className="collection-item" key={user.id}>{user.name} {user.lastName}</li>
       })}
        
      </ul>
    )
}

export default React.memo(UserList);
