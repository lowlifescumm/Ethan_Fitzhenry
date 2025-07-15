
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My Process</h2>
                    <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">A transparent and collaborative approach to ensure your success.</p>
                </div>
                <div className="relative">
                    {/* Dotted line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-700/50 -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((item, index) => (
                            <div key={index} className="relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg text-center md:text-left">
                                <div className="md:absolute -top-12 left-1/2 md:left-6 -translate-x-1/2 md:-translate-x-0 w-16 h-16 flex items-center justify-center bg-slate-900 border-2 border-cyan-400 rounded-full text-2xl font-bold text-cyan-400 mb-4 md:mb-0">
                                    {item.step}
                                </div>
                                <div className="md:mt-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
