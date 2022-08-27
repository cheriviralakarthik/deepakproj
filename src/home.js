import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./navbar";
import Drop from "./body";
import { auth } from "./firebase";

function Home({ presentUser }) {
  return (
    <div>
      <Nav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "180px",
        }}
      >
        <div>
          <h1> Hey {presentUser.email}</h1>
          <Drop />
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
