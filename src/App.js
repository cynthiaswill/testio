import Chat from "./components/Chat";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect("/");
function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
    </React.Fragment>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat/:roomname/:username" element={<Chat socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
