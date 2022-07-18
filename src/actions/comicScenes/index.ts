import { ActionCreatorsMapObject, Dispatch } from "redux";
import { ApiComicScenesProvider } from "../../providers";

export const comicSceneActionsTypes = {
    getComicScenesLoading: "GET_COMIC_SCENES_LOADING",
    getComicScenesSuccessful: "GET_COMIC_SCENES_SUCCESSFUL",
    getComicScenesError: "GET_COMIC_SCENES_ERROR",
};

export interface ComicScenesActionCreators extends ActionCreatorsMapObject {
    getComicScenes: () => (dispatch: Dispatch) => any;
}

export const comicScenesActionCreators: ComicScenesActionCreators = {
    getComicScenes() {
        return async (dispatch: Dispatch) => {
            dispatch({ type: comicSceneActionsTypes.getComicScenesLoading });
            const apiComicScenesProvider = new ApiComicScenesProvider("https://img.pixton.com/data/comic-scene-group-data.json");
            try {
                const comicScenes = await apiComicScenesProvider.getComicScenes();
                dispatch({ type: comicSceneActionsTypes.getComicScenesSuccessful, payload: comicScenes});
            } catch (e) {
                dispatch({ type: comicSceneActionsTypes.getComicScenesError });
            }
        };
    },
};
