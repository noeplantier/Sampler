import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import '../App.css';

// Actual deep house song URLs
const deepHouseSongs = [
  { id: 1, name: 'Deep Groove', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, name: 'Nightfall', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, name: 'Sunset Vibes', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 4, name: 'Echoes', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
];

const Navbar = ({ setActivePage }) => {
  return (
    <nav style={{ borderRadius: "10px", border: "2px solid beige", backgroundColor: '#2c1810', padding: '1rem', display: 'flex', justifyContent: 'space-around' }}>
      {['Samples', 'Musics', 'Downloads', 'Premium', 'Aide', 'Paramètres'].map((item) => (
        <button
          key={item}
          onClick={() => setActivePage(item)}
          style={{ color: 'beige', fontSize: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activePage, setActivePage] = useState('Samples');
  const [currentSong, setCurrentSong] = useState(deepHouseSongs[0]);
  const [audio] = useState(new Audio(currentSong.url));

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Change song on vinyl click
  const changeSong = () => {
    const currentIndex = deepHouseSongs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % deepHouseSongs.length;
    const nextSong = deepHouseSongs[nextIndex];
    setCurrentSong(nextSong);
    audio.src = nextSong.url;
    if (isPlaying) {
      audio.play();
    }
  };

  // Handle rotation animation
  React.useEffect(() => {
    let animationFrame;
    if (isPlaying) {
      const animate = () => {
        setRotation(prev => (prev + 1) % 360);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  return (
    <div>
      <div className="vinyl-player" style={{ paddingBottom: '10rem', paddingTop: '2rem' }}>
        <Navbar setActivePage={setActivePage} />

        <h1 className="main-title" style={{ fontSize: '10rem', color: 'beige', textAlign: 'center', marginBottom: '-1rem' }}>SAMPLER</h1>
        <h1 className="main-title" style={{ fontSize: '5rem', color: 'beige', textAlign: 'center' }}>Free rights musics for your samples.</h1>

        {/* Vinyl Disc */}
        <div
          className="vinyl-disc"
          style={{ transform: `rotate(${rotation}deg)`, cursor: 'pointer' }}
          onClick={changeSong}
        >
          <div className="vinyl-label">
            <span>{currentSong.name}</span>
          </div>
        </div>

        {/* Vinyl Controls */}
        <div className="vinyl-controls">
          <button className="vinyl-btn" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-8 w-8" />}
          </button>
          <button className="vinyl-btn" onClick={() => audio.currentTime = 0}>
            <RotateCcw className="h-8 w-8" />
          </button>
          <div className="vinyl-volume">
            <Volume2 className="h-8 w-8" />
            <input
              type="range"
              min="0"
              max="100"
              className="vintage-slider"
              onChange={(e) => (audio.volume = e.target.value / 100)}
            />
          </div>
        </div>
      </div>

      {/* Premium Offers Section */}
      <div style={{ backgroundColor: '#2c1810', padding: '2rem', margin: '2rem', borderRadius: '10px', border: '2px solid beige' }}>
        <h2 style={{ fontSize: '3rem', color: 'beige', textAlign: 'center', marginBottom: '1rem' }}>UNLOCK THE FULL POTENTIAL</h2>
        <p style={{ fontSize: '1.5rem', color: 'beige', textAlign: 'center', marginBottom: '2rem' }}>
          Upgrade to Sampler Premium and get unlimited access to exclusive samples, tools, and features.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid beige', width: '30%', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'beige' }}>STARTER</h3>
            <p style={{ color: 'beige' }}>Perfect for beginners</p>
            <p style={{ color: 'beige' }}>100+ samples/month</p>
            <p style={{ color: 'beige', fontSize: '1.5rem', fontWeight: 'bold' }}>$9.99/month</p>
            <button style={{ backgroundColor: 'beige', color: '#2c1810', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
          </div>
          <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid beige', width: '30%', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'beige' }}>PRODUCER</h3>
            <p style={{ color: 'beige' }}>For serious creators</p>
            <p style={{ color: 'beige' }}>500+ samples/month</p>
            <p style={{ color: 'beige', fontSize: '1.5rem', fontWeight: 'bold' }}>$19.99/month</p>
            <button style={{ backgroundColor: 'beige', color: '#2c1810', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Go Pro</button>
          </div>
          <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid beige', width: '30%', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'beige' }}>MASTER</h3>
            <p style={{ color: 'beige' }}>Unleash your creativity</p>
            <p style={{ color: 'beige' }}>Unlimited samples</p>
            <p style={{ color: 'beige', fontSize: '1.5rem', fontWeight: 'bold' }}>$29.99/month</p>
            <button style={{ backgroundColor: 'beige', color: '#2c1810', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Become a Master</button>
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <div style={{ backgroundColor: '#2c1810', padding: '2rem', margin: '2rem', borderRadius: '10px', border: '2px solid beige', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: 'beige', marginBottom: '1rem' }}>BE PART OF THE SAMPLER MOVEMENT</h2>
        <p style={{ fontSize: '1.5rem', color: 'beige', marginBottom: '2rem' }}>
          Join thousands of producers worldwide and take your music to the next level.
        </p>
        <button style={{ backgroundColor: 'beige', color: '#2c1810', padding: '1rem 2rem', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>Join Now</button>
      </div>
    </div>
  );
};

export default VinylPlayer;