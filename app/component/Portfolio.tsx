"use client"
import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Database, Globe, Cloud, Lock, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Portfolio = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const techStack = [
        {
            category: "Programming Languages",
            items: [
                {
                    name: "Java",
                    icon: "☕",
                    level: 80,
                    description: "Core language for backend development, Spring Boot applications, and enterprise solutions"
                },
                {
                    name: "JavaScript",
                    icon: "💛",
                    level: 85,
                    description: "Frontend and Node.js backend development, modern ES6+ features"
                },
                {
                    name: "Python",
                    icon: "🐍",
                    level: 70,
                    description: "Data processing, automation scripts, and basic ML applications"
                }
            ]
        },
        {
            category: "Frontend Frameworks",
            items: [
                {
                    name: "React.js",
                    icon: "⚛️",
                    level: 88,
                    description: "Building interactive UIs with hooks, context, and modern React patterns"
                },
                {
                    name: "Next.js",
                    icon: "△",
                    level: 85,
                    description: "Server-side rendering, static site generation, and full-stack React applications"
                },
                {
                    name: "Tailwind CSS",
                    icon: "🎨",
                    level: 80,
                    description: "Utility-first CSS framework for rapid UI development"
                }
            ]
        },
        {
            category: "Backend Technologies",
            items: [
                {
                    name: "Spring Boot",
                    icon: "🍃",
                    level: 95,
                    description: "Java-based framework for building microservices and web applications"
                },
                {
                    name: "Node.js",
                    icon: "📦",
                    level: 78,
                    description: "JavaScript runtime for building scalable network applications"
                },
                {
                    name: "Express.js",
                    icon: "🚂",
                    level: 70,
                    description: "Web application framework for Node.js backend development"
                }
            ]
        }
    ];

    const additionalSkills = [
        {
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            title: "Web Development",
            description: "Full-stack web development with modern frameworks and responsive design principles"
        },
        {
            icon: <Cloud className="w-8 h-8 text-blue-500" />,
            title: "Cloud Services",
            description: "Experience with AWS services and cloud deployment strategies"
        },
        {
            icon: <Lock className="w-8 h-8 text-blue-500" />,
            title: "Security",
            description: "Understanding of web security practices and authentication systems"
        },
        {
            icon: <Database className="w-8 h-8 text-blue-500" />,
            title: "Databases",
            description: "Proficient in SQL and NoSQL databases including MongoDB and MySQL"
        }
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
                style={{ scaleX }}
            />
            <div className={`min-h-screen w-full transition-colors duration-300 ${
                isDark ? 'bg-gray-700 text-white' : 'bg-white-500 text-gray-900'
            }`}>
                {/* Background Animation */}
                <div className="fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-blue-200 to-amber-50 dark:from-purple-500 dark:via-white dark:to-pink-900" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                {/* Navigation */}
                <nav className="fixed w-full p-10 backdrop-blur-sm dark:bg-gray-900/70 z-50 ">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <h1 className="text-4xl font-bold hover:scale-105 transition-transform font-serif">
                            Tai Ngonheng
                        </h1>
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center space-x-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                                >
                                    <Github className="w-6 h-6"/>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                                >
                                    <Linkedin className="w-6 h-6"/>
                                </a>
                                <a
                                    href="mailto:heng68807@gmail.com"
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                                >
                                    <Mail className="w-6 h-6"/>
                                </a>
                            </div>
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {isDark ? <Sun size={24}/> : <Moon size={24}/>}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="sm:hidden mt-4 flex justify-center space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Github className="w-6 h-6"/>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Linkedin className="w-6 h-6"/>
                            </a>
                            <a
                                href="mailto:heng68807@gmail.com"
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Mail className="w-6 h-6"/>
                            </a>
                        </div>
                    )}
                </nav>

                {/* Hero Section and GIF */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-24 pb-12"
                >
                    <div className="max-w-6xl mx-auto px-4 mt-64" >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                                    Hi, I&apos;m <span className="text-purple-600 font-serif">Tai Ngonheng</span>
                                </h1>
                                <h2 className="text-xl font-bold mb-4 text-purple-600 font-sans">Bachelor in Information Technology and Engineering</h2>
                                <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-6 font-sans">
                                    I am Tai Ngonheng, a third-year student majoring in Information Technology and Engineering at the Royal University of Phnom Penh. I am passionate about exploring the potential of technology to drive meaningful change and improve everyday life.

                                    As a dedicated learner, I enjoy taking on challenges that push me to grow both academically and personally. My journey in IT has been fueled by curiosity and a desire to contribute to impactful solutions.

                                    I am eager to continue developing my knowledge and experiences while striving to make a positive difference through technology.
                                </p>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <a
                                        href="mailto:heng68807@gmail.com"
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                                    >
                                        Text Me!!
                                    </a>
                                    <a
                                        href="https://github.com/TaiNgonheng"
                                        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105" target={'_blank'}
                                    >
                                        View Projects
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="
                               https://media3.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=6c09b952uhw1mzns7uffh83tw8unay70b7f68we0272dy1a8&ep=v1_gifs_search&rid=giphy.gif&ct=g
                                    "
                                    alt="Minimalist landscape animation"
                                    className="w-full h-96 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Tech Stack Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="py-20"
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Technical Expertise</h2>
                        {techStack.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-16"
                            >
                                <h3 className="text-2xl font-bold mb-8">{category.category}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {category.items.map((tech, techIndex) => (
                                        <motion.div
                                            key={techIndex}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-6 rounded-xl ${
                                                isDark ? 'bg-gray-800/50' : 'bg-white/50'
                                            } backdrop-blur-sm transition-all duration-300`}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-2xl">{tech.icon}</span>
                                                <h4 className="text-xl font-bold">{tech.name}</h4>
                                            </div>
                                            <p className="text-sm opacity-85 mb-4">{tech.description}</p>
                                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-600 transition-all duration-500"
                                                    style={{ width: `${tech.level}%` }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Additional Skills */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="py-20"
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Additional Skills</h2>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {additionalSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-6 rounded-xl text-center ${
                                        isDark ? 'bg-gray-800/50' : 'bg-white/50'
                                    } backdrop-blur-sm transition-all duration-300`}
                                >
                                    <div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                                    <p className="text-sm opacity-85">{skill.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
                {/* Contact Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="py-20"
                >
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
                        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-85">
                            I&apos;m always interested in hearing about new projects and opportunities.
                            Let&#39;s collaborate and build something amazing together!
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Github className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Linkedin className="w-8 h-8" />
                            </a>
                            <a
                                href="mailto:heng68807@gmail.com"
                                className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                            >
                                <Mail className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default Portfolio;

