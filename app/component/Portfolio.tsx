"use client"
import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Database, Globe, Cloud, Lock, Menu, X, Code, BookOpen, Award, Briefcase } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const techStack = [
        {
            category: "Programming Languages",
            items: [
                { name: "Java", icon: "☕", level: 95 },
                { name: "Python", icon: "🐍", level: 78 },
                { name: "JavaScript", icon: "💛", level: 80 },
                { name: "PHP", icon: "🐘", level: 60 },
                { name: "Dart", icon: "🎯", level: 60 }
            ]
        },
        {
            category: "Frameworks",
            items: [
                { name: "Spring Boot", icon: "🍃", level: 95 },
                { name: "Node.js", icon: "📦", level: 60 },
                { name: "Next.js", icon: "△", level: 85 },
                { name: "React", icon: "⚛️", level: 70 },
                { name: "Express.js", icon: "🚂", level: 60 }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "MySQL", icon: "🐬", level: 90 },
                { name: "MongoDB", icon: "🍃", level: 65 },
                { name: "PostgreSQL", icon: "🐘", level: 50 }
            ]
        },
        {
            category: "DevOps",
            items: [
                { name: "Docker", icon: "🐳", level: 85 },
                { name: "Kubernetes", icon: "☸️", level: 60 },
                { name: "CI/CD", icon: "🔄", level: 75 }
            ]
        }
    ];

    const additionalSkills = [
        {
            icon: <Code className="w-12 h-12 text-blue-500" />,
            title: "Software Architecture",
            description: "REST API, Monolithic, Microservices, Event Driven"
        },
        {
            icon: <Database className="w-12 h-12 text-blue-500" />,
            title: "Data Structures & Algorithms",
            description: "Proficient in solving complex challenges"
        },
        {
            icon: <Cloud className="w-12 h-12 text-blue-500" />,
            title: "Cloud Services",
            description: "Experience with AWS services"
        },
        {
            icon: <Briefcase className="w-12 h-12 text-blue-500" />,
            title: "Project Management",
            description: "Experience with Jira, Slack, Scrum"
        }
    ];

    const studyCases = [
        {
            title: "Real Time Blog Application",
            description: "Developed a RESTful API architecture with Java and Spring Boot, implemented JWT authentication, and containerized with Docker.",
            tech: ["Java", "Spring Boot", "Docker", "JWT", "GitHub"]
        },
        {
            title: "The Wild Oasis",
            description: "Built a user-friendly web application using Next.js and Node.js, implementing SSR and SSG for optimization.",
            tech: ["Next.js", "Node.js", "SSR", "SSG", "API Integration"]
        },
        {
            title: "Movie Theater Management System",
            description: "Developed a comprehensive database management system using MySQL, including EER diagrams and DFDs.",
            tech: ["MySQL", "Database Design", "SQL", "Data Analysis"]
        },
        {
            title: "Todo Management System",
            description: "Full-stack application with React frontend and Spring Boot backend, featuring role-based access control and JWT authentication.",
            tech: ["React", "Spring Boot", "JWT", "MySQL", "RESTful API"]
        }
    ];

    const certificates = [
        { name: "Backend Development", issuer: "Udemy" },
        { name: "Java and Spring Developer", issuer: "Udemy" },
        { name: "Full-stack Developer", issuer: "Udemy" },
        { name: "Coding with Python and Big Data", issuer: "Samsung" },
        { name: "Cloud Foundation", issuer: "AWS" },
        { name: "Impact Social Lab", issuer: "USAID" }
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const rotateAnimation = {
        rotate: [0, 1, 0, -1, 0],
        transition: {
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
                    style={{ scaleX }}
                />
                <div className={`min-h-screen w-full transition-colors duration-300 ${
                    isDark ? 'bg-gray-900 text-white' : 'bg-amber-200 text-gray-900'
                }`}>
                    {/* Background Animation */}
                    <motion.div
                        className="fixed inset-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20' : 'bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-300 opacity-30'}`} />
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    </motion.div>

                    {/* Navigation */}
                    <motion.nav
                        className={`fixed w-full p-6 ${isDark ? 'bg-gradient-to-b from-gray-900/80 to-transparent' : 'bg-gradient-to-b from-amber-200/80 to-transparent'} backdrop-blur-sm z-50`}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    >
                        <div className="max-w-6xl mx-auto flex justify-between items-center">
                            <motion.h1
                                className="text-3xl font-bold hover:scale-105 transition-transform font-serif"
                                whileHover={{ scale: 1.05 }}
                            >
                                Tai Ngonheng
                            </motion.h1>
                            <div className="flex items-center space-x-4">
                                <div className="hidden sm:flex items-center space-x-4">
                                    <motion.a
                                        href="https://github.com/TaiNgonheng"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="mailto:heng68807@gmail.com"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail className="w-6 h-6"/>
                                    </motion.a>
                                </div>
                                <motion.button
                                    onClick={() => setIsDark(!isDark)}
                                    className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-colors`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isDark ? <Sun size={24}/> : <Moon size={24}/>}
                                </motion.button>
                                <motion.button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={`sm:hidden p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-colors`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                                </motion.button>
                            </div>
                        </div>
                        {/* Mobile menu */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    className="sm:hidden mt-4 flex justify-center space-x-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.a
                                        href="https://github.com/TaiNgonheng"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="mailto:heng68807@gmail.com"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-amber-300'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail className="w-6 h-6"/>
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.nav>

                    {/* Hero Section */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className="min-h-screen flex items-center pt-20 pb-20"
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                <motion.div
                                    className="md:w-1/2 text-center md:text-left"
                                    variants={boxVariants}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Tai Ngonheng</h2>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-400">Information Technology and Engineering</h3>
                                    <p className="text-lg mb-8 opacity-80">
                                        Dynamic software engineer with deep expertise in Java, Python, JavaScript, PHP, and Dart.
                                        Highly proficient in Data structures and Algorithms, with a proven track record of solving complex challenges.
                                        Collaborative team player with a passion for innovation and a commitment to staying ahead of the latest technology trends.
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-4">
                                        <motion.a
                                            href="mailto:heng68807@gmail.com"
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Contact Me
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/TaiNgonheng"
                                            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{scale: 0.95 }}
                                        >
                                            View Projects
                                        </motion.a>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="md:w-1/2"
                                    variants={boxVariants}
                                >
                                    <img
                                        src="https://cdn.dribbble.com/userupload/3898109/file/original-1e15ac48305378a87fc4997b2ad4c0ee.gif"
                                        alt="Programmer animation"
                                        className="w-full h-auto rounded-[15px] shadow-2xl"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Study Cases Section */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`py-20 ${isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-white'}`}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Project Experience</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {studyCases.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={boxVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className={`${isDark ? 'bg-white/10' : 'bg-gray-100'} backdrop-blur-md p-6 rounded-xl shadow-lg`}
                                    >
                                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{project.title}</h3>
                                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className={`px-2 py-1 ${isDark ? 'bg-blue-600/30 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs rounded-full`}>
                                        {tech}
                                    </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Certificates Section */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-[15px] shadow-lg`}
                        {...rotateAnimation}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Certifications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {certificates.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        variants={boxVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-lg flex items-center space-x-4`}
                                    >
                                        <Award className={`w-12 h-12 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                        <div>
                                            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>{cert.name}</h3>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Tech Stack Section */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`py-20 ${isDark ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-white'}`}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Technical Expertise</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {techStack.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        variants={boxVariants}
                                        className="mb-8"
                                    >
                                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{category.category}</h3>
                                        <div className="space-y-4">
                                            {category.items.map((tech, techIndex) => (
                                                <motion.div
                                                    key={techIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`${isDark ? 'bg-white/10' : 'bg-gray-100'} backdrop-blur-sm p-4 rounded-lg`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{tech.name}</span>
                                                        <span className="text-2xl">{tech.icon}</span>
                                                    </div>
                                                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2.5`}>
                                                        <motion.div
                                                            className="bg-blue-600 h-2.5 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${tech.level}%` }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                        ></motion.div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Additional Skills */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-[15px] shadow-lg`}
                        {...rotateAnimation}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Additional Skills</h2>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <img
                                        src="https://i.pinimg.com/originals/91/fc/40/91fc401ff8863e28cc5302208df2e29a.gif"
                                        alt="Technology illustration"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {additionalSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={boxVariants}
                                            whileHover={{ scale: 1.05 }}
                                            className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:rotate-3`}
                                        >
                                            <motion.div
                                                className={`inline-block p-4 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-100'} mb-4`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {skill.icon}
                                            </motion.div>
                                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{skill.title}</h3>
                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{skill.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Contact Section */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-white'} rounded-[15px] shadow-lg`}
                        {...rotateAnimation}
                    >
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>Connect With Me</h2>
                            <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                I'm always interested in hearing about new projects and opportunities.
                                Let's collaborate and build something amazing together!
                            </p>
                            <div className="flex justify-center gap-6">
                                <motion.a
                                    href="https://github.com/TaiNgonheng"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/60 hover:bg-white/80'} transition-all hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/60 hover:bg-white/80'} transition-all hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                                </motion.a>
                                <motion.a
                                    href="mailto:heng68807@gmail.com"
                                    className={`p-4 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/60 hover:bg-white/80'} transition-all hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Mail className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                                </motion.a>
                            </div>
                            <motion.p
                                className={`mt-12 text-xl font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                "Software is a great combination between artistry and engineering." - Bill Gates
                            </motion.p>
                            <motion.p
                                className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                © 2023 Tai Ngonheng. All rights reserved.
                            </motion.p>
                        </div>
                    </motion.section>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Portfolio;

