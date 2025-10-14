import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024 – Till Date",
      title: "Senior UI/UX & Web Designer",
      subtitle: "G-Tech Group Int.",
      description:
        "Designed an Award winning user experience web app, got up to 4 star rating for my neat and clean work, mastered Wordpress and Figma which brings innovative ideas to life better than imagined.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – Till Date",
      title: "Full-Stack Developer",
      subtitle: "G-Tech Group Int.",
      description:
        "Contributed to the creation of immersive web applications using React, and Node.js for high-profile clients. Reduced application load times by 70% through advanced performance optimization. Introduced component-driven workflows that became the company's standard practice.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2022 – 2023",
      title: "Senior Graphic Designer",
      subtitle: "Expert Computer Umuaka",
      description:
        "Designed so many Wonderfull flyers, banners, poster, brouches and stickers, customers always left satisfied, archieving their desired design and still a clean informtion along.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2022",
      title: "Typiest and Office Assistant",
      subtitle: "Tripple C. Micro Systems Umuaka.",
      description:
      "Worked in public sector, attended to customers, did their typing work and assisted in printing and photocopying.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
