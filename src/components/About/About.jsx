import React from 'react';
import profileImage from './profile.jpg';

const About = () => (
  <div className="about">
    About me
    <img
      alt="About Me"
      style={{
        width: '100%',
      }}
      src={profileImage}
    />
  </div>
);

export default About;
