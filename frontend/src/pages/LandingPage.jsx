import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Hero from '../components/landing/Hero.jsx'
import HandSelection from '../components/landing/HandSelection.jsx'
import Features from '../components/landing/Features.jsx'

function LandingPage() {
  const location = useLocation()

  // When the URL has a #section (from "Features" or "Get Started"),
  // scroll to that section. With no #section, go back to the top.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const section = document.getElementById(location.hash.slice(1))
    section?.scrollIntoView()
  }, [location.hash, location.key])

  return (
    <>
      <Hero />
      <HandSelection />
      <Features />
    </>
  )
}

export default LandingPage
