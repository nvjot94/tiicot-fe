import React from 'react'
import UserList from '../components/users/UserList';
 const Home = ({users}) => {
    return (
        <>
            <div className="container">
            <UserList  users={users}/>
            
            </div>
        </>
    )
}

export default Home;