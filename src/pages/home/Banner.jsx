import { motion } from "motion/react";
import React from "react";
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
                    <motion.img
          src={team1}
          animate={{y:[100, 150, 100]}}
          transition={{duration: 5, repeat: Infinity}}
          className="max-w-sm shadow-2xl border-blue-500 border-l-8 border-b-8 rounded-t-4xl rounded-br-4xl"
        />
                    <motion.img
          src={team2}
          animate={{x:[100, 150, 100]}}
          transition={{duration: 10,delay:2, repeat: Infinity}}
          className="max-w-sm shadow-2xl border-blue-500 border-l-8 border-b-8 rounded-t-4xl rounded-br-4xl"
        />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              y: -20,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            New{" "}
            <motion.span
              animate={{
                color: ["#F54927", "#7D27F5", "#1C5C2C"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              opportunity
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
