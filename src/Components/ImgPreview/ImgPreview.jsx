import React from "react";
import PropTypes from "prop-types";
import style from "./ImgPreview.modules.css";

export const ImgPreview = ({ dataUri, isFullscreen }) => {
    let classNameFullscreen = isFullscreen ? style.demoImagePreviewfullscreen : "";

    return (
        <div className={style.demoImagePreview + classNameFullscreen}>
            <img src={dataUri} />
        </div>
    );
};

ImgPreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
};

export default ImgPreview;
