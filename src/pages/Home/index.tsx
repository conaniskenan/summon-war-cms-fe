import React from 'react'
import bgPng from '@/assets/images/bg.png'
const Home: React.FC = () => {
  return (
    <div className="h-full">
      <img src={bgPng} alt="" className="object-contain h-full" />
    </div>
  )
}

export default Home
