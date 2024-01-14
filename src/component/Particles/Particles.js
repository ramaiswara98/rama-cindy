import React, { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles'
import ParticleConfig from '../../config/particle.config';

function ParticlesComponent() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles 
      id="tsparticles" 
      options={ParticleConfig} 
      init={particlesInit} 
      loaded={particlesLoaded}></Particles>
  )
}

export default ParticlesComponent