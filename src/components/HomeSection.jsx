import { motion } from "framer-motion";
import { container, item, image } from "../projects/transitions";
import me from "../assets/images/me.jpg";

function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center flex-1">
      <motion.section
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
            <p className="md:text-2xl text-md text-serika-text">
              My name is <a className="text-serika-main">Branden Bulatao</a> and I am a recent
              graduate at Stevens Institute of Technology majoring in Computer Science. I have a
              strong passion in <a className="text-serika-main">web development</a> and have a
              background in full-stack development. I am currently looking for any career
              opportunities to leverage the skills I've acquired during my studies. In addition, I
              am an NCAA DIII wrestler at
              <a className="text-serika-main hover:text-blue-400" href="https://stevensducks.com/">
                {" "}
                Stevens Athletics
              </a>
              , and I have a strong passions for{" "}
              <a
                className="text-serika-main hover:text-blue-400"
                href="https://brandenbphoto.myportfolio.com/home"
              >
                {" "}
                photography
              </a>
              , surfing, traveling, and some video games.
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
      </motion.section>
    </div>
  );
}

export default HomeSection;
