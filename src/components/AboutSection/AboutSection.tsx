import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        I am a seasoned Full-Stack Developer and UI/UX Designer with less than a
        years of experience delivering high-quality software solutions for
        global enterprises and startups. My career blends deep technical
        expertise with Teamwork skills, enabling me to design, build, work with a
        team to bring our ideas to live.
      </p>
      <Separator />
    </motion.div>
  );
};
