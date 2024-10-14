"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { Button, Card } from "./components";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FileTextIcon,
  CloudIcon,
  ServerIcon,
  CodeIcon,
  RocketIcon,
  ExternalLinkIcon,
} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    backgroundControls.start({
      backgroundPosition: `${-mousePosition.x / 50}px ${
        -mousePosition.y / 50
      }px`,
    });
  }, [mousePosition, backgroundControls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={backgroundControls}
        style={{
          backgroundImage: 'url("/placeholder.svg?height=2000&width=2000")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-2 text-center">
              Manuel Lorenzo G. Pereira
            </h1>
            <h2 className="text-2xl text-gray-300 mb-4 text-center">
              Software Engineer
            </h2>
            <div className="flex space-x-4">
              <SocialButton
                link="https://github.com/Kylef67"
                icon={<GithubIcon className="h-4 w-4" />}
              />
              <SocialButton
                link="https://www.linkedin.com/in/manuel-lorenzo-pereira-01a20b101/"
                icon={<LinkedinIcon className="h-4 w-4" />}
              />
              <SocialButton icon={<MailIcon className="h-4 w-4" />} />
            </div>
          </motion.div>

          <Section title="Skills" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard
                icon={<CloudIcon className="h-6 w-6" />}
                title="AWS"
                description="Lambda, S3, EC2, RDS, SNS, SQS"
              />
              <SkillCard
                icon={<ServerIcon className="h-6 w-6" />}
                title="Backend"
                description="Express, Laravel, Serverless"
              />
              <SkillCard
                icon={<CodeIcon className="h-6 w-6" />}
                title="Frontend"
                description="React, Vue, Blade"
              />
              <SkillCard
                icon={<FileTextIcon className="h-6 w-6" />}
                title="Other"
                description="Git, Scrum, WebSocket"
              />
            </div>
          </Section>

          <Section title="Projects" delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ProjectCard
                title="Will be added soon..."
                description="..."
                imageUrl="/placeholder.svg?height=200&width=300"
                projectUrl="https://project1.com"
              />
              {/* <ProjectCard
                title="Project 2"
                description="A brief description of Project 2"
                imageUrl="/placeholder.svg?height=200&width=300"
                projectUrl="https://project2.com"
              />
              <ProjectCard
                title="Project 3"
                description="A brief description of Project 3"
                imageUrl="/placeholder.svg?height=200&width=300"
                projectUrl="https://project3.com"
              /> */}
            </div>
          </Section>

          <Section title="Experience" delay={0.4}>
            <div className="space-y-8">
              <ExperienceCard
                title="Software Engineer"
                company="NuSkin Enterprises Philippines"
                period="June 2021 – Present"
                description="Collaborated as a Fullstack Web Developer with team counterparts in US and India. Focused on Search & Discounts and Product domains."
                technologies={[
                  "NodeJS",
                  "Serverless Framework",
                  "AWS",
                  "VueJS",
                  "React",
                  "AEM",
                  "SOLR Apache",
                ]}
              />
              <ExperienceCard
                title="Senior Web Developer"
                company="Accur8 Enterprise Solutions Inc."
                period="April 2017 – June 2021"
                description="Conducted as a Fullstack Developer. Tasked as a Dev Lead and has been leading 2 or more projects simultaneously (ERP Apps)."
                technologies={[
                  "NodeJS",
                  "Serverless Framework",
                  "AWS",
                  "AngularJS",
                  "MongoDB",
                  "Laravel",
                ]}
              />
              <ExperienceCard
                title="Junior - Senior Web Developer"
                company="Cr8v Web Solutions"
                period="August 2014 – April 2017"
                description="Responsible for the development and maintenance of a food e-commerce site (Jollibee Foods Corporation). Also shared a role as Dev Lead & DevOps Engineer."
                technologies={[
                  "CodeIgniter",
                  "Laravel",
                  "LAMP",
                  "jQuery",
                  "AWS",
                ]}
              />
            </div>
          </Section>

          <Section title="Certifications" delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CertificationCard
                link="https://www.credly.com/badges/927a1907-6dbc-4b62-b6bd-4fb74f2635c2/public_url"
                title="AWS Certified DevOps - Professional"
                period="Jul 2024 – Jul 2027"
              />
              <CertificationCard
                link="https://www.credly.com/badges/398966f0-c3e8-4ad7-b4e1-af4f81a9d6cf/public_url"
                title="AWS Certified Developer - Associate"
                period="Dec 2021 – Jul 2027"
              />
            </div>
          </Section>

          <Section title="Education" delay={0.8}>
            <div className="space-y-8">
              <Card className="bg-gray-800 bg-opacity-50 text-white backdrop-blur-lg gap-4">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-gray-300">
                    Informatics International College (Now Gardner College –
                    Cainta)
                  </p>
                  <p className="text-gray-400">2014</p>
                </CardContent>
              </Card>
            </div>
          </Section>
        </main>
      </div>
      <StarField />
    </div>
  );
}

function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div className={`${className}`}>{children}</div>;
}

function Badge({
  children,
}: {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  className?: string;
}) {
  return (
    <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
      {children}
    </span>
  );
}

function Section({
  title,
  children,
  delay,
}: {
  title: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold mb-4 flex items-center">
        <RocketIcon className="mr-2" />
        {title}
      </h3>
      {children}
    </motion.section>
  );
}

function SocialButton({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link?: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        onClick={() => window.open(link, "_blank")}
        variant="outline"
        size="icon"
        className="bg-gray-800 bg-opacity-50 backdrop-blur-lg"
      >
        {icon}
      </Button>
    </motion.div>
  );
}

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-800 bg-opacity-50 text-white backdrop-blur-lg">
        <CardContent className="p-6 flex flex-col items-center text-center">
          {icon}
          <h4 className="text-lg font-semibold mt-2">{title}</h4>
          <p className="text-sm text-gray-300 mt-1">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-800 bg-opacity-50 text-white backdrop-blur-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
        />
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-300 mb-4">{description}</p>
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="w-full">
              View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-800 bg-opacity-50 text-white backdrop-blur-lg">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-1">{title}</h4>
          <p className="text-gray-300 mb-2">{company}</p>
          <p className="text-gray-400 text-sm mb-3">{period}</p>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-indigo-600 text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CertificationCard({
  title,
  period,
  link,
}: {
  title: string;
  period: string;
  link?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(link, "_blank")}
    >
      <Card className="bg-gray-800 bg-opacity-50 text-white backdrop-blur-lg">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-400">{period}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function StarField() {
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
