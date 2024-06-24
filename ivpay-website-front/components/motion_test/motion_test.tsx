'use client'

import { motion } from "framer-motion"
import { Button } from "../ui/button";

export default function MotionTest() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25
      }
    }
  };
  
  const liVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.25
      }
    }
  };
  
  const divVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.25
      }
    }
  };

  return (
    <div className="h-[200dvh] max-w-screen-sm mx-auto w-full">

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-4 m-4 flex-1 bg-slate-100 w-full"
      >
        <motion.li
          variants={liVariants}
          className="bg-slate-200"
        >
          <div className="flex justify-between">
            <motion.div
              variants={divVariants}
            >
              <Button>One</Button>
            </motion.div>
            <motion.div
              variants={divVariants}
            >
              <Button>Two</Button>
            </motion.div>
          </div>
        </motion.li>
        <motion.li
          variants={liVariants}
        >
          Two
        </motion.li>
        <motion.li
          variants={liVariants}
        >
          Three
        </motion.li>
      </motion.ul>
    </div>
  )
}
