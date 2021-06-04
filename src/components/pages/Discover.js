import React, {useState} from 'react'
import { ImageData } from '../ImageData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Discover.css'
import Video from '../Video'

const Discover = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current+1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  if (!Array.isArray(slides) || slides.lenth <= 0){
    return null;
  }


  return (
    <section className="slider">
      <video src='/videos/background.mp4' autoPlay loop muted />
      <FaArrowAltCircleLeft className="left-arrow"/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {ImageData.map((slide, index) => {
        return (
          <div className={index == current ? 'slide active': 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="travel" className='image'/>)}
            </div>
          
        )
      })}
    </section>
  )
}

export default Discover
