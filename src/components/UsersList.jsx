import React from 'react';

const UsersList = ({ users, selectUser, deleteUser, formShow }) => {


    return (
        //contenedor para el despliegue de las tarjetas listadas de los usuarios registrados
        <div className='contentAllList'>
            <div className='contentUsersList'>
                <ul className='usersList'>

                    {//metodo map para recorrer el arreglo obtenido de la API
                        users.map(user => (

                            // Tarjeta contenedora Usuario
                            <div className='card'> 
                                <li className='userId' key={user.id}>
                                    <h3 className='userName'>{user.first_name} {user.last_name} </h3>
                                    <p className='emailAndBirthday'>EMAIL</p>
                                    <p>{user.email}</p>
                                    <p className='emailAndBirthday'>BIRTHDAY</p>
                                    <div className='gift'>
                                        <i className="fa-solid fa-gift"></i>
                                        <p className='title'>{user.birthday}</p>
                                    </div>

                                    { /*Contenedor de los botones para eliminar y editar */}
                                    <div className='divButton'>
                                        <button onClick={()=> deleteUser(user.id)} className='deleteicon'>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                        <button onClick={() => {selectUser(user); formShow()}} className='editicon'>
                                            <i className="fa-solid fa-pencil"></i>
                                        </button>
                                    </div>
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
       
    );
};

export default UsersList;