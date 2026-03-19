import React, { useState } from 'react';
import Entry from './pages/index';
import Home from './pages/home';
import './styles/globals.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
        setIsUnlocked(true);
        setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className="App overflow-x-hidden min-h-screen bg-[#0b111a]">
      {!isUnlocked ? (
        <div className={`terminal-container transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Entry onComplete={handleComplete} />
        </div>
      ) : (
        <div className="home-container opacity-0 animate-fade-in">
            <Home />
        </div>
      )}

      {/* Page Transition Overlay */}
      <div className={`fixed inset-0 bg-[#0b111a] z-[10000] pointer-events-none transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isTransitioning ? 'translate-y-0' : 'translate-y-full'}`} />

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 1s forwards;
        }
      `}</style>
    </div>
  );
}

export default App;