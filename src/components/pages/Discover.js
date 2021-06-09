import React, {useState} from 'react'
import { ImageData } from '../ImageData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Discover.css'
import Blog from "../Blog"
import Recommend from '../Recommend'

const Discover = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current+1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  if (!Array.isArray(slides) || slides.length <= 0){
    return null;
  }


  return (
    <>
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {ImageData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active': 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="travel" className='slide-image'/>)}
            </div>
          
        )
      })}
    </section>
    <Recommend />
    </>
  )
}

export default Discover
