import React, { useState } from "react";
import Logo from "../img/chef1.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* For Tablets and Dekstops */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10 object-cover" src={Logo} alt="logo" />
          <span className="text-headingColor text-xl font-bold">Kiss</span>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor cursor-pointer text-2xl" />
            {cartItems && cartItems.length >= 1 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-cartNumBg">
                <p className="text-xs text-white font-semibold">
                  cartItems.length
                </p>
              </div>
            )}
          </div>

          <div className="relative" onClick={login}>
            <motion.img
              whileTap={{ scale: 0.6 }}
              className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
              >
                {user && user.email === "sumitsharma9968@gmail.com" && (
                  <Link to="/createItem">
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base rounded-tl-lg rounded-tr-lg">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base rounded-bl-lg rounded-br-lg"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* For Mobile Devices */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor cursor-pointer text-2xl" />
          {cartItems && cartItems.length >= 1 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-cartNumBg">
              <p className="text-xs text-white font-semibold">
                cartItems.length
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Logo} alt="logo" />
          <span className="text-headingColor text-xl font-bold">Town</span>
        </Link>

        <div className="relative" onClick={login}>
          <motion.img
            whileTap={{ scale: 0.6 }}
            className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
            >
              {user && user.email === "sumitsharma9968@gmail.com" && (
                <Link to="/createItem">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base rounded-tl-lg rounded-tr-lg">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex flex-col"
              >
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer transition-all hover:bg-slate-100 px-4 py-2">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer transition-all hover:bg-slate-100 px-4 py-2">
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer transition-all hover:bg-slate-100 px-4 py-2">
                  About us
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out cursor-pointer transition-all hover:bg-slate-100 px-4 py-2">
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out text-textColor text-base rounded-bl-lg rounded-br-lg"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
