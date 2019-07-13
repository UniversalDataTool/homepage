import React from "react"
import Theme from "./components/Theme"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Mission from "./components/Mission"

function App() {
  return (
    <Theme>
      <Hero />
      <Navigation />
      <Mission />
    </Theme>
  )
}

export default App
