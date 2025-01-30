import React from 'react';
import { Search, Filter } from 'lucide-react';
import SamplePlayer from './SamplePlayer.tsx';

const SampleGrid = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6">
      {/* Header avec recherche et filtres */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher un sample..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-amber-500/20 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-amber-500/20 rounded-lg text-amber-500 hover:bg-zinc-800 transition-colors">
            <Filter size={20} />
            Filtres
          </button>
          <select className="px-4 py-2 bg-zinc-900 border border-amber-500/20 rounded-lg text-amber-500 hover:bg-zinc-800 transition-colors">
            <option>Tous les genres</option>
            <option>Hip-Hop</option>
            <option>House</option>
            <option>Drum & Bass</option>
          </select>
        </div>
      </div>

      {/* Grille de samples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-fade-in">
            <SamplePlayer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleGrid;