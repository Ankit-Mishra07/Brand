import React from 'react'
import Carousel from './Carousel'
import { CarouselItem } from './Carousel'
import { SlidesImages } from '../Contants/slideimg'

const Slides = () => {
    return (
        <div>
        <Carousel>
            {
               SlidesImages.map((e) => (
                   <CarouselItem width={"80%"}>
                       <img width="100%" height="100%" src={e} alt="" />
                   </CarouselItem>
               )) 
            }
      </Carousel>
        </div>
    )
}

export default Slides
