import Chat from "./components/Chat";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import io from "socket.io-client";

const socket = io();

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
