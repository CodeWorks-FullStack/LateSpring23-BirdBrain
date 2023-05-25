import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";


export class BirdsController extends BaseController {
  constructor() {
    super('api/birds')
    this.router
      // Routes
      // Get all the birds
      .get('', this.getBirds)
      // Get a single bird
      .get('/:birdId', this.getBirdById)
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
}