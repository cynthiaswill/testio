import Chat from "./components/Chat";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import io from "socket.io-client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const socket = io();

function App() {
  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <BrowserRouter>
              <div className="App" style={{ display: "flex", flexDirection: "column" }}>
                <p>Hey {user.username}, welcome to chat app!</p>
                <Routes>
                  <Route path="/" element={<Home socket={socket} />} />
                  <Route
                    path="/chat/:roomname/:username"
                    element={<Chat socket={socket} />}
                  />
                </Routes>
                <button
                  onClick={signOut}
                  style={{
                    background: "#ffac41",
                    color: "black",
                    padding: "0.3rem 1rem 0.3rem 1rem",
                    borderRadius: "5px",
                    width: "100px",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Sign out
                </button>
              </div>
            </BrowserRouter>
          </div>
        )}
      </Authenticator>
    </>
  );
}

export default App;
