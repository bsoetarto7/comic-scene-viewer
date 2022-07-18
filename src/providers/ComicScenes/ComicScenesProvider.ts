import { ComicScenesProvider } from ".";

export class ApiComicScenesProvider implements ComicScenesProvider {
    private url: string;

    constructor(comicScenesUrl: string) {
        this.url = comicScenesUrl;
    }

    public async getComicScenes() {
        const response = await fetch(this.url);
        let json;
        try {
            json = await response.json();
        } catch(e) {
            throw new Error("Images unable to retrieve");
        }

        return json.data.sceneGroups;
    }
}