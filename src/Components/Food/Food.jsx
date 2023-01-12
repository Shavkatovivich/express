import React from 'react';
import { Link } from 'react-router-dom';
import "./Food.css"

// imports images 
import imgJiz from "../../Assets/Img/jiz.jpg"
import imgOsh from "../../Assets/Img/payOsh.jpg"
import imgShashlik from "../../Assets/Img/Shashlik.jpg"
import imgIshtixon from "../../Assets/Img/ishtixon.jpg"
import imgIbrohim from "../../Assets/Img/Ibrohimbek.jpg"
import imgGrand from "../../Assets/Img/grand-somsa.jpg"

const Food = () => {


    return (
        <div>
            <div className="container">
                <div className="food">
                    <ul className="food__list">
                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgJiz} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Jiz Markazi</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgOsh} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Pay-Osh</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>


                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgShashlik} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Shashlik Mangal Markazi</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgShashlik} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Shashlik Mangal Markazi</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>


                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgIbrohim} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Ibrohim Bek</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className="food__list-item">
                            <Link to="/">
                                <img className='food__item-img' src={imgGrand} alt="Jiz markazi" />
                                <span className="food__item-like"><i className="fa-regular fa-heart food__like"></i></span>
                                <div className="food__item-info">
                                    <h3 className="food__item-title">Ibrohim Bek</h3>
                                    <p className="food__item-text">Milliy barbekyu</p>
                                    <div className="food__info-price">
                                        <span className="food__price-info"><i className="fa-regular fa-star"></i>4.2</span>
                                        <span className="food__price-info"><i className="fa-solid fa-car-rear"></i>21 400 so'm</span>
                                    </div>
                                </div>
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Food;