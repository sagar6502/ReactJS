import { useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp"> 
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<LoginComponent/> }/>
                    <Route path='/login' element={<LoginComponent/> }/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUserName] =useState('sagarsunar')

    const [password, setPasswordName] =useState('sunar123')

    const [showSuccessMessage, setSuccessMessage] =useState(false)

    const [showErrorMessage, setErrorMessage] =useState(false)

    const navigate = useNavigate();

    function handleUserNameChange(event) {
        console.log(event.target.value)
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        console.log(event.target.value)
        setPasswordName(event.target.value)
    }

    function handleSubmit(){
        if(username === 'sagarsunar' && password ==='sunar123'){
            setSuccessMessage(true)
            setErrorMessage(false)
            navigate(`/welcome/${username}`)
        }else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }


    return (
        <div className="Login">
            <h1>Login Page</h1>
            {showSuccessMessage && <div className='SuccessMessage'> Authenticated Successfully</div>}
            {showErrorMessage && <div className='ErrorMessage'> Authentication failed.
                                                                 Bad Credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}> Login</button>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div >
                Manage Your Todos -  <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>Oops! Something went wrong.</h1>
            <div>
                Apologies. Please, reach out to our team at ABC-DEF-GHIJ!
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date()
    const targetDate =  new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Learn CI', done:false, targetDate:targetDate},
                    {id: 2, description: 'Learn DevOps', done:false, targetDate:targetDate},
                    {id: 3, description: 'Learn Linux', done:false, targetDate:targetDate},
                    ]

    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do.</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>TargetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}