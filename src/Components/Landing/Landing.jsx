import React from 'react';
import { Link } from "react-router-dom"
import style from "./landing.module.css"
import banner from "../../assets/PatagoniaBanner.jpg"
import Footer from '../Footer/Footer';

function Landing() {
    return (
        <div>
            <div className={style.containerLanding}>
                <img className={style.banner} src={banner} alt="Patagonia" />
                <p className={style.h1Landing}>Tu foto en la cerveza</p>
                <div className={style.btnContainer}>
                    <Link to="/form">
                        <div className={style.btn}>
                            <p>Registrate aqui</p>
                        </div>
                    </Link>
                </div>
                <p className={style.h1Landing}>¿Cómo participar?</p>
                <div className={style.pasosContainer}>
                    <div className={style.pasosItems}>
                        <div className={style.pasosCircle}>
                            <p className={style.pasosNumber}>01</p>
                        </div>
                        <p className={style.pasosSubtitle}>Registra tus datos</p>
                    </div>

                    <div className={style.pasosItems}>
                        <div className={style.pasosCircle}>
                            <p className={style.pasosNumber}>02</p>
                        </div>
                        <p className={style.pasosSubtitle}>Sube tu foto</p>
                    </div>

                    <div className={style.pasosItems}>
                        <div className={style.pasosCircle}>
                            <p className={style.pasosNumber}>03</p>
                        </div>
                        <p className={style.pasosSubtitle}>Compartí en redes tu foto</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    );
}

export default Landing;
