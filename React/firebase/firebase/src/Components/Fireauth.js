import React,{useEffect, useState} from 'react'
import { auth } from '../firebase';
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
function Fireauth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    let create = async () => {
        try {
          let res = await auth.createUserWithEmailAndPassword(email, password);
          console.log(res);
        } catch (error) {
          console.error(error.message);
        }
      };

      useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) => 
          setUser(user))
          return () => {
            unsub();
          }
      },[])

      let logout = async() => {
        await auth.signOut();
      }
      let login = async() => {
        await auth.signInWithEmailAndPassword(email, password);
      }
  return (
    <>
    {
      user == null?
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>login</button>
      </div>:
      <>
      <div>{user.uid}</div>
      <button onClick={logout}>Logout</button>
      </>
    }
    </>
  );
}

export default Fireauth