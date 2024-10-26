import React from 'react'
import Sidebar from '../sidebar.jsx'
import ListKamar from '../Kamar/ListKamar.jsx'
const Admin = () => {
    
    return (
        <div className='w-screen h-screen flex justify-start items-start bg-primary'>
            <div className="w-auto h-auto flex justify-start items-start sticky top-0">
                <Sidebar /> 
            </div>
        <div className='text-3xl font-mona font-bold py-5'>
            <h1>Admin</h1>
            <ListKamar />
        </div>
        </div>
    )
}

export default Admin