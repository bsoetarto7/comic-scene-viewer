import React from "react";
import { State } from "../../store";
import { connect } from "react-redux";
import { comicScenesActionCreators } from "../../actions";
import { SceneGroups } from "../../models";
import "./style.css";

export interface StateProps {
  isLoading: boolean;
  sceneGroupsList: SceneGroups[];
}

export interface DispatchProps {
  getComicScenes: () => (dispatch: any) => any;
}

const renderSceneGroups = (sceneGroupsList: SceneGroups[]) => {

    return sceneGroupsList.splice(0,9).map((scene) => {
        return(
            <div key={scene.key}>
                <img src={scene.url}/>
            </div>
        );
    });
};

export const ComicScenes: React.FC<StateProps & DispatchProps> = ({
    getComicScenes,
    sceneGroupsList,
    isLoading
}) => {
    React.useEffect(() => {
        if(!isLoading && !sceneGroupsList.length) {
            getComicScenes();
        }
    }, [isLoading, sceneGroupsList]);

    return (
        <div className="container">
            {renderSceneGroups(sceneGroupsList)}
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
