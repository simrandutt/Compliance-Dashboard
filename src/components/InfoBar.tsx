import React, { useState } from 'react';
import '../styles/info.scss';

const InfoBar: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="info-bar" 
      onMouseEnter={() => setIsPaused(true)}  
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`scrolling-text ${isPaused ? 'paused' : ''}`}>
        Next maintenance is planned between 02/11/2024 Saturday 10:00 AM ET to 03/11/2024 Sunday 10:00 PM ET. Please ensure that all systems are prepared for downtime.
      </div>
    </div>
  );
};

export default InfoBar;
