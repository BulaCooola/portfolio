import { motion } from "framer-motion";
import { container, item, image } from "../../projects/transitions";
import me from "../../assets/images/me.jpg";

function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center flex-1">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
        className="flex md:flex-row flex-col items-center md:my-8 mx-8"
      >
        <div className="flex flex-col md:w-2/3 sm:mx-2 rounded-lg my-8">
          {/* <motion.div variants={item} className="flex flex-col md:w-2/3 sm:mx-2 rounded-lg"> */}
          <motion.div variants={item} className="">
            <h1 className="text-6xl md:text-8xl mb-4 md:text-center font-bold text-serika-main">
              Hello!
            </h1>
          </motion.div>

          {/* <motion.div variants={item} className="flex flex-col md:w-2/3 sm:mx-2 rounded-lg"> */}
          <motion.div variants={item} className="">
            <p className="md:text-2xl text-md text-serika-text mb-4">
              My name is <a className="text-serika-main">Branden Bulatao</a> and I am a recent
              graduate at Stevens Institute of Technology majoring in Computer Science. I showcase
              my projects and web applications here.
            </p>
            <p className="md:text-2xl text-md text-serika-text mt-4">
              I am currently looking for any career opportunities to leverage the skills I've
              acquired during my studies.
            </p>
          </motion.div>
        </div>

        <motion.img
          src={me}
          alt={"Portrait of Me"}
          variants={image}
          initial="hidden"
          animate="show"
          className="md:w-110 w-2/3 sm:mx-2 aspect-square overflow-hidden object-contain rounded-xl mb-4 "
        />
        {/* <img src={me} alt={"Portrait of Me"} /> */}
      </motion.div>
    </div>
  );
}

export default HomeSection;
