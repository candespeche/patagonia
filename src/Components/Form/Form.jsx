import React from 'react';
import style from "./form.module.css"
import Footer from '../Footer/Footer';
import camera from "../../assets/camara.svg"
import galery from "../../assets/galery.svg"

function Form() {
    return (
        <div className={style.registerContainer}>
            <div className={style.pasosContainer}>
                <div className={style.pasosCircle01}>
                    <p className={style.pasosNumber01}>01</p>
                </div>
                <div className={style.pasosLinea}></div>
                <div className={style.pasosCircle02}>
                    <p className={style.pasosNumber02}>02</p>
                </div>
            </div>
            <div className={style.registerTitle}>
                <p className={style.registerTitleTxt}>Mandanos tu</p>
                <div className={style.registerTitleBkg}>
                    <p className={style.registerTitleFoto}>foto</p>
                </div>
            </div>
            <div className={style.inputContainer}>
                <form className={style.input}>
                    <input type="text" name="nombre" placeholder="Nombre" className={style.input} />
                </form>
                <form className={style.input}>
                    <input type="calendar" name="nacimiento" placeholder="Fecha de Nacimiento" className={style.input} />
                </form>
                <form className={style.input}>
                    <input type="text" name="ticket" placeholder="Numero de ticket / Apodo" className={style.input} />
                </form>
                <form className={style.input}>
                    <input type="email" name="email" placeholder="Email" className={style.input} />
                </form>
            </div>
            <div className={style.optionsContainer}>
                <div className={style.optionBtn} onClick={() => console.log("cámara")}>
                    <img src={camera} alt="camera" />
                    <p className={style.optionTxt}>Tomar foto</p>
                </div>
                <div className={style.optionBtn} onClick={() => console.log("galería")}>
                    <img src={galery} alt="galery" />
                    <p className={style.optionTxt}>Abrir galeria</p>
                </div>
            </div>
            <div className={style.checkContainer}>
                <input type="checkbox" id="ok" name="radio" />
                <label htmlFor="ok" className={style.checkTxt}>
                    He leído y acepto bases y condiciones, políticas de privacidad y activaciones de marketing.
                </label>
            </div>
            <div className={style.btnContainer} onClick={() => console.log("enviar")}>
                <div className={style.buttonEnviar}>
                    <p>Enviar</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Form;
