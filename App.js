import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>ISRO Upcoming Projects</h1>
      </header>
      <div className="hero">
        <div className="hero-content">
          <h2>Exploring the Final Frontier</h2>
          <p>Discover ISRO's ambitious upcoming projects and missions</p>
        </div>
      </div>
      <div className="projects">
        <h2>Our Missions</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Chandrayaan 3</h3>
            <p>Following the success of Chandrayaan 2, ISRO aims to land a rover on the Moon's surface to conduct further scientific experiments.</p>
            <span>Target Launch: 2023</span>
          </div>
          <div className="project-card">
            <h3>Gaganyaan</h3>
            <p>India's first manned space mission, Gaganyaan will send Indian astronauts (Gagannauts) into space for a 7-day mission.</p>
            <span>Target Launch: 2024</span>
          </div>
          <div className="project-card">
            <h3>Indian Space Station</h3>
            <p>ISRO plans to establish a space station that will enable long-term human presence in space, supporting various scientific and research activities.</p>
            <span>Target Launch: 2030</span>
          </div>
          <div className="project-card">
            <h3>Mangalyaan 2</h3>
            <p>Following the success of Mangalyaan 1, ISRO aims to further explore Mars with advanced instruments and technology, gathering more detailed data.</p>
            <span>Target Launch: 2024</span>
          </div>
          <div className="project-card">
            <h3>Shukrayaan</h3>
            <p>ISRO's mission to explore Venus, Shukrayaan aims to study the planet's atmosphere, surface, and geological history to understand its evolution and potential habitability.</p>
            <span>Target Launch: 2026</span>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 ISRO. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
