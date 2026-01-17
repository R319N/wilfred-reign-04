'use client'

import pxToRem from '@/assets/theme/functions/pxToRem'
import myProjects from '@/constants/my-projects'
import { styles } from '@/styles/styles'
import { Box, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import PortfolioCard from './cards/PortfolioCard'

gsap.registerPlugin(ScrollTrigger)

const MyWork = () => {
  const stackingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const spacer = 50

    cardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: `center-=${index * spacer} center`,
        endTrigger: stackingRef.current,
        end: 'bottom center',
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true
      })

      gsap.to(card, {
        scaleX: 0.85 + index * 0.05,
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <Box id="smooth-wrapper">
      <Box id="smooth-content">
        <Box ref={stackingRef}>
          {myProjects.map((project, i) => (
            <Box
              key={i}
              ref={(el: HTMLDivElement | null) => {
                if (el) cardsRef.current[i] = el
              }}
              sx={{
                ...styles.stackingCard,
                ...styles.glassOutlinedDark,
                height: '300px',
                minWidth: { xs: '90%', md: '300px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: "1rem"
              }}
            >
              <PortfolioCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default MyWork
