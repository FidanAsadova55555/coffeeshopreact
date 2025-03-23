import React from 'react'
import MySlider from '../../common/slider'
import Intro from '../../components/intro'
import Identical from '../../components/identical'

const Home = () => {
  return (
    <>
    <MySlider slide={<Intro/>} />
<div className="mt-[70px]">
<Identical reverse={false}/>

</div>
<Identical reverse={true}/>
<Identical />


    </>
  )
}

export default Home