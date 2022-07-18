import { comicSceneActionsTypes } from "../../actions";
import { ComicScenes } from "../../models";

export const initialComicScenesState: ComicScenes = {
    sceneGroupsList:[],
    isComicSceneLoading: false,
};

export const comicScenesReducer = (state = initialComicScenesState, actions: any) => {
    switch (actions.type) {
    case comicSceneActionsTypes.getComicScenesLoading:
        return {
            ...state,
            isComicSceneLoading: true,
        };
    case comicSceneActionsTypes.getComicScenesSuccessful:
        return {
            ...state,
            sceneGroupsList: actions.payload,
            isComicSceneLoading: false,
        };
    default:
        return state;
    }
};
