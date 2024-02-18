import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'

export default function TodoApp() {
    return (
        <div className="TodoApp"> 
            
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                <Route path='/' element={<LoginComponent/> }/>
                    <Route path='/login' element={<LoginComponent/> }/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
        
    )
}










