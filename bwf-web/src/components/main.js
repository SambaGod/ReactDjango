import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GroupList from './groupList';

export default function Main() {
    return (
        <div className='main'>
                <Routes>
                    <Route exact path='/' element={<GroupList />} />
                </Routes>
        </div>
    )
}
