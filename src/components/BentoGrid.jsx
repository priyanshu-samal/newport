import React from 'react';
import './BentoGrid.scss';

const BentoGrid = () => {
  return (
    <section className="bento-grid-section">
      <div className="bento-grid-container">
        {/* Row 1 */}
        <div className="bento-item bento-item--video-large">
          <video muted autoPlay loop playsInline className="bento-video" style={{ pointerEvents: 'none' }}>
            <source src="/video/q.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bento-item bento-item--small-1 bento-item--image">
          <a href="https://x.com/PriyanshuS92042" target="_blank" rel="noopener noreferrer">
            <img src="/1.png" alt="Image 1" className="bento-image" />
          </a>
        </div>

        {/* Row 2 */}
        <div className="bento-item bento-item--small-2 bento-item--image">
          <a href="https://x.com/PriyanshuS92042" target="_blank" rel="noopener noreferrer">
            <img src="/2.png" alt="Image 2" className="bento-image" />
          </a>
        </div>
        <div className="bento-item bento-item--video-large">
          <video muted autoPlay loop playsInline className="bento-video" style={{ pointerEvents: 'none' }}>
            <source src="/video/4snitch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Row 3 */}
        <div className="bento-item bento-item--small-3 bento-item--image bento-item--square">
          <img src="/extra1.jpg" alt="Extra Image 1" className="bento-image" />
        </div>
        <div className="bento-item bento-item--small-5 bento-item--image bento-item--square">
          <img src="/extra2.jpg" alt="Extra Image 2" className="bento-image" />
        </div>
        <div className="bento-item bento-item--small-4 bento-item--image">
          <a href="https://x.com/PriyanshuS92042" target="_blank" rel="noopener noreferrer">
            <img src="/3.png" alt="Image 3" className="bento-image" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
