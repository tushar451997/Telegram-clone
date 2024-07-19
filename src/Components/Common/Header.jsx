import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineSwitcher } from "react-icons/ai";
import { BiArrowBack, BiPlusCircle } from "react-icons/bi";
import { AiOutlineBug } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { MdOutlineReplay30 } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { useModal } from "../../Context/ModalContext";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/DarkModeContext";

const Header = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  function open() {
    setIsModalOpen(true);
  }

  function close() {
    setIsModalOpen(false);
  }
  return (
    <div className="px-4 py-2 flex gap-2 w-full  dark:bg-zinc-800 dark:text-white justify-between items-center">
      {/* desktop */}
      <div className="md:block hidden">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600/20 w-fit rounded-full">
            <BiMenu className="w-9 h-9 p-1 dark:text-white" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-72 origin-top-right ml-2 mt-4 font-semibold shadow-[0px_2px_3px_#ccc] rounded-xl border border-white/5 backdrop-blur-sm bg-white/85  dark:bg-zinc-800 dark:text-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <BsBookmark className="size-4 mr-2 fill-zinc-600/80 dark:fill-white" />
                Saved Messages
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <BsPerson className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Contacts
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <MdOutlineReplay30 className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                My Stories
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <RiSettings4Line className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Settings
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <BsMoonStars className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Night Mode
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <AiOutlineQuestionCircle className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Telegram Features
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <AiOutlineBug className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Report a Bug
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <AiOutlineSwitcher className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Switch to K Version
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-zinc-400/60">
                <BiPlusCircle className="size-5 mr-2 fill-zinc-600/80 dark:fill-white" />
                Install App
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      {/* mobile */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-10 bg-black/30"></div>
        </>
      )}
      <div
        className={`md:hidden flex items-center mt-1 ${showSearch && "hidden"}`}
      >
        <Button
          onClick={open}
          className="rounded-md text-sm font-medium text-black dark:text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          <BiMenu className="w-9 h-9 p-1 text-black dark:text-white" />
        </Button>

        <Dialog
          open={isModalOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed top-0 left-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center">
              <DialogPanel
                transition
                className="w-[80%] max-w-md h-screen data-[closed]:-translate-x-[500px] transition bg-white dark:bg-zinc-900 dark:text-white backdrop-blur-2xl duration-300 ease-linear"
              >
                <div className="flex justify-between dark:bg-gray-700 bg-gray-300 px-4 py-4">
                  <div>
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.anp0XQz24UeOEE5qf-5swQHaEo&pid=Api&rs=1&c=1&qlt=95&w=179&h=112"
                      alt=""
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  {isDarkMode ? (
                    <MdWbSunny
                      className="w-8 h-8"
                      onClick={() => setIsDarkMode(false)}
                    />
                  ) : (
                    <BsMoonStarsFill
                      className="w-8 h-8"
                      onClick={() => setIsDarkMode(true)}
                    />
                  )}
                </div>
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium dark:bg-gray-700 bg-gray-300 px-4 pb-4"
                >
                  Tushar Nehe
                  <p className="font-light text-sm">+91 9096088290</p>
                </DialogTitle>
                <div className="mt-4 px-4 flex flex-col gap-6">
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    My Profile
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    New Group
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Contact
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Calls
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    People Nearby
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Saved Messages
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Settings
                  </Link>
                  <div className="my-0.5 bg-slate-950 dark:bg-white/50 h-[0.1px]"></div>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Invite Friends
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold dark:text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Telegram Features
                  </Link>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <h2 className="font-semibold text-2xl ml-4">Telegram</h2>
      </div>
      {showSearch && (
        <Link
          to={"/"}
          onClick={() => setShowSearch(false)}
          className="hover:bg-gray-400/20 rounded-full sm:hidden block"
        >
          <BiArrowBack className="w-10 h-10 p-1 text-gray-600/80" />
        </Link>
      )}
      <div
        className={`bg-gray-200 dark:bg-zinc-700 dark:text-white w-full rounded-full flex items-center px-2 py-1 relative ${
          showSearch ? "flex md:hidden" : "hidden md:flex"
        }`}
      >
        <AiOutlineSearch className="w-8 h-8 p-1 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent px-2 py-2 rounded-full placeholder:text-gray-800 dark:placeholder:text-white outline-none text-gray-700"
        />
      </div>
      <div
        className={`hover:bg-gray-200 rounded-full ${
          showSearch ? "hidden" : "flex"
        } items-center px-2 py-1`}
        onClick={() => setShowSearch(true)}
      >
        <AiOutlineSearch className="w-8 h-8 p-1 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
