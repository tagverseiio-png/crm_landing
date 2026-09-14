"use client";

import { CheckCircle2 } from 'lucide-react';
import { useFirebaseData } from '@/lib/useFirebaseData';
import SectionSkeleton from '@/components/SectionSkeleton';

export default function ComparisonSection() {
    const { data: comparisonData, loading } = useFirebaseData<any[]>('landing/comparison');
    const safeData = comparisonData || [];

    if (loading) return <SectionSkeleton />;

    return (
        <section className="py-12 sm:py-36 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
                    Replace your fragmented tech stack.
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                    Stop paying for 8 different tools that don't even talk to each other.
                </p>
            </div>

            <div className="bg-slate-50/50 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 p-6 bg-slate-100 border-b border-slate-200 font-bold text-slate-700 text-sm sm:text-base uppercase tracking-wider">
                    <div className="col-span-12 sm:col-span-5">Features</div>
                    <div className="col-span-12 sm:col-span-3 hidden sm:block text-center">Replaces</div>
                    <div className="col-span-6 sm:col-span-2 text-center">Other tools</div>
                    <div className="col-span-6 sm:col-span-2 text-center text-blue-600">Tagverse</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-100">
                    {safeData.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 p-4 sm:p-6 items-center hover:bg-white transition-colors duration-200">
                            <div className="col-span-12 sm:col-span-5 font-bold text-slate-800 text-sm sm:text-base">
                                {item.feature}
                            </div>
                            <div className="col-span-12 sm:col-span-3 hidden sm:flex justify-center gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm text-center">
                                    {item.replaces}
                                </span>
                            </div>
                            <div className="col-span-6 sm:col-span-2 text-center font-bold text-slate-500 text-xs sm:text-sm">
                                {item.otherTools}
                            </div>
                            <div className="col-span-6 sm:col-span-2 flex justify-center">
                                <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-blue-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20">
                                    <CheckCircle2 className="w-4 h-4" /> Included
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800">
                    <div className="text-center sm:text-left flex-1">
                        <div className="text-slate-400 font-bold text-lg mb-1">Stop juggling scattered tools.</div>
                        <div className="text-sm text-slate-300">Bring everything under one roof with Tagverse.</div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-12 bg-slate-700"></div>

                    <div className="text-center sm:text-right flex items-center gap-6">
                        <button 
                            onClick={() => window.dispatchEvent(new Event('open-free-trial'))}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Start your journey
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


