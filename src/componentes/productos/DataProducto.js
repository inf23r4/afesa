import React,{useState,useEffect} from "react"
import firebase from "../../firebaseConfig"
import "./DataProducto.css"
import Producto from "./Producto"


function DataProducto() {
    
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(
        ()=>{
        
            firebase.database.collection("productos")
            .get()
            .then(querySnapshot=>{
                setProductos(querySnapshot.docs);
                setLoading(false);

            })
        },
        []
    )

    
    if(loading){
        return(
            /* */
            <div>
                loading...
            </div>
        )
    }else{
        return(
            /* */
            <div className="CardProducto">  
                {productos.map(producto=><Producto id={producto.id} data={producto.data()} />)}
            </div>
            
        )
    }
        
        
    
}
export default DataProducto;