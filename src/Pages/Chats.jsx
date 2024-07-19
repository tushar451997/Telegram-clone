import Sidebar from "../Components/Common/Sidebar";
import Messages from "../Components/Messages";

const Chats = () => {
  return (
    <div className="flex bg-main">
      <Sidebar />
      <Messages />
    </div>
  );
};

export default Chats;
