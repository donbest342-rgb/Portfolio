import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Secondary School Certificate (WAEC and NECO) </CardTitle>
              <p className="text-sm text-muted-foreground">
                St Saviour's Secondary School Umuaka — 2017 – 2023
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Specialized in <strong>Software Architecture</strong>,
                <strong> Distributed Systems</strong>, and
                <strong> Artificial Intelligence Applications</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Assigned as Assembly Prefect of the school</li>
                <li>Performed duties excellently, ensuring smooth coordination of school Assembly and student acitvities.</li>
                <li>Lead work in the computer lab by setting up computer systems, contributing to efficient lab operations and student learning.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certificate For Desktop Publishing</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tripple C Mirco Systems — 2021 – 2022
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Gained strong foundation in <strong>Computer Appreciation</strong>,
                <strong> Desktop Publshing</strong>, and
                <strong> Canva Graphics</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Top 60% in Computer Appreciation and Desktop Publishing</li>
                <li>Created and lead a Computer Club and organized pracital lessons</li>
                <li>Graduated and got Certified as the Top Student of my Set</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web & UI/UX Design Certification</CardTitle>
              <p className="text-sm text-muted-foreground">
                Whoba Ogo Foundation ICT Center, Owerri — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Mastered WordPress design,<strong> plugin integration,</strong>
                <strong> customization,</strong>, and
                <strong>  responsive layout construction.</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Acquired a technical foundation in building functional, aesthetic websites</li>
                <li>Specialized in WordPress development, moving beyond templates to create custom user experiences</li>
                <li>My training emphasized the intersection of visual design and technical performance, ensuring sites are both beautiful and easy to navigate</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Web Development Program</CardTitle>
              <p className="text-sm text-muted-foreground">
                Whoba Ogo Foundation ICT Center, Owerri — 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Mastered Building scalable,<strong> Secured,</strong>
                <strong> high-performance digital solutions from the ground up.</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>I mastered the art of building complete web ecosystems</li>
                <li>integrating front-end aesthetics with robust back-end functionality</li>
                <li>With a foundation in WordPress development and custom coding, I bridge the gap between user experience and technical infrastructure to deliver seamless web applications</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
