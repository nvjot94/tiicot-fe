import React,{useState} from 'react'
import UserList from './users/UserList';
const Search = ({users}) => {
    const [name,setName]=useState('');
    const [filteredUsers,setfilteredUsers]= useState(users);
    const changeHandler=(event)=>
    {
        event.preventDefault();
        setName(event.target.value)
        filterData();
    };
    const filterData=()=>{
        if (name==='')
        {
            setfilteredUsers(users);
        }
        const data=users.filter(user=>{
            return user.name.toLowerCase().includes(name) || user.lastName.toLowerCase().includes(name);
        });

        setfilteredUsers(data);
    }
    
    return (
    <div>
    <div className="row">
    <div className="input-field col s6">
      <input placeholder="Search Students" onChange={changeHandler} value={name} id="first_name2" type="text" class="validate" />
      <label class="active" for="first_name2"></label>
    </div>
  </div>
  <UserList users={filteredUsers}/>
        </div>
    )
}
export default Search;