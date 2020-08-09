import React from "react";
import style from "./form.module.css"
import Footer from '../Footer/Footer';
import camera01 from "../../assets/camara.svg"
import galery from "../../assets/galery.svg"
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function Form({ handleSubmit, error, terms, setTerms, name, setName, birth, setBirth, ticket, setTicket, email, setEmail, camera, setCamera, handleCameraError, handleTakePhoto, handleTakePhotoAnimationDone, handleImageUpload }) {

    console.log(error, "ERROR")
    return (
        < div className={style.registerContainer} >
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
                    <input type="text" label="nombre" placeholder="Nombre" className={style.input} value={name} onChange={event => setName(event.target.value)} />
                </form>
                <form className={style.input}>
                    <input type="calendar" label="nacimiento" placeholder="Fecha de Nacimiento" className={style.input} value={birth} onChange={event => setBirth(event.target.value)} />
                </form>
                <form className={style.input}>
                    <input type="text" label="ticket" placeholder="Numero de ticket / Apodo" className={style.input} value={ticket} onChange={event => setTicket(event.target.value)} />
                </form>
                <form className={style.input}>
                    <input type="email" label="email" placeholder="Email" className={style.input} value={email} onChange={event => setEmail(event.target.value)} />
                </form>
            </div>
            <div className={style.optionsContainer}></div>
            {
                camera ? (
                    <Camera
                        onTakePhoto={dataUri => {
                            handleTakePhoto(dataUri);
                        }}
                        onTakePhotoAnimationDone={dataUri => {
                            handleTakePhotoAnimationDone(dataUri);
                        }}
                        onCameraError={error => {
                            handleCameraError(error);
                        }}
                        idealFacingMode={FACING_MODES.ENVIRONMENT}
                        idealResolution={{ width: 640, height: 480 }}
                        imageType={IMAGE_TYPES.JPG}
                        imageCompression={0.97}
                        isMaxResolution={false}
                        isImageMirror={false}
                        isSilentMode={false}
                        isDisplayStartCameraError={true}
                        isFullscreen={false}
                        sizeFactor={1}
                    />
                ) : (
                        <div className={style.optionsContainer}>
                            <div className={style.optionBtn} onClick={() => setCamera(true)}>
                                <img src={camera01} alt="camera" />
                                <p className={style.optionTxt}>Tomar foto</p>
                            </div>

                            <button
                                className={style.optionBtn}
                                type="file"
                                accept="image/*"
                                onChange={event => handleImageUpload(event)}
                            >
                                <label htmlFor="file-upload">
                                    <div className={style.btnGaleria}>
                                        <img
                                            src={galery}
                                            alt="Upload image"
                                        />
                                        <p className={style.optionTxt}>Abrir galeria</p>
                                    </div>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={event => handleImageUpload(event)}
                                    />
                                </label>
                            </button>
                        </div>
                    )
            }

            <div className={style.checkContainer}>
                <input type="checkbox" id="ok" name="radio" onClick={() => setTerms(!terms)} />
                <label htmlFor="ok" className={style.checkTxt}>
                    He leído y acepto bases y condiciones, políticas de privacidad y activaciones de marketing.
                </label>
            </div>

            {error.length ? (
                <div className={style.errorContainer}>
                    <p className={style.errorTxt}>{error}</p>
                </div>
            ) : null
            }
            <div className={style.btnContainer} onClick={() => handleSubmit()}>
                <div className={style.buttonEnviar}>
                    <p>Enviar</p>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Form;
