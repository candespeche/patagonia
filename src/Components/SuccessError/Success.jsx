import React from 'react';
import styles from "./successerror.module.css"
import tick from "../../assets/tick.svg"
function Success() {
    return (
        <div className={styles.successContainer}>
            <img src={tick} alt="success" />
        </div>
    );
}

export default Success;
