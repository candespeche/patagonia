import React, { useState } from 'react';
import firebase from "../../firebase"
import Form from "./Form"
import imageCompression from "browser-image-compression";
import ImgPreview from "../ImgPreview/ImgPreview"
import { useHistory } from "react-router-dom";

function FormContainer() {
    const db = firebase.firestore();
    const history = useHistory();
    const [camera, setCamera] = useState(false);
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [ticket, setTicket] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(false);
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState("");

    function handleTakePhotoAnimationDone(dataUri) {
        setCamera(false);
    }
    function handleCameraError(error) {
        console.log("error camara")
        // history.push("/404");
    }
    const handleTakePhoto = async dataUri => {
        await setImage(dataUri);

    };
    async function handleImageUpload(event) {
        // const aarr = event.target.files;
        const imageFile = event.target.files[0];
        const options = {
            maxSizeMB: 0.25,
            maxWidthOrHeight: 640,
            useWebWorker: true
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);
            let file = await toBase64(compressedFile);
            setImage(file);
        } catch (error) {
            console.log(error);
        }
    }

    const toBase64 = file =>
        new Promise((resolve, reject) => {
            console.log("tobase64", file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

    const handleSubmit = async () => {
        console.log("PRINCIPIO HANDLE")
        if (name === "") {
            setError("**El nombre no puede estar incompleto")
        }
        else if (birth === "") {
            setError("**La fecha de nacimiento no puede estar incompleta")
        }
        else if (ticket === "") {
            setError("**El número de ticket/apodo no puede estar incompleto")
        }
        else if (image === "") {
            setError("**Debés subir una imagen para continuar")
        }
        else if (email === "") {
            setError("**El email no puede estar incompleto")
        }
        else if (!terms) {
            setError("**Debés aceptar los términos y condiciones para continuar")
        } else {
            console.log("ELSE HANDLE")
            await db.collection("patagoniaprinter")
                .doc()
                .set({
                    name: name,
                    birth: birth,
                    ticket: ticket,
                    email: email,
                    image: image
                })
                .then(() => history.push("/success"))
        }
    }

    return (
        <div>
            <Form error={error} terms={terms} setTerms={setTerms} name={name} setName={setName} birth={birth} setBirth={setBirth} email={email} setEmail={setEmail} ticket={ticket} setTicket={setTicket} handleSubmit={handleSubmit} camera={camera} handleTakePhoto={handleTakePhoto} handleCameraError={handleCameraError} setCamera={setCamera} setImage={setImage} handleTakePhotoAnimationDone={handleTakePhotoAnimationDone} handleImageUpload={handleImageUpload} />
        </div>
    );
}

export default FormContainer;
