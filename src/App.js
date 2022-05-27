
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  // estado para el consumo de la API
  const [users, setUsers] = useState([]);

  // estado para abrir y cerrar el formulario
  const [showForm,setShowForm] = useState(false);

  //estado controlador de la selección del usuario en el listado
  const [userSelected, setUserSelected] = useState(null);

  //useEffect para controlar el bucle del consumo principal de la API
  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  },[]);

  // llamado de la API para rederizado de actualización de estado
  const getUsers = ()=> {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
  }

  // función para selecionar el usuario a editar
  const selectUser = user => setUserSelected(user);

  //función para des seleccionar el usuario a editar & vaciar los input's
  const deselectUser = () => setUserSelected(null);

  //funcion para eliminar usuarios
  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=> getUsers());
  };
  //función para abrir y cerrar el formulario
  const formShow = () => {
      setShowForm(true);
  }


  return (
    
    <div className="App container mt-5">
      <div className="contentTitle">
        <h1> USERS </h1>
        {/* botón para abrir el formulario */}
        <button onClick={() => setShowForm(true)}> + Create new user </button>
      </div>
      <UsersList 
      // props
        users={users} 
        selectUser={selectUser}
        deleteUser={deleteUser}
        formShow={formShow} 
      />
      { showForm && 
        <UsersForm  
        //props
        getUsers={getUsers} 
        userSelected={userSelected}
        deselectUser={deselectUser} 
        // prop con funcion para cerrar el formulario
        close={() => setShowForm(false)}
        /> 
      }
    </div>
  );
}

export default App;
