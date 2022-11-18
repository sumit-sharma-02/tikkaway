import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { homeMenuData } from "../utils/data";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl flex justify-center">
            <img src={Delivery} alt="delivery" />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your Town
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">
          We are now accepting all inquiries for full buyouts for private events
          and holiday parties, any day of the week, day or night. Our restaurant
          can accommodate up to 45 guests and potentially more. We can work with
          you on the menu, and curate beverages, beer, wine, and sake as well.
          Please contact us on +1234567890 to inquire!
        </p>

        <motion.a
          whileTap={{ scale: 0.75 }}
          href="#order"
          className="no-underline bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg
          text-orange-100"
        >
          {/* <a className="no-underline w-full h-full rounded-lg" href="#order"> */}
          Order Now
          {/* </a> */}
        </motion.a>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="herobg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {homeMenuData &&
            homeMenuData.map((item) => (
              <div
                key={item.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {item.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {item.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-sm text-red-600">$</span>
                  {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
