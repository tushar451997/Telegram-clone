import { HiPencil } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);

  //   const [showEditBtn, setShowEditBtn] = useState(false);
  const { chatId } = useParams();

  console.log(chats);

  const handleChats = async () => {
    try {
      const result = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats?page=1"
      );
      setChats(result.data.data.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    handleChats();
  }, []);

  return (
    <div className="relative md:h-[90vh] h-[98dvh] dark:bg-zinc-800 dark:text-white overflow-y-scroll chat-scroll chats-main mr-0.5 flex-col py-4 px-1 flex">
      <button
        //   onClick={scrollToBottom}
        className="fixed bottom-4 xl:left-[240px] right-5 w-fit edit-ico bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
      >
        <HiPencil className="w-8 h-8" />
      </button>
      {chats.map((chat) => (
        <Link
          to={`/chat/${chat.id}`}
          key={chat.id}
          className={` px-4 py-4 rounded-2xl ${
            Number(chatId) === chat.id
              ? "bg-blue-400 text-white hover:bg-blue-500"
              : "hover:bg-gray-500/20"
          } `}
          aria-label={`chat ${chat.creator.name}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112"
                alt=""
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h4 className="font-semibold">
                  {chat.creator.name || "Username"}
                </h4>
                <p className="text-sm">Messages</p>
              </div>
            </div>
            <div>
              <div className="flex items-center flex-col gap-2">
                {/* calculate last message time */}
                <p className="text-xs">21:90</p>
                <p className="bg-blue-500 text-white rounded-full h-6 w-6 flex justify-center items-center text-xs">
                  {chat.msg_count}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Chats;
