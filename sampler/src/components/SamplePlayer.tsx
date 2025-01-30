import React, { useState } from 'react';
import { Play, Pause, SkipBack, Download } from 'lucide-react';

const SamplePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="w-full max-w-md bg-zinc-900 rounded-lg p-6 shadow-lg border border-amber-500/20">
      {/* Titre du sample et catégorie */}
      <div className="mb-4">
        <h3 className="text-amber-500 font-mono text-lg">Deep Bass Loop</h3>
        <span className="text-zinc-400 text-sm font-mono">Hip-Hop • 128 BPM</span>
      </div>

      {/* Visualisation du son style vintage */}
      <div className="h-24 mb-4 bg-zinc-800 rounded border border-amber-500/30 flex items-center justify-center">
        <div className="flex items-end space-x-1 h-16">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-amber-500/60 rounded-t"
              style={{
                height: `${Math.random() * 100}%`,
                animation: 'pulse 1s infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-zinc-800 text-amber-500 transition-colors"
            onClick={() => setCurrentTime(0)}
          >
            <SkipBack size={20} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-zinc-800 text-amber-500 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        {/* Time slider */}
        <div className="flex-grow mx-4">
          <input
            type="range"
            min="0"
            max="100"
            value={currentTime}
            onChange={(e) => setCurrentTime(e.target.value)}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800"
          />
        </div>

        <button 
          className="p-2 rounded-full hover:bg-zinc-800 text-amber-500 transition-colors"
        >
          <Download size={20} />
        </button>
      </div>
    </div>
  );
};

export default SamplePlayer;