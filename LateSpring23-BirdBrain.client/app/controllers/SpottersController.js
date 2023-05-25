import { AppState } from "../AppState.js";
import { spottersService } from "../services/SpottersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawSpotters() {
    let spotters = AppState.spotters
    let template = ''
    spotters.forEach(s => template += `<img class="watcher-img m-1" title="${s.name}"
            src="${s.picture}"
            alt="">`)
    setHTML('spotters', template)
}


export class SpottersController {
    constructor() {
        console.log('hello from the spotters controller');
        AppState.on('spotters', _drawSpotters)
    }

    async becomeSpotter(birdId) {
        try {
            console.log('becoming spotter', birdId);
            await spottersService.becomeSpotter(birdId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

}