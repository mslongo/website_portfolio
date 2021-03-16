import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ( {slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (
                            <figure className="big-slide">
                                <div className="slide-info">
                                    <figcaption className="project-title"><a className="project-link" href={slide.link}>{slide.title}</a></figcaption>
                                    <figcaption className="project-category">{slide.category}</figcaption>
                                    <figcaption className="project-date">{slide.date}</figcaption>
                                    <figcaption className="project-exp">{slide.synopsis}</figcaption>
                                </div>
                                <img src={slide.image} alt={slide.alt} className="image"/>
                            </figure>
                            
                            
                        )}
                        
                    </div>
                )
                
            })}
        </section>
    )
}

export default ImageSlider
