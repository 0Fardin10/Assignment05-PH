import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

const techData = [
  { id: '1', name: 'React', category: 'Frontend', badge: 'Popular', desc: 'A JavaScript library for building user interfaces.', rating: '4.9', iconBg: 'bg-cyan-50', icon: '/logos/react.svg' },
  { id: '2', name: 'Vue.js', category: 'Frontend', badge: 'Versatile', desc: 'An approachable, performant framework.', rating: '4.8', iconBg: 'bg-emerald-50', icon: '/logos/vue.svg' },
  { id: '3', name: 'Svelte', category: 'Frontend', badge: 'Fast', desc: 'Cybernetically enhanced web apps.', rating: '4.7', iconBg: 'bg-orange-50', icon: '/logos/svelte.svg' },
  { id: '4', name: 'Next.js', category: 'Frontend', badge: 'Fullstack', desc: 'The React Framework for the Web.', rating: '4.9', iconBg: 'bg-slate-100', icon: '/logos/nextjs.svg' },
  { id: '5', name: 'Node.js', category: 'Backend', badge: 'Essential', desc: 'JavaScript runtime built on V8 engine.', rating: '4.8', iconBg: 'bg-emerald-50', icon: '/logos/nodejs.svg' },
  { id: '6', name: 'PostgreSQL', category: 'Database', badge: 'Reliable', desc: 'Powerful object-relational database.', rating: '4.9', iconBg: 'bg-blue-50', icon: '/logos/postgres.svg' },
  { id: '7', name: 'Redis', category: 'Database', badge: 'In-Memory', desc: 'In-memory data structure store.', rating: '4.8', iconBg: 'bg-red-50', icon: '/logos/redis.svg' },
  { id: '8', name: 'JavaScript', category: 'Language', badge: 'Standard', desc: 'High-level dynamic programming language.', rating: '4.9', iconBg: 'bg-amber-50', icon: '/logos/javascript.svg' },
  { id: '9', name: 'TypeScript', category: 'Language', badge: 'Typed', desc: 'Strongly typed programming language.', rating: '4.9', iconBg: 'bg-blue-50', icon: '/logos/typescript.svg' },
  { id: '10', name: 'Java', category: 'Backend', badge: 'Enterprise', desc: 'Object-oriented language for enterprise.', rating: '4.6', iconBg: 'bg-red-50', icon: '/logos/java.svg' },
  { id: '11', name: 'Tailwind CSS', category: 'Frontend', badge: 'Styling', desc: 'Utility-first CSS framework.', rating: '4.9', iconBg: 'bg-cyan-50', icon: '/logos/tailwind.svg' },
  { id: '12', name: 'Docker', category: 'DevOps', badge: 'Container', desc: 'Containerization platform.', rating: '4.8', iconBg: 'bg-sky-50', icon: '/logos/docker.svg' }
];

export default function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (tech) => {
  
    const isAlreadyAdded = stack.some((item) => item.name === tech.name);
   
    const newItem = { ...tech, id: `${tech.id}-${Date.now()}` };
    
    setStack((prevStack) => [...prevStack, newItem]);
    
    if (isAlreadyAdded) {
     
      toast(`${tech.name} added again!`, {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#fffbeb',
          color: '#d97706',
          fontSize: '14px',
          fontWeight: '500',
          border: '1px solid #fde68a'
        },
      });
    } else {
      
      toast.success(`${tech.name} added to stack!`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '14px'
        },
      });
    }
  };

  const handleRemove = (id) => {
    const removedItem = stack.find(item => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    
    if (removedItem) {
      toast(`${removedItem.name} removed`, {
        icon: '🗑️',
        style: {
          borderRadius: '10px',
          background: '#fee2e2',
          color: '#991b1b',
          fontSize: '14px',
          fontWeight: '500'
        },
      });
    }
  };

  const handleClearAll = () => {
    if (stack.length > 0) {
      setStack([]);
      toast.error('All technologies removed!', {
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#ef4444',
          fontSize: '14px',
          fontWeight: '500',
          border: '1px solid #fee2e2'
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-800 flex flex-col font-sans">
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">Pick technologies to build your custom stack.</p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* isAdded  */}
            {techData.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                onAdd={handleAdd}
              />
            ))}
          </div>
          <YourStack stack={stack} onRemove={handleRemove} onClearAll={handleClearAll} />
        </div>
      </main>
      <Footer />
    </div>
  );
}