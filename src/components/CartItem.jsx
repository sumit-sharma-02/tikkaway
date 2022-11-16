import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
let items = [];

const CartItem = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(1);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
      });
      cartDispatch();
    } else if (action == "remove") {
      setQty(qty - 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty -= 1;
        }
      });
      cartDispatch();
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        src={item.imageURL}
      />
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {item.price * item.qty}
        </p>
      </div>
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <AiOutlineMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item.qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <AiOutlinePlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
