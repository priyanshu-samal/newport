import React from 'react';
import './BentoGrid.scss';

const BentoGrid = () => {
  return (
    <section className="bento-grid-section">
      <div className="bento-grid-container">
        {/* Row 1 */}
        <div className="bento-item bento-item--video-large">
          <video muted autoPlay loop className="bento-video" style={{ pointerEvents: 'none' }}>
            <source src="/video/4aug.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bento-item bento-item--small-1">
          <h3>Small Box 1</h3>
          <p>Content for small box 1</p>
        </div>

        {/* Row 2 */}
        <div className="bento-item bento-item--small-2">
          <h3>Small Box 2</h3>
          <p>Content for small box 2</p>
        </div>
        <div className="bento-item bento-item--video-large">
          <video muted autoPlay loop className="bento-video" style={{ pointerEvents: 'none' }}>
            <source src="/video/4snitch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Row 3 */}
        <div className="bento-item bento-item--small-3">
          <h3>Small Box 3</h3>
          <p>Content for small box 3</p>
        </div>
        <div className="bento-item bento-item--small-4">
          <h3>Small Box 4</h3>
          <p>Content for small box 4</p>
        </div>
        <div className="bento-item bento-item--small-5">
          <h3>Small Box 5</h3>
          <p>Content for small box 5</p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
