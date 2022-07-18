export interface SceneGroups {
    key: string;
    propCat: string;
    url: string;
    keyWords: string[];
}

export interface ComicScenes {
    sceneGroupsList: SceneGroups[];
    isComicSceneLoading: boolean;
}