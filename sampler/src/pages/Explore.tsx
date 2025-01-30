import React, { useState } from 'react';
import { Filter, Search, SlidersHorizontal, Play, Download } from 'lucide-react';
import VinylPlayer from '../components/VinylPlayer.tsx';
import RetroSampleBrowser from '../components/RetroSampleBrowser.tsx';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBPM, setSelectedBPM] = useState('all');
  const [selectedKey, setSelectedKey] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSamples = samples.filter(sample => {
    if (selectedCategory !== 'all' && sample.category.toLowerCase() !== selectedCategory) return false;
    if (selectedBPM !== 'all') {
      const [min, max] = selectedBPM.split('-').map(Number);
      if (sample.bpm < min || sample.bpm > (max || Infinity)) return false;
    }
    if (selectedKey !== 'all' && sample.key !== selectedKey) return false;
    if (searchQuery && !sample.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search samples..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
          <SlidersHorizontal className="h-5 w-5" />
          <span>Advanced Filters</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="drums">Drums & Percussion</option>
              <option value="melodic">Melodic Loops</option>
              <option value="bass">Bass Lines</option>
              <option value="fx">FX & Atmospheres</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              BPM Range
            </label>
            <select
              value={selectedBPM}
              onChange={(e) => setSelectedBPM(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All BPM</option>
              <option value="70-90">70-90</option>
              <option value="90-110">90-110</option>
              <option value="110-130">110-130</option>
              <option value="130-150">130-150</option>
              <option value="150">150+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key
            </label>
            <select
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All Keys</option>
              {['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm', 'A', 'Am', 'B', 'Bm'].map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <VinylPlayer sample={samples[0]} />
      </div>
      <RetroSampleBrowser samples={samples} />

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        Showing {filteredSamples.length} samples
      </div>

      {/* Sample Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map((sample) => (
          <div key={sample.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{sample.name}</h3>
                <span className="text-sm text-gray-500">{sample.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <span className="px-2 py-1 bg-gray-100 rounded-full">{sample.category}</span>
                <span>•</span>
                <span>{sample.bpm} BPM</span>
                <span>•</span>
                <span>{sample.key}</span>
              </div>
              <div className="relative h-16 mb-4 bg-gray-100 rounded-lg">
                {/* Waveform visualization placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Filter className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => new Audio(sample.previewUrl).play()}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
                >
                  <Play className="h-5 w-5" />
                  <span>Preview</span>
                </button>
                <a 
                  href={sample.downloadUrl}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                  download
                >
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const samples = [
  {
    id: 1,
    name: 'Deep House Drums',
    duration: '0:32',
    category: 'Drums',
    bpm: 124,
    key: 'N/A',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3'
  },
  {
    id: 2,
    name: 'Ambient Piano Loop',
    duration: '0:45',
    category: 'Melodic',
    bpm: 90,
    key: 'Am',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3'
  },
  {
    id: 3,
    name: 'Tech House Bass',
    duration: '0:28',
    category: 'Bass',
    bpm: 126,
    key: 'Fm',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_d0c6434e49.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_d0c6434e49.mp3'
  },
  {
    id: 4,
    name: 'Tropical House Melody',
    duration: '0:36',
    category: 'Melodic',
    bpm: 118,
    key: 'C#m',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2023/01/31/audio_75d7c93432.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2023/01/31/audio_75d7c93432.mp3'
  },
  {
    id: 5,
    name: 'Hip Hop Drum Loop',
    duration: '0:24',
    category: 'Drums',
    bpm: 95,
    key: 'N/A',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3'
  },
  {
    id: 6,
    name: 'Synthwave Bass',
    duration: '0:40',
    category: 'Bass',
    bpm: 110,
    key: 'Em',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3'
  },
  {
    id: 7,
    name: 'Future Bass Chords',
    duration: '0:38',
    category: 'Melodic',
    bpm: 150,
    key: 'G',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3'
  },
  {
    id: 8,
    name: 'Analog Synth Lead',
    duration: '0:42',
    category: 'Melodic',
    bpm: 128,
    key: 'Dm',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3'
  },
  {
    id: 9,
    name: 'Lo-Fi Drums',
    duration: '0:30',
    category: 'Drums',
    bpm: 85,
    key: 'N/A',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3'
  }
];

export default Explore;