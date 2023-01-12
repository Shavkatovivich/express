import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'better-react-carousel'
import "./Shops.css"

// imports images 
import imgShopOne from "../../Assets/Img/shopsOne.jpg"
import imgShopTwo from "../../Assets/Img/shopsTwo.jpg"
import imgShopThree from "../../Assets/Img/shopThree.jpg"
import imgShopFour from "../../Assets/Img/shopsFour.jpg"
import imgShopFive from "../../Assets/Img/shopsFive.jpg"
import imgShopSix from "../../Assets/Img/shopsSix.png"
import imgShopSeven from "../../Assets/Img/shopsSeven.jpg"
import imgShopEight from "../../Assets/Img/shopsEight.jpg"
// import imgShopNine from "../../Assets/Img/sho"

const Shops = () => {
    return (
        <div>
            <div className="container">
                <div className="shop__top">
                    <h1 className="shop__top-title">Do'konlar</h1>
                    <Link className='shop__top-link' to="/allshop">hammasini ko'rsatish
                        <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </div>

                <div className="shops__bottom">
                    {/* <div className="carousel__box"> */}
                    <Carousel cols={5} rows={1} gap={10} loop>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopOne} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopTwo} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopThree} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopFour} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopFive} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopSix} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopSeven} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopEight} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopEight} alt="imgOne" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel__box-img' src={imgShopOne} alt="imgOne" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
        // </div>
    );
};


export default Shops;