import React,{useState,useEffect} from "react"
import firebase from "../../firebaseConfig"
import Producto from "./Producto"


function DetallePage(props) {
    
    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);
       //componentDidMount
    useEffect(
        ()=>{
            firebase.database.doc("productos/"+id)
            .get()
            .then(doc=>{
                console.log("Doc",doc)
                setProducto(doc)
                setLoading(false)
            })
        },
    
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
            <div>
                <Producto id={producto.id} data={producto.data()}  verDetalle={false} extendida={true}/>
                
            </div>
        )
    }
        
    
}
export default DetallePage;

