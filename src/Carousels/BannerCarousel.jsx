import React, { useState, useEffect } from 'react'
import { database } from "../firebaseConfig";

export default function BannerCarousel() {
     
    

    useEffect(() => {
        const fetchCarts = async () => {
          const dbRef = await database.ref("productos");
          dbRef.child("buzos").on("value", (snapshot)=>{
            const data = snapshot.val();
            console.log(data)
          });

        };
        fetchCarts();
      }, []);

    return (
        <div>
            <p>add</p>  
        </div>
    )
};
