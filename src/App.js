import logo from "./logo.svg";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./navbar";
import Drop from "./body";
import Home from "./home";
import List from "./list";
import UserAuth from "./userauth";

function App() {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setPresentUser(null);
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            presentUser ? <Home presentUser={presentUser} /> : <UserAuth />
          }
        ></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
