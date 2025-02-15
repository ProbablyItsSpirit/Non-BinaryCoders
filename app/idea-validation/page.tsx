"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export default function IdeaValidation() {
  const [idea, setIdea] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI validation logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold gradient-text">Idea Validation</h1>
          </div>

          <Card className="p-6 mb-8">
            <p className="text-gray-600 mb-6">
              Share your startup idea and receive AI-powered analysis on market fit, potential risks,
              and improvement suggestions.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your startup idea
                </label>
                <Textarea
                  id="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Enter your startup idea in detail..."
                  className="min-h-[200px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Analyze My Idea
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}