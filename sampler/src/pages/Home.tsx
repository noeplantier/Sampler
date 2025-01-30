import React from 'react';
import { Play, Download, Vibrate, Music, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-6xl font-bold mb-6 text-white bg-gradient-to-r from-gray-600 to-gray-200">
            Discover Free Music Samples
          </h1>
          <p className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Access thousands of royalty-free samples from the world's best producers
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/explore"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Start Exploring
            </Link>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/20 transition-colors border border-white/30">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <category.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>{category.count} samples</span>
                <span className="mx-2">•</span>
                <span>{category.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Samples */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Samples</h2>
            <Link to="/explore" className="text-indigo-600 hover:text-indigo-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSamples.map((sample) => (
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
                    <span>{sample.downloads} downloads</span>
                  </div>
                  <div className="relative h-16 mb-4 bg-gray-100 rounded-lg">
                    {/* Vibrate visualization placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Vibrate className="h-8 w-8 text-gray-400" />
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
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of producers using Sampler to find their next inspiration
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { value: '10,000+', label: 'Free Samples' },
  { value: '50+', label: 'Categories' },
  { value: '100k+', label: 'Downloads' },
  { value: '5,000+', label: 'Active Users' }
];

const categories = [
  {
    name: 'Drums & Percussion',
    icon: Vibrate,
    description: 'Find the perfect beat with our collection of drum loops and one-shots.',
    count: '2,500',
    duration: '10+ hours'
  },
  {
    name: 'Melodic Loops',
    icon: Music,
    description: 'Inspiring melodic loops from various instruments and genres.',
    count: '1,800',
    duration: '8+ hours'
  },
  {
    name: 'Bass Lines',
    icon: Headphones,
    description: 'Deep and groovy bass lines to anchor your tracks.',
    count: '1,200',
    duration: '5+ hours'
  }
];

const featuredSamples = [
  {
    id: 1,
    name: 'Deep House Drums',
    duration: '0:32',
    category: 'Drums',
    bpm: 124,
    downloads: '2.3k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3'
  },
  {
    id: 2,
    name: 'Ambient Piano Loop',
    duration: '0:45',
    category: 'Melodic',
    bpm: 90,
    downloads: '1.8k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f3c002.mp3'
  },
  {
    id: 3,
    name: 'Tech House Bass',
    duration: '0:28',
    category: 'Bass',
    bpm: 126,
    downloads: '3.1k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_d0c6434e49.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_d0c6434e49.mp3'
  },
  {
    id: 4,
    name: 'Chill Lofi Beat',
    duration: '1:15',
    category: 'Drums',
    bpm: 85,
    downloads: '4.2k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2023/01/31/audio_75d7c93432.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2023/01/31/audio_75d7c93432.mp3'
  },
  {
    id: 5,
    name: 'Synthwave Melody',
    duration: '0:52',
    category: 'Melodic',
    bpm: 100,
    downloads: '2.7k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3'
  },
  {
    id: 6,
    name: 'Future Bass Chords',
    duration: '0:38',
    category: 'Melodic',
    bpm: 150,
    downloads: '1.9k',
    previewUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3',
    downloadUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_127d4f91c9.mp3'
  }
];

export default Home;