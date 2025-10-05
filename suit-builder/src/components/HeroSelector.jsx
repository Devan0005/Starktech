import React, { useState } from 'react'
import './HeroSelector.css'

const heroes = [
  {
    id: 'ironman',
    name: 'Iron Man',
    title: 'Mark L Armor',
    icon: '🤖',
    color: '#DC143C',
    description: 'Advanced nanoparticle technology with repulsors and arc reactor'
  },
  {
    id: 'spiderman', 
    name: 'Spider-Man',
    title: 'Web-Slinger Mk-IV',
    icon: '🕷️',
    color: '#FF0000',
    description: 'Enhanced web-shooters with tactical suit integration'
  }
]

function HeroSelector({ selectedHero, onHeroSelect }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`hero-selector glass-panel floating ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="selector-toggle stark-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="toggle-icon">⚡</span>
        HERO SELECT
      </button>

      <div className="heroes-list">
        {heroes.map(hero => (
          <div
            key={hero.id}
            className={`hero-card glass-panel ${selectedHero === hero.id ? 'selected neon-glow-blue' : ''}`}
            onClick={() => {
              onHeroSelect(hero.id)
              setIsExpanded(false)
            }}
          >
            <div className="hero-scan-line scanning-line"></div>
            
            <div className="hero-icon" style={{ color: hero.color }}>
              {hero.icon}
            </div>
            
            <div className="hero-info">
              <h3 className="hero-name text-glow-blue">{hero.name}</h3>
              <p className="hero-title">{hero.title}</p>
              <p className="hero-description">{hero.description}</p>
            </div>

            <div className="hero-status">
              {selectedHero === hero.id ? (
                <span className="status-active text-glow-gold pulse">ACTIVE</span>
              ) : (
                <span className="status-ready">READY</span>
              )}
            </div>

            {selectedHero === hero.id && (
              <div className="selection-glow"></div>
            )}
          </div>
        ))}
      </div>

      <div className="selector-footer">
        <div className="power-indicator">
          <span className="power-label">POWER</span>
          <div className="power-bar">
            <div className="power-fill neon-glow-blue"></div>
          </div>
          <span className="power-value text-glow-blue">100%</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSelector