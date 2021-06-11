import React, { useState } from 'react'
import "./ModalLogin.css"
import firebase from "../../firebaseConfig"
import { useHistory } from "react-router-dom"


export const ModalLog =({showModalLog, setShowModalLog})=>{
    return<>{ showModalLog ? <Login/>: null }</>
    
};

function Login() {

    const history = useHistory()

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        firebase.auth.signInWithEmailAndPassword(datos.email,datos.password)
        .then(data=>{
          console.log(data)
          history.push("/Home") 
        })
        .catch(data=>{
            console.log(data)
        })
    }

    return (
        <form className="container" onSubmit={enviarDatos}>
            <h2>Login</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Usuario" onChange={handleInputChange} name="email"/>
            <br/>
            <input type="text" className="form-control" placeholder="Contraseña" onChange={handleInputChange} name="password"/>
            <br/>
            <button type="submit" className="btn btn-dark">Aceptar</button>

        </form>
    )
};

export default Login;

