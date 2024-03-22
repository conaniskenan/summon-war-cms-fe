import React from 'react'
import bgPng from '@/assets/images/bg.png'
const Home: React.FC = () => {
  return (
    <div className="h-full">
      <img src={bgPng} alt="" className="object-fill h-full w-full" />
    </div>
  )
}

export default Home
