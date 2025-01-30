import React from 'react';
import { Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Samples', value: '1,234' },
  { label: 'Downloads', value: '567,890' },
  { label: 'Producers', value: '123' },
  { label: 'Genres', value: '45' },
];

const categories = [
  { name: 'Drums', description: 'Hard-hitting drum samples', count: 120, duration: '30 mins', icon: Play },
  { name: 'Bass', description: 'Deep bass sounds', count: 80, duration: '20 mins', icon: Play },
  { name: 'Synths', description: 'Vintage synths', count: 100, duration: '25 mins', icon: Play },
];

const featuredSamples = [
  { id: 1, name: 'Sample 1', duration: '3:45', category: 'Drums', bpm: 120, downloads: 150 },
  { id: 2, name: 'Sample 2', duration: '4:20', category: 'Bass', bpm: 130, downloads: 200 },
  { id: 3, name: 'Sample 3', duration: '2:30', category: 'Synths', bpm: 110, downloads: 250 },
];

const Home = () => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      {/* Hero Section with Vinyl-inspired design */}
      <div className="relative overflow-hidden py-20">
        {/* Vinyl record animation background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[30px] border-zinc-800 animate-spin-slow opacity-20" />
        
        <div className="relative text-center z-10 px-4">
          <h1 className="text-6xl font-bold mb-6 font-mono text-amber-500">
            SAMPLER
          </h1>
          <p className="text-2xl text-amber-200/80 mb-8 max-w-2xl mx-auto font-mono">
            FREE SAMPLES FOR YOUR NEXT HIT
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/explore"
              className="bg-amber-500 text-zinc-900 px-8 py-3 rounded-none text-lg font-mono hover:bg-amber-400 transition-colors border-2 border-amber-500 hover:border-amber-400"
            >
              START DIGGING
            </Link>
            <button className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-none text-lg font-mono hover:border-amber-400 hover:text-amber-400 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section with vintage meters */}
      <div className="bg-zinc-800/50 py-12 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold font-mono text-amber-500">{stat.value}</p>
                <p className="text-amber-200/60 mt-2 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories with vintage cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold font-mono text-amber-500 mb-8">CRATES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-zinc-800/50 border border-amber-500/20 p-6 hover:border-amber-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-amber-500/10 rounded-none group-hover:bg-amber-500/20 transition-colors">
                  <category.icon className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-mono text-amber-200">{category.name}</h3>
              </div>
              <p className="text-amber-200/60 font-mono">{category.description}</p>
              <div className="mt-4 flex items-center text-sm text-amber-200/40 font-mono">
                <span>{category.count} samples</span>
                <span className="mx-2">•</span>
                <span>{category.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Samples with VU meter style */}
      <div className="bg-zinc-800/30 py-16 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-mono text-amber-500">FEATURED CUTS</h2>
            <Link to="/explore" className="text-amber-500 hover:text-amber-400 font-mono">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSamples.map((sample) => (
              <div key={sample.id} className="bg-zinc-800/50 border border-amber-500/20 overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-mono text-amber-200">{sample.name}</h3>
                    <span className="text-sm text-amber-200/60 font-mono">{sample.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-amber-200/60 font-mono mb-4">
                    <span className="px-2 py-1 bg-amber-500/10 rounded-none">{sample.category}</span>
                    <span>•</span>
                    <span>{sample.bpm} BPM</span>
                    <span>•</span>
                    <span>{sample.downloads} DLS</span>
                  </div>
                  {/* Vintage VU Meter Animation */}
                  <div className="relative h-16 mb-4 bg-zinc-900/50 border border-amber-500/20">
                    <div className="absolute inset-0 flex items-center justify-center space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-amber-500/60 rounded-none"
                          style={{
                            height: `${Math.random() * 100}%`,
                            animation: `pulse ${Math.random() * 0.5 + 0.5}s infinite`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-mono">
                      <Play className="h-5 w-5" />
                      <span>PLAY</span>
                    </button>
                    <button className="flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-mono">
                      <Download className="h-5 w-5" />
                      <span>DL</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action with retro styling */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-mono text-amber-500 mb-4">READY TO DROP THE BEAT?</h2>
          <p className="text-xl text-amber-200/80 mb-8 max-w-2xl mx-auto font-mono">
            JOIN THE CREW OF PRODUCERS USING SAMPLER
          </p>
          <button className="bg-amber-500 text-zinc-900 px-8 py-3 rounded-none text-lg font-mono hover:bg-amber-400 transition-colors border-2 border-amber-500 hover:border-amber-400">
            START CREATING NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;