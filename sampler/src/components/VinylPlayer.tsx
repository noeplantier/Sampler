import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Home, Music, Download, Star, HelpCircle, Settings } from 'lucide-react';
import '../App.css';

// Sample data for music styles and samples
const musicStyles = {
  'Deep House': [
    { id: 1, name: 'Deep Groove', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 2, name: 'Nightfall', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 3, name: 'Sunset Vibes', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { id: 4, name: 'Echoes', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { id: 5, name: 'Dreamscape', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
    { id: 6, name: 'Ocean Breeze', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    { id: 7, name: 'Mystic Flow', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
    { id: 8, name: 'Urban Nights', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    { id: 9, name: 'Lost in Time', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
    { id: 10, name: 'Eternal Groove', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
  ],
  'Techno': [
    { id: 11, name: 'Pulse', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
    { id: 12, name: 'Neon Lights', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
    { id: 13, name: 'Factory Beat', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
    { id: 14, name: 'Cyber City', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
    { id: 15, name: 'Dark Matter', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
    { id: 16, name: 'Mechanic Drive', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
    { id: 17, name: 'Future Bass', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3' },
    { id: 18, name: 'Electric Storm', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3' },
    { id: 19, name: 'Rave Wave', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3' },
    { id: 20, name: 'Techno Rush', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3' },
  ],
  // Add more styles as needed
};

const Navbar = ({ setActivePage }) => {
  return (
    <nav style={{ borderRadius: "10px", border: "2px solid beige", backgroundColor: '#2c1810', padding: '1rem', display: 'flex', justifyContent: 'space-around' }}>
      <button onClick={() => setActivePage('Home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Home color="beige" size={24} /></button>
      <button onClick={() => setActivePage('Musics')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Music color="beige" size={24} /></button>
      <button onClick={() => setActivePage('Downloads')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Download color="beige" size={24} /></button>
      <button onClick={() => setActivePage('Premium')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Star color="beige" size={24} /></button>
      <button onClick={() => setActivePage('Aide')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><HelpCircle color="beige" size={24} /></button>
      <button onClick={() => setActivePage('Paramètres')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Settings color="beige" size={24} /></button>
    </nav>
  );
};

const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activePage, setActivePage] = useState('Home');
  const [currentStyle, setCurrentStyle] = useState('Deep House');
  const [currentSong, setCurrentSong] = useState(musicStyles[currentStyle][0]);
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
    const currentIndex = musicStyles[currentStyle].findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % musicStyles[currentStyle].length;
    const nextSong = musicStyles[currentStyle][nextIndex];
    setCurrentSong(nextSong);
    audio.src = nextSong.url;
    if (isPlaying) {
      audio.play();
    }
  };

  // Handle rotation animation
  useEffect(() => {
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

  // Handle style change
  const handleStyleChange = (style) => {
    setCurrentStyle(style);
    setCurrentSong(musicStyles[style][0]);
    audio.src = musicStyles[style][0].url;
    if (isPlaying) {
      audio.play();
    }
  };

  return (
    <div>
      <div className="vinyl-player" style={{ paddingBottom: '10rem', paddingTop: '2rem' }}>
        <Navbar setActivePage={setActivePage} />

        <h1 className="main-title" style={{ fontSize: '10rem', color: 'beige', textAlign: 'center', marginBottom: '-1rem' }}>SAMPLER</h1>
        <h1 className="main-title" style={{ fontSize: '5rem', color: 'beige', textAlign: 'center',  marginBottom: '5rem' }}>Free rights musics for your samples.</h1>

   

        {/* Vinyl Disc */}
        <div
          className="vinyl-disc"
          style={{
            transform: `rotate(${rotation}deg)`,
            cursor: 'pointer',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #2c1810 30%, #1a100a 70%)',
            border: '10px solid #1a100a',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            margin: '0 auto',
            position: 'relative',
          }}
          onClick={changeSong}
        >
          <div
            className="vinyl-label"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'beige',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '1rem',
              color: '#2c1810',
            }}
          >
            <span>{currentSong.name}</span>
          </div>
        </div>

        {/* Vinyl Controls */}
        <div className="vinyl-controls" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '5rem' }}>
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

               {/* Music Style Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem',  marginTop: '5rem' }}>
          {Object.keys(musicStyles).map((style) => (
            <button
              key={style}
              onClick={() => handleStyleChange(style)}
              style={{
                backgroundColor: currentStyle === style ? 'beige' : '#2c1810',
                color: currentStyle === style ? '#2c1810' : 'beige',
                padding: '0.5rem 1rem',
                border: '1px solid beige',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {style}
            </button>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default VinylPlayer;