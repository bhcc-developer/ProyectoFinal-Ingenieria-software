import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { signup } from '../services/auth'
import '../css/signin.css'

export function Signup() {
    const history = useHistory()
    const [User, setUser] = useState()
    const [Password, setPassword] = useState()

    const submitLogin = async (e) => {  
        e.preventDefault()
        try {
            await signup(User,Password)
            history.push('/')
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
                <button className="form-btn">Registrarse</button>
            </div>
            <Link className="form-link" to="/" >Iniciar Sesion</Link>
        </form>
    )
}