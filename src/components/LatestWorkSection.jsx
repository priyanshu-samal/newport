import React from 'react';
import { ContainerTextFlip } from './ui/ContainerTextFlip';
import BentoGrid from './BentoGrid';
import './LatestWorkSection.scss';

const LatestWorkSection = () => {
  return (
    <div className="latest-work-section">
      <h2 className="latest-work-heading">
        Check My Latest <ContainerTextFlip />
      </h2>
      
      <BentoGrid />
    </div>
  );
};

export default LatestWorkSection;
