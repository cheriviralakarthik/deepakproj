import React, { useState } from "react";
import { auth } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        // ..
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <center>
        <form autoComplete="off">
          <h1>Authentication</h1>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
          <button onClick={signUp}>Sign Up</button>
        </form>
      </center>
    </div>
  );
};

export default UserAuth;
