import React from 'react';
import styles from "./successerror.module.css"
import tick from "../../assets/tick.svg"
import { useHistory } from "react-router-dom";

function Success() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    }
    return (
        <div onClick={() => handleClick()} className={styles.successContainer}>
            <img src={tick} alt="success" />
        </div>
    );
}

export default Success;
