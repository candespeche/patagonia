import React, { useState } from 'react';
import firebase from "../../firebase"
import Form from "./Form"
import imageCompression from "browser-image-compression";

function FormContainer() {
    const db = firebase.firestore();
    const [camera, setCamera] = useState(false);
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [ticket, setTicket] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(false);


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
        await db.collection("patagoniaprinter")
            .doc()
            .set({
                // id: uid,
                name: name,
                birth: birth,
                ticket: ticket,
                email: email,
                image: image
            })
            // .then((querySnapshot) => {
            //     querySnapshot.forEach(rut => {
            //         let data = rut.data();
            //         console.log(data, "DATA")
            //     })
            // })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

    }


    return (
        <div>
            <Form name={name} setName={setName} birth={birth} setBirth={setBirth} email={email} setEmail={setEmail} ticket={ticket} setTicket={setTicket} handleSubmit={handleSubmit} camera={camera} handleTakePhoto={handleTakePhoto} handleCameraError={handleCameraError} setCamera={setCamera} setImage={setImage} handleTakePhotoAnimationDone={handleTakePhotoAnimationDone} handleImageUpload={handleImageUpload} />
        </div>
    );
}

export default FormContainer;
