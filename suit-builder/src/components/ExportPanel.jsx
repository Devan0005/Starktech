import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import './ExportPanel.css'

function ExportPanel({ hero, config }) {
  const [isExporting, setIsExporting] = useState(false)
  const [heroName, setHeroName] = useState('')
  const [exportStatus, setExportStatus] = useState('')

  const captureScreenshot = async () => {
    setIsExporting(true)
    setExportStatus('Initializing capture...')
    
    try {
      // Wait a moment for UI updates
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setExportStatus('Scanning suit configuration...')
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setExportStatus('Capturing holographic display...')
      
      // Capture the 3D viewer
      const viewerElement = document.querySelector('.suit-viewer-3d')
      if (viewerElement) {
        const canvas = await html2canvas(viewerElement, {
          backgroundColor: 'rgba(0,0,0,0)',
          scale: 2,
          useCORS: true,
          allowTaint: true
        })
        
        setExportStatus('Processing image data...')
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Create download link
        const link = document.createElement('a')
        link.download = `${hero}-suit-${Date.now()}.png`
        link.href = canvas.toDataURL()
        link.click()
        
        setExportStatus('Export complete!')
        setTimeout(() => setExportStatus(''), 2000)
      }
    } catch (error) {
      console.error('Export failed:', error)
      setExportStatus('Export failed - Please try again')
      setTimeout(() => setExportStatus(''), 2000)
    } finally {
      setIsExporting(false)
    }
  }

  const generateHeroCard = () => {
    const suitName = heroName || `${hero === 'ironman' ? 'Iron Avenger' : 'Web Guardian'}`
    const timestamp = new Date().toLocaleString()
    
    const cardData = {
      heroName: suitName,
      suit: hero === 'ironman' ? 'Mark L Armor' : 'Web-Slinger Mk-IV',
      colors: config.colors,
      parts: config.parts,
      timestamp,
      stats: generateStats()
    }
    
    // Create a downloadable JSON file
    const dataStr = JSON.stringify(cardData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.download = `${suitName.replace(/\s+/g, '_')}-profile.json`
    link.href = url
    link.click()
    
    URL.revokeObjectURL(url)
  }

  const generateStats = () => {
    const baseStats = hero === 'ironman' 
      ? { strength: 85, agility: 70, intelligence: 98, technology: 95 }
      : { strength: 75, agility: 98, intelligence: 85, technology: 70 }
    
    // Add random variations based on customization
    return Object.fromEntries(
      Object.entries(baseStats).map(([key, value]) => [
        key, 
        Math.min(100, value + Math.floor(Math.random() * 10))
      ])
    )
  }

  const shareToSocial = () => {
    const text = `Just built my custom ${hero === 'ironman' ? 'Iron Man' : 'Spider-Man'} suit! Check out my Stark Tech creation. #StarkTech #SuitBuilder`
    
    if (navigator.share) {
      navigator.share({
        title: 'My Custom Stark Tech Suit',
        text: text,
        url: window.location.href
      })
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${window.location.href}`)
      setExportStatus('Link copied to clipboard!')
      setTimeout(() => setExportStatus(''), 2000)
    }
  }

  return (
    <div className="export-panel glass-panel floating">
      <div className="panel-header scanning-line">
        <h3 className="text-glow-blue">SUIT DEPLOYMENT</h3>
        <div className="deployment-status">
          {isExporting ? (
            <span className="text-glow-gold pulse">EXPORTING...</span>
          ) : (
            <span className="text-glow-blue">READY</span>
          )}
        </div>
      </div>

      <div className="export-content">
        <div className="hero-naming">
          <label className="name-label">Hero Identity</label>
          <input
            type="text"
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            placeholder={hero === 'ironman' ? 'Iron Avenger' : 'Web Guardian'}
            className="name-input"
          />
        </div>

        <div className="export-options">
          <button 
            className="export-button stark-button"
            onClick={captureScreenshot}
            disabled={isExporting}
          >
            <span className="button-icon">📸</span>
            CAPTURE SUIT
          </button>

          <button 
            className="export-button stark-button"
            onClick={generateHeroCard}
            disabled={isExporting}
          >
            <span className="button-icon">🆔</span>
            HERO PROFILE
          </button>

          <button 
            className="export-button stark-button"
            onClick={shareToSocial}
            disabled={isExporting}
          >
            <span className="button-icon">🚀</span>
            SHARE DESIGN
          </button>
        </div>

        {exportStatus && (
          <div className="export-status">
            <div className="status-message text-glow-gold">
              {exportStatus}
            </div>
            <div className="progress-bar">
              <div className="progress-fill neon-glow-blue"></div>
            </div>
          </div>
        )}

        <div className="suit-summary">
          <h4 className="summary-title text-glow-blue">CONFIGURATION SUMMARY</h4>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Hero Type:</span>
              <span className="summary-value">
                {hero === 'ironman' ? 'Iron Man' : 'Spider-Man'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Primary Color:</span>
              <span 
                className="color-swatch" 
                style={{ backgroundColor: config.colors.primary }}
              ></span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Secondary Color:</span>
              <span 
                className="color-swatch"
                style={{ backgroundColor: config.colors.secondary }}
              ></span>
            </div>
            {Object.entries(config.parts).map(([partType, partValue]) => (
              <div key={partType} className="summary-item">
                <span className="summary-label">
                  {partType.charAt(0).toUpperCase() + partType.slice(1)}:
                </span>
                <span className="summary-value">{partValue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel-footer">
        <div className="deployment-info">
          <div className="info-item">
            <span className="info-label">DEPLOYMENT ID:</span>
            <span className="info-value text-glow-blue">
              {`${hero.toUpperCase()}-${Date.now().toString().slice(-6)}`}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">STATUS:</span>
            <span className="info-value text-glow-gold">COMBAT READY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportPanel