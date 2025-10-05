import React from 'react'
import './StatsPanel.css'

const heroStats = {
  ironman: {
    baseStats: {
      strength: 85,
      agility: 70,
      intelligence: 98,
      technology: 95,
      durability: 88,
      energy: 92
    },
    systems: [
      { name: 'REPULSORS', status: 'ONLINE', power: 100 },
      { name: 'FLIGHT SYS', status: 'ACTIVE', power: 98 },
      { name: 'ARC REACTOR', status: 'STABLE', power: 100 },
      { name: 'TARGETING', status: 'LOCKED', power: 95 }
    ]
  },
  spiderman: {
    baseStats: {
      strength: 75,
      agility: 98,
      intelligence: 85,
      technology: 70,
      durability: 78,
      energy: 88
    },
    systems: [
      { name: 'WEB FLUID', status: 'FULL', power: 100 },
      { name: 'SPIDER SENSE', status: 'ACTIVE', power: 100 },
      { name: 'WALL CRAWL', status: 'ENABLED', power: 100 },
      { name: 'HUD SYSTEM', status: 'ONLINE', power: 87 }
    ]
  }
}

function StatsPanel({ hero, config }) {
  const stats = heroStats[hero]
  
  const getStatModifier = (statName) => {
    // Modify stats based on configuration
    let modifier = 0
    
    if (hero === 'ironman') {
      if (config.parts.reactor === 'vibranium') modifier += 5
      if (config.parts.reactor === 'nanotech') modifier += 3
      if (config.parts.repulsors === 'enhanced') modifier += 4
      if (config.parts.repulsors === 'pulse') modifier += 6
    } else {
      if (config.parts.webShooters === 'stark') modifier += 4
      if (config.parts.webShooters === 'nanotech') modifier += 6
      if (config.parts.mask === 'tech') modifier += 3
    }
    
    return modifier
  }

  const getModifiedStat = (statName, baseStat) => {
    const modifier = getStatModifier(statName)
    return Math.min(100, baseStat + modifier)
  }

  const calculateOverallPower = () => {
    const totalStats = Object.values(stats.baseStats).reduce((sum, stat) => sum + stat, 0)
    const maxStats = Object.keys(stats.baseStats).length * 100
    return Math.round((totalStats / maxStats) * 100)
  }

  return (
    <div className="stats-panel glass-panel floating">
      <div className="panel-header scanning-line">
        <h3 className="text-glow-blue">
          {hero === 'ironman' ? 'ARMOR DIAGNOSTICS' : 'SUIT ANALYTICS'}
        </h3>
        <div className="power-level text-glow-gold pulse">
          PWR: {calculateOverallPower()}%
        </div>
      </div>

      <div className="stats-content">
        <div className="stats-grid">
          {Object.entries(stats.baseStats).map(([statName, baseStat]) => {
            const modifiedStat = getModifiedStat(statName, baseStat)
            const isModified = modifiedStat !== baseStat
            
            return (
              <div key={statName} className="stat-item">
                <div className="stat-header">
                  <span className="stat-name">
                    {statName.toUpperCase()}
                  </span>
                  <span className={`stat-value ${isModified ? 'text-glow-gold' : 'text-glow-blue'}`}>
                    {modifiedStat}
                    {isModified && <span className="stat-modifier">+{modifiedStat - baseStat}</span>}
                  </span>
                </div>
                <div className="stat-bar">
                  <div 
                    className="stat-fill"
                    style={{ 
                      width: `${modifiedStat}%`,
                      background: isModified 
                        ? 'linear-gradient(90deg, var(--stark-gold), var(--stark-blue))'
                        : 'linear-gradient(90deg, var(--stark-blue), var(--stark-blue-dark))'
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="systems-status">
          <h4 className="systems-title text-glow-blue">SYSTEM STATUS</h4>
          <div className="systems-grid">
            {stats.systems.map((system, index) => (
              <div key={system.name} className="system-item">
                <div className="system-info">
                  <span className="system-name">{system.name}</span>
                  <span className="system-status text-glow-gold">{system.status}</span>
                </div>
                <div className="system-power">
                  <div className="power-bar">
                    <div 
                      className="power-fill neon-glow-blue"
                      style={{ width: `${system.power}%` }}
                    ></div>
                  </div>
                  <span className="power-percentage">{system.power}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="suit-metrics">
          <div className="metric-item">
            <span className="metric-label">THREAT LEVEL</span>
            <span className="metric-value text-glow-gold">
              {hero === 'ironman' ? 'AVENGER' : 'FRIENDLY NEIGHBORHOOD'}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LAST UPDATE</span>
            <span className="metric-value text-glow-blue">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">COMBAT READY</span>
            <span className="metric-value text-glow-gold pulse">YES</span>
          </div>
        </div>
      </div>

      <div className="panel-footer">
        <div className="diagnostic-status">
          <div className="status-icon neon-glow-blue pulse">●</div>
          <span className="status-text text-glow-blue">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </div>
  )
}

export default StatsPanel