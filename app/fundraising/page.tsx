"use client";

import { motion } from 'framer-motion';
import { Users, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Fundraising() {
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
            <Users className="h-8 w-8 text-purple-500" />
            <h1 className="text-3xl font-bold gradient-text">Fundraising & Networking</h1>
          </div>

          <Tabs defaultValue="pitch">
            <TabsList className="mb-6">
              <TabsTrigger value="pitch">Pitch Deck</TabsTrigger>
              <TabsTrigger value="investors">Investor Network</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="pitch">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Pitch Deck Builder</h2>
                <p className="text-gray-600 mb-6">
                  Create a compelling pitch deck with our AI-powered templates and guidance.
                </p>
                <Button className="inline-flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="investors">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Investor Matching</h2>
                <p className="text-gray-600 mb-6">
                  Find and connect with investors that match your startup's profile.
                </p>
                <Button>Find Investors</Button>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Fundraising Resources</h2>
                <p className="text-gray-600 mb-6">
                  Access guides, templates, and best practices for successful fundraising.
                </p>
                <Button>Browse Resources</Button>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}