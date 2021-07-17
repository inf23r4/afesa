import React, { useState, useEffect } from 'react'
import { base } from "../firebaseConfig"

const db = base.firestore();

function ConfImg() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          const usersCollection = await db.collection("users").get();
          setUsers(
            usersCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchUsers();
      }, []);

    return (
        <div>
                  <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img width="100" height="50" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
            
        </div>
    )
}
export default ConfImg;