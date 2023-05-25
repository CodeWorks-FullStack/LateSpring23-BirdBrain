import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { api } from "./AxiosService.js"

class SpottersService {

    async becomeSpotter(birdId) {
        const res = await api.post('api/spotters', { birdId: birdId })
        console.log('[BECOMING SPOTTER]', res.data);

        // NOTE this updates the UI to now match the state of our data in the database
        const bird = AppState.birds.find(b => b.id == birdId)
        bird.spotterCount++
        AppState.emit('birds')
    }

    async getSpottersForActiveBird() {
        const bird = AppState.activeBird
        const res = await api.get(`api/birds/${bird.id}/spotters`)
        // const res = await api.get('api/birds/' + bird.id + '/spotters')
        console.log('[GETTING SPOTTERS]', res.data);
        // NOTE here we are using our account model... because the spotters that are populated from the server come from the account collection in the data base
        AppState.spotters = res.data.map(s => new Account(s.watcher))
        console.log(AppState.spotters);

    }


}

export const spottersService = new SpottersService()