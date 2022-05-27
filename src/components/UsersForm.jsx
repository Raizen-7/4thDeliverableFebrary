import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, deselectUser, close}) => {

    // estados para el control de input
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    //hook para detectar la selecion del usuario a editar
    useEffect( () => {
     console.log(userSelected);
     if(userSelected !== null){

         setFirstName(userSelected.first_name);
         setLastName(userSelected.last_name);
         setEmail(userSelected.email);
         setPassword(userSelected.password);
         setBirthday(userSelected.birthday); 

     }else{
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
     }
    }, [userSelected]);

    //funcion para la carga de datos creados o editados desde el formulario por medio de OnSubmit 
    const submit = e => {
        e.preventDefault();
        const user = {
            first_name : firstName,
            last_name : lastName, 
            email,
            password,
            birthday
        }
        {
            if(userSelected !== null){
                alert("Editing complete")
               axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                    .then(() => {
                        getUsers();
                        deselectUser();
                    });

            }else{
                axios.post('https://users-crud1.herokuapp.com/users/', user)
                     .then(() => getUsers())
                     .catch(error => console.log(error.response));        
            }
        }
    };

    

    return (
        <div className='contentForm'>
            <form className='cardForm' onSubmit={submit}>
                <button className='close' onClick={close} >
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h1>New User</h1>
                <div className='container'>
                    <div className='containerDates'>
                    <p>
                            First Name
                        </p>
                        <input
                            type="text"
                            id="firstName"
                            placeholder='First Name'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className='containerDates'>
                    <p>
                            Last Name
                        </p>
                        <input
                            type="text"
                            id="lastName"
                            placeholder='Last Name'
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div className='containerDates'>
                        <p>
                            Email
                        </p>
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='containerDates'>
                    <p>
                            Password
                        </p>
                        <input
                            type="pass"
                            id="password"
                            placeholder='******'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className='containerDates'>
                    <p>
                            Brithday
                        </p>
                        <input
                            type="date"
                            id="birthday"
                            placeholder='Birthday'
                            onChange={e => setBirthday(e.target.value)}
                            value={birthday}
                        />
                    </div>
                    <button type='submit' className='buttonAdd'>Add new User</button>
                    {   
                        userSelected !== null &&(
                            <button type='button' className='cancel' onClick={deselectUser} >
                                Cancel
                            </button>
                        )
                    }
                </div>

            </form>
        </div>
    );
};

export default UsersForm;