import React from 'react';
import { ContainerTextFlip } from './ui/ContainerTextFlip'; // Import directly
import './LatestVideoContent.scss';

function LatestVideoContent() {
  return (
    <section className="latest-video-content">
      <h2 className="latest-video-content__heading">
        Check my latest <ContainerTextFlip words={["video content", "tweets", "work"]} />
      </h2>
    </section>
  );
}

export default LatestVideoContent;