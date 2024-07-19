import { MdDeleteOutline } from "react-icons/md";
import { FaRegHandPaper } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { BsFlag } from "react-icons/bs";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
// src/components/Messages.tsx
import { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import { AiOutlinePaperClip, AiOutlineSearch } from "react-icons/ai";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import logo from "../Assets/Svg/Logo.svg";
import { Link, useParams } from "react-router-dom";
import useFetchMessages from "../Hooks/UseFetchMessages";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import EmojiPicker from "emoji-picker-react";

const Messages = () => {
  const { chatId } = useParams();
  const { messages, error, sendMessage } = useFetchMessages(chatId);
  const [showScrollDownIcon, setShowScrollDownIcon] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null);
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener("scroll", handleScroll);
      return () => {
        chatContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      await sendMessage(inputValue);
      setInputValue("");
    }
  };

  if (error) {
    return <div>Error fetching messages</div>;
  }

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    setShowScrollDownIcon(scrollTop + clientHeight < scrollHeight - 50);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={` flex-col w-full  dark:bg-zinc-800 dark:text-white relative ${
        chatId ? "flex" : "hidden"
      }`}
    >
      <div className="py-2 bg-white  dark:bg-zinc-800 dark:text-white shadow-[0px_0px_2px_#000] flex justify-between md:px-4 px-2">
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="hover:bg-gray-400/20 rounded-full sm:hidden block"
          >
            <BiArrowBack className="w-10 h-10 p-1 text-gray-600/80" />
          </Link>
          <div>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112"
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl">
              {messages[0]?.sender.name || "Username"}
            </h4>
            <p className="text-sm">last seen just now</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineSearch className="w-8 h-8 p-1 text-gray-600" />
          <div className=" text-right">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600/20 w-fit rounded-full">
                <BsThreeDotsVertical className="w-7 h-7 p-1 text-gray-600" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right font-semibold mt-6 shadow-lg rounded-xl border border-white/5 backdrop-blur-sm  dark:bg-zinc-800 dark:text-white bg-white/85 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <BsPersonPlus className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Add to contacts
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <BsCameraVideo className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Video Call
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <MdOutlineNotificationsOff className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Mute...
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <RiCheckboxCircleLine className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Select messages
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <BsFlag className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Report
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <GoGift className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Gift Premium
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <FaRegHandPaper className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                    Block user
                  </button>
                </MenuItem>
                <div className="my-1 h-px bg-zinc-800/20" />
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 text-red-600 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                    <MdDeleteOutline className="size-5 mr-2 fill-red-600/80" />
                    Delete chat
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="absolute md:flex hidden items-center gap-2 py-4 px-20 mx-auto -translate-x-1/2 translate-y-[0%] z-20 bottom-2 left-1/2">
          <div className="bg-slate-50  dark:bg-zinc-800 dark:text-white flex items-center px-3 py-3 rounded-2xl">
            <div className="w-8 h-8 mr-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112"
                alt=""
                className="rounded-full w-8 h-8 object-cover"
              />
            </div>
            <div className="relative">
              {showEmojiPicker && (
                <div className="absolute bottom-10">
                  <EmojiPicker />
                </div>
              )}
              <BsEmojiSmile
                className="w-8 h-8 p-1 text-gray-700 dark:text-white"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
            </div>
            <input
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Message"
              className="xl:min-w-[400px] lg:min-w-[420px] bg-transparent min-w-fit  px-2 max-h-[400px] text-wrap outline-none"
            />
            <AiOutlinePaperClip className="w-8 h-8 p-1 hover:text-blue-500 cursor-pointer text-gray-700 dark:text-white" />
          </div>
          <div className=" rounded-full">
            {inputValue.length > 0 ? (
              <MdSend
                onClick={handleSendMessage}
                className="w-10 h-10 p-2 text-purple-600 cursor-pointer"
              />
            ) : (
              <BiMicrophone className="w-10 h-10 p-2 text-gray-700 dark:text-white" />
            )}
          </div>
        </div>
        {/* mobile -screen input */}
        <div className="fixed bottom-0 bg-slate-50 dark:bg-zinc-800 w-full left-0 md:hidden flex items-center gap-2 z-20">
          <div className="bg-slate-50  dark:bg-zinc-800 dark:text-white flex items-center justify-between w-full px-3 py-2 rounded-2xl">
            <div className="w-8 h-8 mr-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112"
                alt=""
                className="rounded-full w-8 h-8 object-cover"
              />
            </div>
            <div className="relative">
              {showEmojiPicker && (
                <div className="absolute bottom-10">
                  <EmojiPicker />
                </div>
              )}
              <BsEmojiSmile
                className="w-8 h-8 p-1 text-gray-700 dark:text-white"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
            </div>
            <input
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Message"
              className=" min-w-fit bg-transparent  px-2 max-h-[400px] text-wrap outline-none"
            />
            <AiOutlinePaperClip className="w-8 h-8 p-1 hover:text-blue-500 cursor-pointer text-gray-700 dark:text-white" />
            {inputValue.length > 0 ? (
              <MdSend
                onClick={handleSendMessage}
                className="w-10 h-10 p-2 text-purple-600 cursor-pointer"
              />
            ) : (
              <BiMicrophone className="w-10 h-10 p-2 text-gray-700 dark:text-white" />
            )}
          </div>
        </div>
        <div
          className="md:h-[83vh] h-[90dvh] overflow-y-scroll hide-scroll xl:px-80 md:px-20 px-2 py-4 mr-1"
          ref={chatContainerRef}
        >
          {messages?.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center gap-4 mb-4 ${
                  message.sender_id === 1 ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender_id !== 1 && (
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112" // Replace with the appropriate image URL for the sender
                    alt={message.sender.name}
                  />
                )}
                <div>
                  <p
                    className={`text-sm px-5 py-2 rounded-3xl ${
                      message.sender_id === 1
                        ? "bg-green-200 dark:bg-green-600"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {message.message}
                  </p>
                  <span className="text-xs text-gray-800">
                    {new Date(message.created_at).toLocaleTimeString()}
                  </span>
                </div>
                {message.sender_id === 1 && (
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112" // Replace with the appropriate image URL for the sender
                    alt={message.sender.name}
                  />
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-800 flex flex-col items-center justify-center h-[70vh]">
              <img src={logo} alt="telegram-logo" className="w-40" />
              <h2 className="text-2xl font-semibold">Start Conversation</h2>
              No messages
            </div>
          )}
          <button
            onClick={scrollToBottom}
            className={`fixed md:bottom-10 bottom-20 md:right-10 right-2 duration-100 ease-linear bg-white dark:bg-zinc-700 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition ${
              showScrollDownIcon
                ? "translate-y-0 opacity-100 bottom-10"
                : "translate-y-20 opacity-0 bottom-0"
            } `}
          >
            <BsArrowDownShort className="w-10 h-10 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
