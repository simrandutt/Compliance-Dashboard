import React from 'react';
import '../styles/info.scss';

const InfoBar: React.FC = () => {
  return (
    <div className="info-bar">
      <div className="scrolling-text">
        Next maintenance is planned between 02/11/2024 Saturday 10:00 AM ET to 03/11/2024 Sunday 10:00 PM ET . Please ensure that all systems are prepared for downtime.
      </div>
    </div>
  );
};

export default InfoBar;
