import React from "react";
import Header from "./Header";
import Chats from "../../Components/Chats";
import { useParams } from "react-router-dom";
import { useModal } from "../../Context/ModalContext";

const Sidebar = () => {
  const { chatId } = useParams();
  const { isModalOpen } = useModal();
  return (
    <>
      <div
        className={`sm:min-w-[320px] min-w-full duration-500 bg-white dark:bg-zinc-800 dark:text-white ${
          chatId ? "md:block hidden" : "block"
        } ${isModalOpen ? "translate-x-10" : ""}`}
      >
        <Header />
        <Chats />
      </div>
    </>
  );
};

export default Sidebar;
