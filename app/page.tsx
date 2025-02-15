"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Target, Users, Search, ChevronRight } from 'lucide-react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      title: "Idea Validation",
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      description: "Validate your startup ideas with AI-powered analysis and market fit assessment.",
      link: "/idea-validation",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Strategic Advice",
      icon: <Target className="h-8 w-8 text-indigo-500" />,
      description: "Get personalized guidance and actionable steps for your startup journey.",
      link: "/strategic-advice",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Fundraising & Networking",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      description: "Access tools and templates for fundraising success and investor connections.",
      link: "/fundraising",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "AI Q&A Search",
      icon: <Search className="h-8 w-8 text-cyan-500" />,
      description: "Get instant answers to your entrepreneurial questions powered by AI.",
      link: "/ai-qa",
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Welcome to Venturely
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your AI-powered companion for the solo founder journey. Transform your startup ideas into reality with intelligent guidance and support.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
              <motion.div
                className="feature-card group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-blue-500 group-hover:text-blue-600">
                      <span>Learn more</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Rocket className="h-5 w-5" />
            <span>Ready to start your journey?</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}