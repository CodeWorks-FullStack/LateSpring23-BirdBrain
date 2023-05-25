import { dbContext } from "../db/DbContext.js"


class SpottersService {
  async getSpottersByBirdId(birdId) {
    const spotters = await dbContext.Spotters.find({ birdId })
      .populate('watcher', 'name picture')
    return spotters
  }

  async becomeSpotter(body) {
    const spotter = await dbContext.Spotters.create(body)
    await spotter.populate('watcher', 'name picture')
    return spotter
  }
}


export const spottersService = new SpottersService()