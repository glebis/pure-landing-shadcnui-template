"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeShowcase = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorValues, setColorValues] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check initial theme
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // Get initial color values
    updateColorValues();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
    
    // Update color values after theme change
    setTimeout(updateColorValues, 100);
  };

  const updateColorValues = () => {
    const colors = [
      'background', 'foreground', 'card', 'primary', 'secondary', 
      'muted', 'accent', 'destructive', 'border', 'ring'
    ];
    
    const newValues: Record<string, string> = {};
    
    colors.forEach(color => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${color}`);
      newValues[color] = value.trim();
    });
    
    setColorValues(newValues);
  };

  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">OKLCH Theme Colors</h2>
          <button 
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Base colors */}
          <ColorCard 
            name="background" 
            className="bg-background text-foreground" 
            value={colorValues.background}
          />
          <ColorCard 
            name="foreground" 
            className="bg-foreground text-background" 
            value={colorValues.foreground}
          />
          <ColorCard 
            name="card" 
            className="bg-card text-card-foreground" 
            value={colorValues.card}
          />
          <ColorCard 
            name="primary" 
            className="bg-primary text-primary-foreground" 
            value={colorValues.primary}
          />
          <ColorCard 
            name="secondary" 
            className="bg-secondary text-secondary-foreground" 
            value={colorValues.secondary}
          />
          <ColorCard 
            name="muted" 
            className="bg-muted text-muted-foreground" 
            value={colorValues.muted}
          />
          <ColorCard 
            name="accent" 
            className="bg-accent text-accent-foreground" 
            value={colorValues.accent}
          />
          <ColorCard 
            name="destructive" 
            className="bg-destructive text-destructive-foreground" 
            value={colorValues.destructive}
          />
          <ColorCard 
            name="border" 
            className="border-4 border-border bg-card" 
            value={colorValues.border}
          />
        </div>
      </div>
    </div>
  );
};

const ColorCard = ({ 
  name, 
  className, 
  value 
}: { 
  name: string; 
  className: string;
  value?: string;
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium capitalize">{name}</p>
          <p className="text-sm opacity-80 mt-1">OKLCH Color</p>
        </div>
        {value && (
          <code className="text-xs p-1 bg-background/30 rounded">
            {value}
          </code>
        )}
      </div>
    </div>
  );
};

export default ThemeShowcase;
