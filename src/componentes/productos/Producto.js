import React,{useState} from "react"
import {Link} from "react-router-dom"
import "./Producto.css"
import firebase from "../../firebaseConfig"


function Producto(props){
    
    
    const {data,} = props

    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida==true?true:false)
    const id = props.id
    const {price,name,description}=props.data
    const [mensaje,setMensaje]=useState()

    const comprar = ()=>{
        console.log("dasds")
        if(data.stock-1==0){
            setMensaje("No hay stock")
        }else{
            setMensaje("Gracias por su compra")
        }
    }

    const deleteDatos = (event) => {
        event.preventDefault()
        firebase.database.doc("productos/"+id)
        .delete()
        .then(doc=>{
            window.location.reload(doc)
        })
        .catch(error=>{
            console.log("error",error)
        })
  
    }

    return(
        <div className="containerProd">
            <div className="prod">
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>

            <div>
            <button onClick={deleteDatos} className="btn btn-link">eliminar</button>
            </div>
            
            {
                extendida && 
                <div>Descripcion: {description}</div>
            }
            
            <button onClick={comprar}>comprar</button>
            {
                verDetalle && 
                <button ><Link to={"/producto/"+id }>Detalle</Link></button>
            }
            
            {mensaje}
            </div>
        </div>
    )
}
export default Producto;