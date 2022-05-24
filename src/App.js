
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const [showForm,setShowForm] = useState(false);


  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  },[]);



  console.log(users)

  return (
    
    <div className="App container mt-5">
      <div>
        <h1> USERS </h1>
        <button onClick={() => setShowForm(true)}> + Create new user </button>
      </div>
      <UsersList users={users} />
      { showForm && <UsersForm /> }
    </div>
  );
}

export default App;
