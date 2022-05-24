import React from 'react';

const UsersList = ({ users }) => {


    return (
        <div className='contentAllList'>
        {/* <div>
            <h1> USERS </h1>
            <button onClick={() => setShowForm(true)}> + Create new user </button>
        </div> */}
        <div className='contentUsersList'>
            <ul className='usersList'>
                {
                    users.map(user => (
                        <div className='card'>
                            <li className='userId' key={user.id}>
                                <h3 className='userName'>{user.first_name} {user.last_name} </h3>
                                <p className='emailAndBirthday'>EMAIL</p>
                                <p>{user.email}</p>
                                <p className='emailAndBirthday'>BIRTHDAY</p>
                                <p className='title'>{user.birthday}</p>
                                <div className='divButton'>
                                <button className='deleteicon'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                                <button className='editicon'>
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