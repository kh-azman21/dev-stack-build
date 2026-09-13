import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

export default function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleAddStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      alert(`${tech.name} is already added!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
  };

  const handleRemoveItem = (id) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <main className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <TechGrid
              selectedStack={selectedStack}
              onAddStack={handleAddStack}
            />
            <YourStack
              selectedStack={selectedStack}
              onRemoveItem={handleRemoveItem}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}


