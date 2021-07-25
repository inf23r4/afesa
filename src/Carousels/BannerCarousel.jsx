import React, { useState, useEffect } from 'react'
import { database } from "../firebaseConfig";

export default function BannerCarousel() {
     
  const [carts, setCarts] = useState([]);


    useEffect(() => {
        const fetchCarts = async () => {
          const dbRef = await database.ref("productos");
          dbRef.child("buzos").on("value", (snapshot)=>{
            const data = snapshot.val();
            const dataArr = Object.values(data)
            setCarts(dataArr)
            console.log (dataArr);
          });

        };
        fetchCarts();
      }, []);

    return (
        <>
            <ul>
        {carts.map((cart) => {
          return (
            <li key={cart}>
              <img width="100" height="50" src={cart.imgUrl} alt={cart.name} />
              <p>{cart.name}</p>
            </li>
          );
        })}
      </ul>
        </>
    )
          
};
