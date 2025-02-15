"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AIQA() {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI Q&A logic
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
            <Search className="h-8 w-8 text-cyan-500" />
            <h1 className="text-3xl font-bold gradient-text">AI Q&A Search</h1>
          </div>

          <Card className="p-6 mb-8">
            <p className="text-gray-600 mb-6">
              Ask any question about entrepreneurship, startup building, or business strategy.
              Our AI will provide detailed, context-aware answers.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1"
              />
              <Button type="submit">
                <Send className="h-4 w-4 mr-2" />
                Ask
              </Button>
            </form>
          </Card>

          <div className="space-y-4">
            {/* TODO: Add chat history/responses here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}