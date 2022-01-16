import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import GroupList from './groupList';
import GroupDetails from './groupDetails';
import Register from './register';

export default function Main() {

    const {authData} = useAuth();

    return (
        <div className='main'>
            {authData && <h3>{authData.user.username}</h3>}
                <Routes>
                    <Route exact path='/' element={<GroupList/>} />
                    <Route path='/details/:id' element={<GroupDetails/>} />
                    <Route path='/register' element={<Register/>} />
                </Routes>
        </div>
    )
}
