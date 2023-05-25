import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";
import { spottersService } from "../services/SpottersService.js";


export class BirdsController extends BaseController {
  constructor() {
    super('api/birds')
    this.router
      // Routes
      // Get all the birds
      .get('', this.getBirds)
      // Get a single bird
      .get('/:birdId', this.getBirdById)
      // Get spotters by birdId
      .get('/:birdId/spotters', this.getSpottersByBirdId)
      // Put some auth right here --> need to be logged in to do this stuff below
      .use(Auth0Provider.getAuthorizedUserInfo)
      // Create a bird
      .post('', this.createBird)
  }

  async getBirds(req, res, next) {
    try {
      const query = req.query
      const birds = await birdsService.getBirds(query)
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async getBirdById(req, res, next) {
    try {
      const birdId = req.params.birdId
      const bird = await birdsService.getBirdById(birdId)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async createBird(req, res, next) {
    try {
      // NOTE we need a way to attach the account(birdWatcher) to the userInfo
      req.body.birdWatcherId = req.userInfo.id
      const birdData = req.body
      const newBird = await birdsService.createBird(birdData)
      return res.send(newBird)
    } catch (error) {
      next(error)
    }
  }

  // NOTE this function will get all the accounts('spotters') that have seen the bird in question
  async getSpottersByBirdId(req, res, next) {
    try {
      const birdId = req.params.birdId
      const spotter = await spottersService.getSpottersByBirdId(birdId)
      return res.send(spotter)
    } catch (error) {
      next(error)
    }
  }
}