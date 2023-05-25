import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { spottersService } from "../services/SpottersService.js";



export class SpottersController extends BaseController {
  constructor() {
    super('api/spotters')
    this.router
      // ROUTES
      .use(Auth0Provider.getAuthorizedUserInfo)
      // Become a spotter - this is a post because we are adding to the object
      .post('', this.becomeSpotter)
  }


  // NOTE this function is going to allow us to say that we have 'spotted' or 'seen' the bird in question
  async becomeSpotter(req, res, next) {
    try {
      req.body.watcherId = req.userInfo.id
      const spotter = await spottersService.becomeSpotter(req.body)
      return res.send(spotter)
    } catch (error) {
      next(error)
    }
  }
}