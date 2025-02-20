"use client"
import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Database, Cloud, Menu, X, Code, Award, Briefcase } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const techStack = [
        {
            category: "Programming Languages",
            items: [
                { name: "Java", icon: "☕", level: 95 },
                { name: "Python", icon: "🐍", level: 90 },
                { name: "JavaScript", icon: "💛", level: 90 },
                { name: "PHP", icon: "🐘", level: 85 },
                { name: "Dart", icon: "🎯", level: 80 }
            ]
        },
        {
            category: "Frameworks",
            items: [
                { name: "Spring Boot", icon: "🍃", level: 95 },
                { name: "Node.js", icon: "📦", level: 90 },
                { name: "Next.js", icon: "△", level: 85 },
                { name: "React", icon: "⚛️", level: 90 },
                { name: "Express.js", icon: "🚂", level: 85 }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "MySQL", icon: "🐬", level: 90 },
                { name: "MongoDB", icon: "🍃", level: 85 },
                { name: "PostgreSQL", icon: "🐘", level: 80 }
            ]
        },
        {
            category: "DevOps",
            items: [
                { name: "Docker", icon: "🐳", level: 85 },
                { name: "Kubernetes", icon: "☸️", level: 80 },
                { name: "CI/CD", icon: "🔄", level: 85 }
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
                <div className={`min-h-screen w-full transition-colors duration-300 lg:px-1 ${
                    isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
                }`}>
                    {/* Background Animation */}
                    <motion.div
                        className="fixed inset-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-20' : 'bg-gradient-radial from-pink-100 via-white to-blue-100 opacity-40'}`} />
                    </motion.div>

                    {/* Navigation */}
                    <motion.nav
                        className={`fixed w-full p-6 ${isDark ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-gradient-to-b from-white/80 to-transparent'} backdrop-blur-sm z-50`}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    >
                        <div className="max-w-6xl mx-auto flex justify-between items-center lg:px-2">
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
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="mailto:heng68807@gmail.com"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail className="w-6 h-6"/>
                                    </motion.a>
                                </div>
                                <motion.button
                                    onClick={() => setIsDark(!isDark)}
                                    className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isDark ? <Sun size={24}/> : <Moon size={24}/>}
                                </motion.button>
                                <motion.button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={`sm:hidden p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
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
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-6 h-6"/>
                                    </motion.a>
                                    <motion.a
                                        href="mailto:heng68807@gmail.com"
                                        className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all hover:scale-110`}
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden"
                    >
                        <div className={`absolute inset-0 ${isDark ? '' : 'bg-[radial-gradient(circle_at_center,theme(colors.purple.600),theme(colors.purple.200),theme(colors.white))] opacity-50 blur-3xl'}`} />
                        <div className="max-w-6xl mx-auto px-4 relative mt-64 lg:px-0">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                <motion.div
                                    className="md:w-1/2 text-center md:text-left"
                                    variants={boxVariants}
                                >
                                    <h2 className="text-4xl md:text-7xl font-bold mb-4 ">Tai Ngonheng</h2>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-6 ">Information Technology and Engineering</h3>
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
                                            target="_blank"
                                        >
                                            Hire !
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
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img
                                        src="https://topwebpro.co.uk/wp-content/uploads/2023/02/top-10.gif"
                                        alt="3D monitor with user interface elements"
                                        className="w-full max-h-full "
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-900' : 'bg-purple-100'} rounded-[30px] shadow-lg`}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Project Experience</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {studyCases.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={boxVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className={`${isDark ? 'bg-gray-800' : 'bg-purple-50'} p-6 rounded-[20px] shadow-lg`}
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-900' : 'bg-purple-200/50'} rounded-[15px] shadow-lg`}
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
                                        className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg flex items-center space-x-4`}
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-900/50' : 'bg-purple-200'} rounded-[30px] shadow-lg relative overflow-hidden`}
                    >
                        <div className={`absolute inset-0 ${isDark ? 'bg-purple-900' : 'bg-purple-100'} opacity-30 blur-3xl -z-10`} />
                        <div className="max-w-6xl mx-auto px-4 relative">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Technical Expertise</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {techStack.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        variants={boxVariants}
                                        className="mb-8"
                                    >
                                        <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{category.category}</h3>
                                        <div className="space-y-4">
                                            {category.items.map((tech, techIndex) => (
                                                <motion.div
                                                    key={techIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-[20px]`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{tech.name}</span>
                                                        <span className="text-lg">{tech.icon}</span>
                                                    </div>
                                                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2`}>
                                                        <motion.div
                                                            className="bg-blue-600 h-2 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${tech.level}%` }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-12 text-center max-w-2xl mx-auto">
                                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Leveraging cutting-edge technologies and frameworks to build robust, scalable solutions.
                                    Continuous learning and adaptation to emerging tech trends ensure delivery of innovative solutions
                                    that meet modern development standards.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Additional Skills */}
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-200' : 'bg-purple-200'} rounded-[30px] shadow-lg relative overflow-hidden`}
                        {...rotateAnimation}
                    >
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>Additional Skills</h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <motion.img
                                        src="https://png.pngtree.com/png-clipart/20240927/original/pngtree-4-3d-cartoon-number-with-a-transparent-background-png-image_16099289.png"
                                        alt="3D number illustration"
                                        className="w-full h-auto rounded-xl"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {additionalSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={boxVariants}
                                            whileHover={{ scale: 1.05 }}
                                            className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:rotate-3`}
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`py-16 my-12 mx-12 ${isDark ? 'bg-gray-600' : 'bg-blue-200'} rounded-[30px] shadow-lg relative overflow-hidden`}
                        {...rotateAnimation}
                    >
                        <div className={`absolute inset-0 ${isDark ? 'bg-blue-900' : 'bg-blue-300'} opacity-30 blur-3xl -z-10`} />
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>Connect With Me</h2>
                            <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                I&apos;m always interested in hearing about new projects and opportunities.
                                Let&apos;s collaborate and build something amazing together!
                            </p>
                            <div className="flex justify-center gap-6">
                                <motion.a
                                    href="https://github.com/TaiNgonheng"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                                </motion.a>
                                <motion.a
                                    href="mailto:heng68807@gmail.com"
                                    className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}
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
                                &quot;Software is a great combination between artistry and engineering.&quot; - Bill Gates
                            </motion.p>
                        </div>
                    </motion.section>

                    {/* Footer */}
                    <footer className={`py-8 text-center ${isDark ? 'bg-black' : 'bg-white'}`}>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            © 2023 Tai Ngonheng. All rights reserved.
                        </p>
                    </footer>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Portfolio;

