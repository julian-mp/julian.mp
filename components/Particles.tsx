import { useEffect, useState } from 'react'
import Particles from 'react-particles-js'

import styles from './particles.module.css'

export default function ParticlesContainer({ children }) {
  const [windowHeight, setWindowHeight] = useState<number>()

  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    setWindowHeight(height)
  }, [])

  const colours = {
    background: '#FF715B',
    particles: '#564D80',
  }

  return (
    <div className={styles.container}>
      <div className={styles.particles}>
        <Particles
          height={`${windowHeight}px`}
          params={{
            background: {
              color: {
                value: colours.background,
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: colours.particles,
              },
              links: {
                color: colours.particles,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}
