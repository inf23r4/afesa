import React,{useState} from 'react'
import firebase from "../../firebaseConfig"

export const ModalAdd=({showModalAdd, setShowModalAdd})=>{
    return<>{ showModalAdd ? <AddProducto/>: null }</>
};

function AddProducto() {

    const [datos, setDatos] = useState({
        name: '',
        price: '',
        description: '',
        stock:''
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
        firebase.database.collection("productos/")
            .add({
                name:datos.name,
                price:datos.price,
                description:datos.description,
                stock:datos.stock
            })
            .then(doc=>{
                window.location.reload(doc)
            })
            .catch(error=>{
                console.log("error",error)
            })
            
    }

    return (
       <form className="containerAdd" onSubmit={enviarDatos}>
            <h2>Ingrese Producto</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Titulo de Producto" onChange={handleInputChange} name="name"/>
            <br/>
            <input type="text" className="form-control" placeholder="Precio" onChange={handleInputChange} name="price"/>
            <br/>
            <textarea type="text"className="form-control" placeholder="description" onChange={handleInputChange} name="description"/>
            <br/>
            <button type="submit" className="btn btn-dark">Aceptar</button>

        </form>
    )
}
export default AddProducto;