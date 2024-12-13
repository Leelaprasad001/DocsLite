import React, { ReactNode } from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/TextGenerationEffect";
import { CircleCheckBig } from 'lucide-react';
import TestimonialSection from './TestimonialSection';

const features = [
  "User Authentication with Google integration",
  "Collaborative Text Editor with real-time editing",
  "Conflict-free Replicated Data Types (CRDT) with Yjs",
  "Effortless document management and sharing",
  "Inline and general comments for enhanced communication",
  "Real-time notifications for updates",
  "Fully responsive across all devices"
];

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-8">
        <TextGenerateEffect
          words="DocsLite: Simplifying Document Collaboration for a Smarter Workflow"
          className="text-center text-lg md:text-4xl"
        />
        <div className="flex items-center gap-4">
          <a
            href="#children"
            className="group px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-900 text-white transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-white hover:to-neutral-100 hover:text-neutral-900"
          >
            Try it now
          </a>
          <a
            href="#"
            className="px-8 py-2 rounded-full bg-gradient-to-b from-white to-neutral-100 text-neutral-900 transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-900 hover:text-white"
          >
            Learn more
          </a>
        </div>

        <div className="relative max-w-6xl w-full h-[600px] mt-16 rounded-lg overflow-hidden">
          <Image
            src="/assets/images/Banner.png"
            alt="Banner"
            layout="fill"
          />
        </div>
      </div>

      <div id="children" className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2 text-blue-100">Start Collaborating with DocsLite</h1>
          <p className="text-md md:text-lg">Sign in to access your workspace and start collaborating in real-time with your team.</p>
          <div className="mt-6">
            <ul className="list-none ml-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2 text-md">
                  <CircleCheckBig className="text-blue-100 mr-2" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">{children}</div>
      </div>

      <TestimonialSection />
    </main>
  );
};

export default Main;
