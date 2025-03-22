import React from 'react'
import MySlider from '../../common/slider'
import Intro from '../../components/intro'

const Home = () => {
  return (
    <>
    <MySlider slide={<Intro/>} />
    </>
  )
}

export default Home