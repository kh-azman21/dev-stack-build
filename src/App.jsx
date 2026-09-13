import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import YourStack from './components/YourStack';

export default function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleToggleStack = (tech) => {
    setSelectedStack((prev) => {
      const exists = prev.some((item) => item.id === tech.id);
      if (exists) {
        return prev.filter((item) => item.id !== tech.id);
      }
      return [...prev, tech];
    });
  };

  const handleRemoveItem = (id) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <TechGrid
            selectedStack={selectedStack}
            onToggleStack={handleToggleStack}
          />
          <YourStack
            selectedStack={selectedStack}
            onRemoveItem={handleRemoveItem}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>
    </div>
  );
}

