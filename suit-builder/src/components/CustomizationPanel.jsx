import React, { useState } from 'react'
import './CustomizationPanel.css'

const ironManParts = {
  helmet: [
    { id: 'classic', name: 'Mark L Classic', description: 'Traditional Iron Man helmet design' },
    { id: 'stealth', name: 'Stealth Mode', description: 'Advanced tactical helmet' },
    { id: 'mark85', name: 'Mark 85', description: 'Latest generation helmet' }
  ],
  reactor: [
    { id: 'mark50', name: 'Mark 50 Reactor', description: 'Standard arc reactor' },
    { id: 'vibranium', name: 'Vibranium Enhanced', description: 'Vibranium-powered reactor' },
    { id: 'nanotech', name: 'Nanotech Core', description: 'Self-assembling reactor' }
  ],
  repulsors: [
    { id: 'standard', name: 'Standard Repulsors', description: 'Basic energy projection' },
    { id: 'enhanced', name: 'Enhanced Output', description: 'Increased power output' },
    { id: 'pulse', name: 'Pulse Cannons', description: 'Concentrated energy bursts' }
  ]
}

const spiderManParts = {
  mask: [
    { id: 'classic', name: 'Classic Spider', description: 'Traditional spider mask' },
    { id: 'tech', name: 'Tech Enhanced', description: 'HUD-enabled mask' },
    { id: 'stealth', name: 'Stealth Suit', description: 'Black ops spider mask' }
  ],
  logo: [
    { id: 'spider', name: 'Spider Symbol', description: 'Classic spider emblem' },
    { id: 'stark', name: 'Stark Enhanced', description: 'Tech-enhanced logo' },
    { id: 'iron', name: 'Iron Spider', description: 'Metallic spider design' }
  ],
  webShooters: [
    { id: 'mechanical', name: 'Mechanical', description: 'Peter Parker original design' },
    { id: 'stark', name: 'Stark Tech', description: 'Tony Stark enhanced shooters' },
    { id: 'nanotech', name: 'Nanotech Web', description: 'Self-assembling web system' }
  ]
}

function CustomizationPanel({ hero, config, onConfigChange }) {
  const [activeTab, setActiveTab] = useState('colors')
  const parts = hero === 'ironman' ? ironManParts : spiderManParts

  const handleColorChange = (colorType, value) => {
    onConfigChange({
      colors: {
        ...config.colors,
        [colorType]: value
      }
    })
  }

  const handlePartChange = (partType, partId) => {
    onConfigChange({
      parts: {
        ...config.parts,
        [partType]: partId
      }
    })
  }

  return (
    <div className="customization-panel glass-panel floating-delayed">
      <div className="panel-header scanning-line">
        <h3 className="text-glow-blue">
          {hero === 'ironman' ? 'ARMOR CUSTOMIZATION' : 'SUIT MODIFICATION'}
        </h3>
        <div className="status-indicator pulse">
          <span className="text-glow-gold">ONLINE</span>
        </div>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-button stark-button ${activeTab === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveTab('colors')}
        >
          COLORS
        </button>
        <button 
          className={`tab-button stark-button ${activeTab === 'parts' ? 'active' : ''}`}
          onClick={() => setActiveTab('parts')}
        >
          COMPONENTS
        </button>
      </div>

      <div className="panel-content">
        {activeTab === 'colors' && (
          <div className="colors-section">
            <div className="color-group">
              <label className="color-label">Primary Color</label>
              <div className="color-input-group">
                <input
                  type="color"
                  value={config.colors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="color-picker"
                />
                <div className="color-presets">
                  {hero === 'ironman' ? (
                    <>
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#DC143C' }}
                        onClick={() => handleColorChange('primary', '#DC143C')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#000000' }}
                        onClick={() => handleColorChange('primary', '#000000')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#4169E1' }}
                        onClick={() => handleColorChange('primary', '#4169E1')}
                      />
                    </>
                  ) : (
                    <>
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#FF0000' }}
                        onClick={() => handleColorChange('primary', '#FF0000')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#000000' }}
                        onClick={() => handleColorChange('primary', '#000000')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#800080' }}
                        onClick={() => handleColorChange('primary', '#800080')}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="color-group">
              <label className="color-label">Secondary Color</label>
              <div className="color-input-group">
                <input
                  type="color"
                  value={config.colors.secondary}
                  onChange={(e) => handleColorChange('secondary', e.target.value)}
                  className="color-picker"
                />
                <div className="color-presets">
                  {hero === 'ironman' ? (
                    <>
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#FFD700' }}
                        onClick={() => handleColorChange('secondary', '#FFD700')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#C0C0C0' }}
                        onClick={() => handleColorChange('secondary', '#C0C0C0')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#00FFFF' }}
                        onClick={() => handleColorChange('secondary', '#00FFFF')}
                      />
                    </>
                  ) : (
                    <>
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#0000FF' }}
                        onClick={() => handleColorChange('secondary', '#0000FF')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#FFFFFF' }}
                        onClick={() => handleColorChange('secondary', '#FFFFFF')}
                      />
                      <button 
                        className="preset-color"
                        style={{ backgroundColor: '#FFD700' }}
                        onClick={() => handleColorChange('secondary', '#FFD700')}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'parts' && (
          <div className="parts-section">
            {Object.entries(parts).map(([partType, partOptions]) => (
              <div key={partType} className="part-group">
                <h4 className="part-title text-glow-blue">
                  {partType.charAt(0).toUpperCase() + partType.slice(1).replace(/([A-Z])/g, ' $1')}
                </h4>
                <div className="part-options">
                  {partOptions.map((part) => (
                    <div
                      key={part.id}
                      className={`part-option glass-panel ${
                        config.parts[partType] === part.id ? 'selected neon-glow-gold' : ''
                      }`}
                      onClick={() => handlePartChange(partType, part.id)}
                    >
                      <div className="part-name">{part.name}</div>
                      <div className="part-description">{part.description}</div>
                      {config.parts[partType] === part.id && (
                        <div className="selection-indicator">
                          <span className="text-glow-gold">✓ EQUIPPED</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="panel-footer">
        <div className="modification-status">
          <span className="status-text text-glow-blue">MODIFICATIONS APPLIED</span>
          <div className="status-bar">
            <div className="status-fill neon-glow-blue"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizationPanel