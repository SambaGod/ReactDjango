import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GroupList from './groupList';
import GroupDetails from './groupDetails';

export default function Main() {
    return (
        <div className='main'>
                <Routes>
                    <Route exact path='/' element={<GroupList/>} />
                    <Route path='/details/:id' element={<GroupDetails/>} />
                </Routes>
        </div>
    )
}
