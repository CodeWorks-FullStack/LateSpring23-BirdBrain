import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { api } from "./AxiosService.js"

class BirdsService {


    async getBirds() {
        const res = await api.get('api/birds')
        console.log('[GETTING BIRDS]', res.data);
        AppState.birds = res.data.map(b => new Bird(b))
        // console.log(AppState.birds);
    }

    setActive(birdId) {
        const bird = AppState.birds.find(b => b.id == birdId)
        console.log('[SETTING ACTIVE]', bird);
        AppState.activeBird = bird
    }

    async createBird(formData) {
        const res = await api.post('api/birds', formData)
        console.log('[POSTING BIRD]', res.data);
        AppState.birds.unshift(new Bird(res.data))
        AppState.emit('birds')
    }

}

export const birdsService = new BirdsService()