import React from "react";
import { SceneGroups } from "../../models";
import "./style.css";

interface Props {
    imageToDisplay?: SceneGroups;
    onClose: () => void;
}

export const ImageGallery: React.FC<Props> = ({
    imageToDisplay,
    onClose,
}) => {
    
    return(
        <div className="imageContainer" onClick={() => onClose()}>
            {!!imageToDisplay && <img src={imageToDisplay.url} alt={`image-${imageToDisplay.key}`} className="imageSlide"/>}
        </div>
    );
};

export default ImageGallery;
