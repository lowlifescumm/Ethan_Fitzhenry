
import React from 'react';
import { Service, ProcessStep } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'AI Consulting for Small Business',
    description: 'Strategic guidance to identify and implement the most impactful AI solutions, driving growth and giving you a competitive edge.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Custom AI Voice Agents',
    description: 'Develop intelligent, 24/7 voice agents to handle customer inquiries, book appointments, and qualify leads with a human-like touch.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'AI-Powered Automations',
    description: 'Streamline your operations by automating repetitive tasks, from data entry and report generation to complex workflow management.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: '01',
        title: 'Discovery & Strategy',
        description: 'We start with a free consultation to understand your business, challenges, and goals. Together, we identify the highest-impact AI opportunities.'
    },
    {
        step: '02',
        title: 'Solution Design & Proposal',
        description: 'I design a custom AI solution and provide a detailed proposal outlining the project scope, timeline, and investment.'
    },
    {
        step: '03',
        title: 'Development & Implementation',
        description: 'I build, test, and integrate your custom AI solution. All work is done 100% remotely, ensuring seamless delivery with no onsite requirements.'
    },
    {
        step: '04',
        title: 'Support & Growth',
        description: 'After launch, I provide ongoing support and we monitor performance to identify new opportunities for growth and optimization.'
    }
];
