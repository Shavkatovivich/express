import React from 'react';
import Carousel from 'better-react-carousel'

import "./Intro.css"
// imports images 
import imgOne from "../../Assets/Img/intro-img1.jpg"
import imgTwo from "../../Assets/Img/intro-img2.jpg"
import imgThree from "../../Assets/Img/intro-img3.jpg"
import imgFour from "../../Assets/Img/intro-img4.jpg"
import imgFive from "../../Assets/Img/introImg5.jpg"
import imgSix from "../../Assets/Img/intro-img6.jpg"
import imgSeven from "../../Assets/Img/intro-img7.jpg"
import imgEight from "../../Assets/Img/intro-img8.jpg"
import imgNine from "../../Assets/Img/intro-img9.jpg"


const breakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  

const Intro = () => {

    return (
        <div>
            <div className="container">
                <div className="carousel__box">
                    <Carousel breakPoints={breakpoint} cols={5} rows={1} gap={10} loop>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgOne} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgTwo} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgThree} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgFour} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgFive} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgSix} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgSeven} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgEight} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgEight} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgNine} alt="imgOne" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};


export default Intro;