import React, { useState, Suspense } from 'react'
import HeroSelector from './components/HeroSelector'
import SuitViewer3D from './components/SuitViewer3D'
import CustomizationPanel from './components/CustomizationPanel'
import StatsPanel from './components/StatsPanel'
import ExportPanel from './components/ExportPanel'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [selectedHero, setSelectedHero] = useState('ironman')
  const [suitConfig, setSuitConfig] = useState({
    ironman: {
      colors: {
        primary: '#DC143C',
        secondary: '#FFD700'
      },
      parts: {
        helmet: 'classic',
        reactor: 'mark50',
        repulsors: 'standard'
      }
    },
    spiderman: {
      colors: {
        primary: '#FF0000',
        secondary: '#0000FF'
      },
      parts: {
        mask: 'classic',
        logo: 'spider',
        webShooters: 'mechanical'
      }
    }
  })

  const updateSuitConfig = (updates) => {
    setSuitConfig(prev => ({
      ...prev,
      [selectedHero]: {
        ...prev[selectedHero],
        ...updates
      }
    }))
  }

  const currentConfig = suitConfig[selectedHero]

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title text-glow-blue">
          STARK TECH SUIT BUILDER
        </h1>
        <div className="stark-logo pulse">
          <div className="arc-reactor"></div>
        </div>
      </div>

      <div className="app-layout">
        <HeroSelector 
          selectedHero={selectedHero}
          onHeroSelect={setSelectedHero}
        />

        <div className="main-content">
          <div className="viewer-container">
            <Suspense fallback={<LoadingScreen />}>
              <SuitViewer3D 
                hero={selectedHero}
                config={currentConfig}
              />
            </Suspense>
          </div>

          <div className="control-panels">
            <CustomizationPanel
              hero={selectedHero}
              config={currentConfig}
              onConfigChange={updateSuitConfig}
            />
            
            <StatsPanel 
              hero={selectedHero}
              config={currentConfig}
            />
            
            <ExportPanel
              hero={selectedHero}
              config={currentConfig}
            />
          </div>
        </div>
      </div>

      <div className="holographic-overlay"></div>
      <div className="scanning-grid"></div>
    </div>
  )
}

export default App