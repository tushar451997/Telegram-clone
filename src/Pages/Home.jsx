import React from "react";
import Sidebar from "../Components/Common/Sidebar";
import Messages from "../Components/Messages";

const Home = () => {
  return (
    <div className="flex bg-main">
      <Sidebar />
      <Messages />
    </div>
  );
};

export default Home;
