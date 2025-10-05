import React from 'react'
import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="arc-reactor-loader">
          <div className="reactor-core"></div>
          <div className="reactor-ring ring-1"></div>
          <div className="reactor-ring ring-2"></div>
          <div className="reactor-ring ring-3"></div>
        </div>
        
        <div className="loading-text">
          <h2 className="text-glow-blue">INITIALIZING STARK TECH</h2>
          <div className="loading-dots">
            <span className="dot pulse">●</span>
            <span className="dot pulse" style={{ animationDelay: '0.2s' }}>●</span>
            <span className="dot pulse" style={{ animationDelay: '0.4s' }}>●</span>
          </div>
          <p className="loading-status text-glow-gold">
            Loading 3D suit models...
          </p>
        </div>
        
        <div className="scan-lines"></div>
        <div className="holographic-grid"></div>
      </div>
    </div>
  )
}

export default LoadingScreen