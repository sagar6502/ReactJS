import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {

    const [username, setUserName] =useState('sagarsunar')

    const [password, setPasswordName] =useState('sunar123')

    const [showErrorMessage, setErrorMessage] =useState(false)

    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUserNameChange(event) {
        console.log(event.target.value)
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        console.log(event.target.value)
        setPasswordName(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }else{
            setErrorMessage(true)
        }
    }


    return (
        <div className="Login">
            <h1>Login Page</h1>
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