import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import '../App.css';

const Navbar = ({ setActivePage }) => {
  return (
    <nav style={{borderRadius:"10px", border:"2px solid beige", backgroundColor: '#2c1810', padding: '1rem', display: 'flex', justifyContent: 'space-around' }}>
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



const VinylPlayer = ({ sample }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activePage, setActivePage] = useState('Samples');

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
        <div className="vinyl-disc" style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="vinyl-label">
            <span>{sample.name}</span>
          </div>
        </div>
        <div className="vinyl-controls">
          <button className="vinyl-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-8 w-8" />}
          </button>
          <button className="vinyl-btn">
            <RotateCcw className="h-8 w-8" />
          </button>
          <div className="vinyl-volume">
            <Volume2 className="h-8 w-8" />
            <input type="range" min="0" max="100" className="vintage-slider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinylPlayer;
