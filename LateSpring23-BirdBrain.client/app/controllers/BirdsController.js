import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { bucketService } from "../services/AwsBucketService.js";
import { birdsService } from "../services/BirdsService.js";
import { spottersService } from "../services/SpottersService.js";
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
        // NOTE anytime the active bird changes, go and get its spotters
        AppState.on('activeBird', this.getSpottersForActiveBird)
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
        // @ts-ignore
        document.getElementById('cawcaw').play()
    }

    async createBird() {
        try {
            window.event.preventDefault()
            const form = event.target
            const formData = getFormData(form)

            const file = form.img.files[0]

            const uploadData = await bucketService.uploadFile(file)
            formData.img = uploadData.url

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

    async getSpottersForActiveBird() {
        try {
            await spottersService.getSpottersForActiveBird()
        }
        catch (error) {
            Pop.error(error);
        }
    }
}