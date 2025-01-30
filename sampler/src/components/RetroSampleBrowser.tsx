import React from 'react';
import { Music, Clock, Download } from 'lucide-react';

const RetroSampleBrowser = ({ samples }) => {
  return (
    <div className="retro-browser">
      <div className="retro-header">
        <h2 className="retro-title">Sample Collection</h2>
        <div className="retro-counter">
          {samples.length} samples available
        </div>
      </div>
      
      <div className="retro-samples-grid">
        {samples.map((sample) => (
          <div key={sample.id} className="retro-sample-card">
            <div className="retro-sample-info">
              <Music className="h-5 w-5" />
              <span className="retro-sample-name">{sample.name}</span>
              <span className="retro-sample-duration">
                <Clock className="h-4 w-4" />
                {sample.duration}
              </span>
            </div>
            <div className="retro-sample-controls">
              <button className="retro-btn">
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetroSampleBrowser