import React from 'react'
import { Routes, Route } from "react-router-dom"
import TodoTable from '../Pages/Todo'
import AdminOutlits from './Outlits'
import StudentTable from '../Pages/Todo/student'
import Card from '../Pages/Todo/cards'

const Admin = () => {
    return (
        <Routes>
            <Route path="/private/*" element={<AdminOutlits />}>
                <Route path="todo" element={<TodoTable />} />
                <Route path="student" element={<StudentTable />} />
                <Route path="cards" element={<Card />} />
                <Route path="*" element={<>Page Not Found 404</>} />

            </Route>
        </Routes>


    )
}

export default Admin