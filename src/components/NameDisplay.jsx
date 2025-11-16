import React from 'react';
import './NameDisplay.scss';
import { ContainerTextFlip } from './ui/ContainerTextFlip';

const NameDisplay = () => {
  return (
    <div className="name-display">
      <p className="greeting">Hi, I'm</p>
      <h1 className="name">Priyanshu Samal</h1>
      <p className="subheading">Fullstack & GenAI Dev🧬</p>
      
    </div>
  );
};

export default NameDisplay;
