import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Radio, Select } from 'antd';

import "./Rest.css";

const Rest = () => {

    const [select, setSelect] = useState(false);

    const showSelect = () => {
        setSelect(!select)
    }

    return (
        <div>
            <div className="container">
                <h1 className="rest__title">Restoranlar</h1>

                <div className="rest">
                    <div className="rest__nav">
                        <Link className="rest__nav-link" to={"/"} >
                            <i class="fa-solid fa-heart nav__link-heart"></i> Sevimlilar
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Uzcard
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Yangi
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Bozor
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Fastfood
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Milliy
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Osiyocha
                        </Link>
                        <Link className="rest__nav-link" to={"/"}>
                            Qahvaxona
                        </Link>
                    </div>

                    <button className="rest__nav-link" onClick={showSelect}>
                        Ko'proq <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {select ?
                        <div className="rest__select">
                            <Link className="rest__select-link" to={'/'}>Pitseriya</Link>
                            <Link className="rest__select-link" to={'/'}>Salomatlik</Link>
                            <Link className="rest__select-link" to={'/'}>Yevropacha</Link>
                            <Link className="rest__select-link" to={'/'}>Mahsulotlar</Link>
                            <Link className="rest__select-link" to={'/'}>Muzqaymoq</Link>
                            <Link className="rest__select-link" to={'/'}>Salomatlik</Link>
                            <Link className="rest__select-link" to={'/'}>Yevropacha</Link>
                            <Link className="rest__select-link" to={'/'}>Pitseriya</Link>
                            <Link className="rest__select-link" to={'/'}>Fastfood</Link>
                        </div> : ""
                    }


                </div>
            </div>
        </div>
    );
};

export default Rest;
