import React, { useEffect, useState } from "react"
import { storage } from "../firebaseConfig"

export default function DataImg (){

    const [url, setURL] = useState("");
    const [file, setFile] = useState(null);

    useEffect (
        ()=>{
            const ref = storage.ref();
            const getimg = storage.child();
            getimg
        .getDownloadURL()
        .then((url) => {
            console.log(url)
          setFile(null);
          setURL(url);
        });
        }
    )
    return(
        <img src={url} alt="" />
    )

};