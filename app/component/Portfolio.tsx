"use client"
import React, { useState } from 'react';
import {
    Moon, Sun, Github, Linkedin, Mail
    , Database, Globe, Cloud, Lock,

} from 'lucide-react';

const Portfolio = () => {
    const [isDark, setIsDark] = useState(false);

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
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "Full-stack web development with modern frameworks and responsive design principles"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Services",
            description: "Experience with AWS services and cloud deployment strategies"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Security",
            description: "Understanding of web security practices and authentication systems"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Databases",
            description: "Proficient in SQL and NoSQL databases including MongoDB and MySQL"
        }
    ];

    return (
        <div className={`min-h-screen w-full transition-colors duration-300 ${
            isDark ? 'bg-gray-700 text-white' : 'bg-white-500 text-gray-900'
        }`}>
            {/* Background Animation */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-300 to-pink-100/40 dark:from-purple-500 dark:via-white dark:to-pink-900/20" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            </div>

            {/* Navigation */}
            <nav className="fixed w-full p-4 backdrop-blur-sm dark:bg-gray-900/70 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold hover:scale-105 transition-transform">
                        Tai Ngonheng
                    </h1>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                        >
                            <Github className="w-8 h-8"/>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                        >
                            <Linkedin className="w-8 h-8"/>
                        </a>
                        <a
                            href="mailto:heng68807@gmail.com"
                            className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                        >
                            <Mail className="w-8 h-8"/>
                        </a>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {isDark ? <Sun size={24}/> : <Moon size={24}/>}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen pt-20">
                <div className="max-w-6xl mx-auto px-4 py-20">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Hi, I&aposm <span className="text-blue-600">Tai Ngonheng</span>
                        </h1>
                        <div className="flex items-center justify-center space-x-2 text-xl">
                            <h3 className="text-white font-bold">Bachelor in Information Technology and Engineering</h3>
                        </div>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-85">
                            A passionate technology enthusiast and aspiring software engineer. Currently focused on
                            full-stack development, cloud computing, and building innovative solutions that make a
                            difference.
                        </p>
                        <div className="flex justify-center gap-4 pt-6">
                            <a
                                href="mailto:heng68807@gmail.com"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                            >
                                Text Me!!
                            </a>
                            <a
                                href="https://github.com/TaiNgonheng"
                                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
                    {techStack.map((category, index) => (
                        <div key={index} className="mb-16">
                            <h3 className="text-2xl font-bold mb-8">{category.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className={`p-6 rounded-xl ${
                                            isDark ? 'bg-gray-800/50' : 'bg-white/50'
                                        } backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Skills */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Additional Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl text-center ${
                                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                                } backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}
                            >
                                <div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                                <p className="text-sm opacity-85">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 opacity-85">
                        I&aposm always interested in hearing about new projects and opportunities.
                        Let&aposs collaborate and build something amazing together!
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
            </section>
        </div>
    );
};

export default Portfolio;