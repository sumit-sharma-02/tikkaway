/* eslint-disable  no-unused-vars */
import React, { useEffect, useState } from "react";
import { GiChickenOven, GiBowlOfRice, GiFruitBowl } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { FaIceCream, FaFish } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filterMenu, setfilterMenu] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {}, [filterMenu]);

  const renderIcon = (icon, index) => {
    const Icon = icon;
    return (
      <Icon
        key={index}
        className="w-[22px] h-[22px] group-hover:text-textColor"
      />
    );
  };

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <p
        className="text-2xl font-semibold capitalize
          text-headingColor relative before:absolute before:rounded-lg 
          before:content before:w-16 before:h-1 before:-bottom-2 
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600
          transition-all ease-in-out duration-100"
      >
        Our Hot Dishes
      </p>

      <div
        className="w-full flex items-center justify-start
      lg:justify-center gap-8 py-6 px-[10px] overflow-x-scroll scrollbar-none"
      >
        {categories &&
          categories.map((category, index) => (
            <motion.div
              whileTap={{ scale: 0.75 }}
              key={category.id}
              className={`group ${
                filterMenu === category.urlParamName
                  ? "bg-cartNumBg"
                  : "bg-card"
              } w-24 min-w-[94px] h-28 
                cursor-pointer rounded-lg drop-shadow-xl flex flex-col 
                gap-3 items-center justify-center hover:bg-cartNumBg`}
              onClick={() => setfilterMenu(category.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filterMenu === category.urlParamName
                    ? "bg-white text-textColor"
                    : "bg-cartNumBg text-white"
                } shadow-lg group-hover:bg-white 
                flex items-center justify-center`}
              >
                {renderIcon(category.icon, category.id + "-dsf3-sdw" + index)}
              </div>
              <p
                className={`text-sm ${
                  filterMenu === category.urlParamName
                    ? "text-white"
                    : "text-textColor"
                }  group-hover:text-white`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>

      <div className="w-full">
        <RowContainer
          flag={false}
          data={foodItems?.filter((item) => item.category === filterMenu)}
        />
      </div>
    </div>
  );
};

export default MenuContainer;
