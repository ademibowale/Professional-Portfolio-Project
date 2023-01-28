import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-1xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I can help you build a product,feature or
        website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don't hesitate to contact me.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          
          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://magic-calculator-machine.netlify.app/"
          target="_blank"
          rel="noreferrer">
           
          <Project title="Project 1"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://tesla-clone-ey2n-lczk9quc6-ademibowale.vercel.app/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 2"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://leader-board-hycrown-app.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 3"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://ademibowale.github.io/Capstone_projects/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 4"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://corona-virus-pandemic.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 5"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://bookstore-cms-books.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 6"  />
          </a>
          </div>

          <div>
          <a className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold" href="https://nickemma.github.io/capstone-project-kanban/"
          target="_blank"
          rel="noreferrer">
          <Project title="Project 7"  />
          </a>
          </div>
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-1xl font-playfair font-semibold"
n          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
