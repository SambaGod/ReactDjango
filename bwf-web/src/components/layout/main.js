import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import GroupList from '../group/groupList';
import GroupDetails from '../group/groupDetails';
import Register from '../user/register';

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
