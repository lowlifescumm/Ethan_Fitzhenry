
import React from 'react';
import type { NavLink, Service, ProcessStep } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'AI Generator', href: '#ai-generator' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Consulting for Small Business',
    description: 'Strategic guidance to identify and implement the most impactful AI solutions, driving growth and giving you a competitive edge.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Custom AI Voice Agents',
    description: 'Develop intelligent, 24/7 voice agents to handle customer inquiries, book appointments, and qualify leads with a human-like touch.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI-Powered Automations',
    description: 'Streamline your operations by automating repetitive tasks, from data entry and report generation to complex workflow management.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: 'We start with a free consultation to understand your business, challenges, and goals. Together, we identify the highest-impact AI opportunities.',
  },
  {
    step: 2,
    title: 'Solution Design & Proposal',
    description: 'I design a custom AI solution and provide a detailed proposal outlining the project scope, timeline, and investment.',
  },
  {
    step: 3,
    title: 'Development & Implementation',
    description: 'I build, test, and integrate your custom AI solution. All work is done 100% remotely, ensuring seamless delivery with no onsite requirements.',
  },
  {
    step: 4,
    title: 'Support & Growth',
    description: 'After launch, I provide ongoing support and we monitor performance to identify new opportunities for growth and optimization.',
  },
];