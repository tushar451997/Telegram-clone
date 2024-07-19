import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./Pages/Chats";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
