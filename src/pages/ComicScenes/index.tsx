import React from "react";
import { State } from "../../store";
import { connect } from "react-redux";
import { comicScenesActionCreators } from "../../actions";
import { SceneGroups } from "../../models";
import Col from "../../components/Flexbox/Col";
import "./style.css";
import ImageGallery from "../../components/ImageGallery";

export interface StateProps {
  isLoading: boolean;
  sceneGroupsList: SceneGroups[];
}

export interface DispatchProps {
  getComicScenes: () => (dispatch: any) => any;
}

const renderSceneGroups = (sceneGroupsList: SceneGroups[], onImageClick: (e: any, imageIndex: number) => void) => {

    return sceneGroupsList.map((scene, index) => {
        return(
            <Col key={scene.key}>
                <div onClick={(e) => onImageClick(e, index)}>
                    <img src={scene.url} alt={`image-${scene.key}`} className="sceneImage"/>
                </div>
            </Col>
        );
    });
};

export const ComicScenes: React.FC<StateProps & DispatchProps> = ({
    getComicScenes,
    sceneGroupsList,
    isLoading
}) => {
    const [showImageGallery, setShowImageGallery] = React.useState<boolean>(false);
    const [selectImage, setSelectedImage] = React.useState<SceneGroups>();

    React.useEffect(() => {
        if(!isLoading && !sceneGroupsList.length) {
            getComicScenes();
        }
    }, [isLoading, sceneGroupsList]);

    const onImageClick = React.useCallback((e: any, imageIndex: number) => {
        e.preventDefault();
        setShowImageGallery(true);
        setSelectedImage(sceneGroupsList[imageIndex]);
    }, [sceneGroupsList, showImageGallery, selectImage]);

    const onImageClose = React.useCallback(() => {
        setShowImageGallery(false);
    }, [showImageGallery]);

    return (
        <div className="container">
            {renderSceneGroups(sceneGroupsList, onImageClick)}
            {showImageGallery && <ImageGallery imageToDisplay={selectImage} onClose={onImageClose}/>}
        </div>
    );
};

const mapStateToProps = (state: State) => ({
    isLoading: state.comicScenes.isComicSceneLoading,
    sceneGroupsList: state.comicScenes.sceneGroupsList,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    getComicScenes: () => dispatch(comicScenesActionCreators.getComicScenes()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicScenes);
