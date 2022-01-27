import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import GroupList from '../group/groupList';
import GroupDetails from '../group/groupDetails';
import Register from '../user/register';
import Account from '../user/account';

export default function Main() {

    const {authData} = useAuth();

    return (
        <div className='main'>
                <Routes>
                    <Route exact path='/' element={<GroupList/>} />
                    <Route path='/details/:id' element={<GroupDetails/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/account' element={<Account/>} />
                </Routes>
        </div>
    )
}
