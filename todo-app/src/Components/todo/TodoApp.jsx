import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'

function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp"> 
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                    <Route path='/' element={<LoginComponent/> }/>
                        <Route path='/login' element={<LoginComponent/> }/>

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                            }
                        />

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                             }
                        />

                        <Route path='*' element={<ErrorComponent/>}/>

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                 <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                    </Routes>
                </BrowserRouter>
            
            </AuthProvider>
        </div>
    )
}










