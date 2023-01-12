import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css"
import SimpleMap from './SimpleMap/SimpleMap';

// import images 
import siteLogo from "../../Assets/Img/express-logo.png"
import { TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 650,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    overflow: 'scroll',
};

const Header = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [useropen, setUseropen] = useState(false)

    const userModal = () => {
        setUseropen(!useropen)
    }

    const userClose = () => setUseropen(false);



    return (
        <div className='header'>
            <div className="header__main">
                <div className="header__nav">
                    <Link to="/">
                        <img src={siteLogo} alt="" width={200} height={60} />
                    </Link>
                    <div className="header__nav-form">
                        <form className='header__form' action="#">
                            <i className="fa-solid fa-magnifying-glass header__form-search" ></i>
                            <input className='header__form-input' type="text" placeholder='Tashkilot, taom, mahsulot yoki oshxona' />
                            <button className='header__form-btn' type='submit'>Izlash</button>
                        </form>

                        <div className="header__map">
                            <i className="fa-solid fa-location-dot header__map-location"></i>
                            <button className='header__map-btn' onClick={handleOpen}>Manzilni kiriting</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div className="modal__top">
                                            <h3 className="modal_title">Yetkazib berish manzili</h3>
                                            <i onClick={handleClose} id='modal__btn' className="fas fa-times"></i>
                                        </div>
                                    </Typography>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '68ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Manzilni kiriting" variant="outlined" />
                                    </Box>
                                    <SimpleMap />
                                    <form action="#" className="modal__form">
                                        <div className="modal__form-inp">
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '21.8ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Podyezd" variant="outlined" />
                                                <TextField id="outlined-basic" label="Qavat" variant="outlined" />
                                                <TextField id="outlined-basic" label="Kvartira" variant="outlined" />
                                            </Box>
                                        </div>
                                        <div className="modal__form-bottomInput">
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& > :not(style)': { m: 1, width: '68.6ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <TextField id="outlined-basic" label="Izoh, orientir" variant="outlined" />
                                            </Box>
                                        </div>

                                        <button className="modal__form-btn">Tasdiqlang</button>
                                    </form>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="header__nav-user">
                    <div type='button' className="nav__user" onClick={userModal}>
                        <i class="far fa-user modal__user"></i>
                        <p className="nav__user-text">Profil</p>
                    </div>

                    {useropen ?
                        <div className="user__main-modal">
                            <div className="user__modal" >
                                <i onClick={userClose} id='modal__btn' class="fas fa-times modal__exit"></i>
                                <h3 className="user__modal-title">Telefon raqamini kiriting</h3>
                                <span className="user__modal-span">va tasdiqlash kodini oling</span>

                                <form action="#" className="modal__form">
                                    <input className='modal__form-input' type="text" placeholder='Telefon raqamini kiriting' />

                                    <span className="form__info">
                                        Tugmani bosish orqali kodni oling, siz shartlarni qabul qilasiz
                                        <br />
                                        <Link className='form__info-link' to="/">foydalanuvchi shartnomasi</Link>
                                    </span>

                                    <button className='modal__form-btn' type='submit'>Kodni olish uchun</button>
                                </form>
                            </div>
                        </div> : ""
                    }
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Header;