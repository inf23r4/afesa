import React, { useState } from 'react'
import "./ModalRegistro.css"
import firebase from "../../firebaseConfig"


export const ModalReg=({showModalReg, setShowModalReg})=>{
    return<>{ showModalReg ? <Registro/>: null }</>
    
};

function Registro() {

    const [message, setMesssage] = useState ([])
    const [datos, setDatos] = useState({
      user: '',
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
        firebase.auth.createUserWithEmailAndPassword(datos.email, datos.password)
        .then(data=>{
            
        })
        .catch(data=>{
            console.log(data)
            setMesssage(data.message)
        }
        )
    }

    return (
        <form className="container" onSubmit={enviarDatos}>
            <h2>Ingrese Datos</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Usuario" onChange={handleInputChange} name="user"/>
            <br/>
            <input type="email" className="form-control" placeholder="Email" onChange={handleInputChange} name="email"/>
            <br/>
            <input type="contraseña" className="form-control" placeholder="Contraseña" onChange={handleInputChange} name="password"/>
            <span className="m-3">{message}</span>
            <br/>
            <button type="submit" className="btn btn-dark">Aceptar</button>

        </form>
    )
};

export default Registro;