import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { signin } from '../services/auth'
import '../css/signin.css'

export function Signin() {
    const history = useHistory()
    const [User, setUser] = useState()
    const [Password, setPassword] = useState()

    const submitLogin = async (e) => {  
        e.preventDefault()
        try {
            const user = await signin(User,Password)
            const Data = await user.json()
            localStorage.setItem('token', JSON.stringify(Data.token))
            localStorage.setItem('user',JSON.stringify(Data.user))
            history.push('/upload-file')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="form" onSubmit={submitLogin}>
            <div className="form-group">
                <input placeholder="E-mail" className="form-input" onChange={(e) => setUser(e.target.value)} type="email"/>
            </div>
            <div className="form-group">
                <input placeholder="Password" className="form-input" onChange={(e) => setPassword(e.target.value)} type="password"/>
            </div>
            <div className="form-group">
                <button className="form-btn">Iniciar Sesion</button>
            </div>
            <Link className="form-link" to="/signup" >Registrarse</Link>
        </form>
    )
}