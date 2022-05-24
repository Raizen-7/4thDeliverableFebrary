import React, { useState } from 'react';

const UsersForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    const subMit = e => {
        e.preventDefault();
        const user = () => {
            first_name : firstName,
            last_name ; lastName, 
            email,
            password,
            birthday
        }
        
    }
    console.log(subMit);
    return (
        <div className='contentForm'>
            <form className='cardForm' onSubmit={subMit}>
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
                    <button className='buttonAdd'>Add new User</button>
                </div>

            </form>
        </div>
    );
};

export default UsersForm;