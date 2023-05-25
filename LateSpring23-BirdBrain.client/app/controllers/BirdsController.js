import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { birdsService } from "../services/BirdsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
    let birds = AppState.birds
    let template = ''
    birds.forEach(b => template += b.CardTemplate)
    setHTML('birds', template)
}

function _drawActive() {
    let bird = AppState.activeBird
    setHTML('modal-guts', bird.BirdDetails)
}

export class BirdsController {
    constructor() {
        console.log('hello from the birds controller')
        this.getBirds()
        AppState.on('birds', _drawBirds)
        AppState.on('activeBird', _drawActive)
    }

    async getBirds() {
        try {
            // console.log('getting birds')
            birdsService.getBirds()
        }
        catch (error) {
            Pop.error(error);
        }
    }

    async setActive(birdId) {
        try {
            console.log('setting active');
            birdsService.setActive(birdId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    getBirdForm() {
        setHTML('modal-guts', Bird.BirdForm())
    }

    async createBird() {
        try {
            window.event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            console.log('creating bird', formData);
            if (formData.canFly == 'on') {
                formData.canFly = true
            }
            await birdsService.createBird(formData)
            // @ts-ignore
            form.reset()
        }
        catch (error) {
            Pop.error(error);
        }
    }
}