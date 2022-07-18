import { SceneGroups } from "../../models/ComicScenes";

export interface ComicScenesProvider {
    getComicScenes(): Promise<SceneGroups[]>;
}