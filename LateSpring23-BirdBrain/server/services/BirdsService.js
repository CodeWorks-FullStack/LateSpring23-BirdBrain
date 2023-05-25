import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class BirdsService {

  async getBirds(query) {
    const birds = await dbContext.Birds.find(query)
      .populate('birdWatcher', 'name picture')
    return birds
  }

  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId)
      .populate('birdWatcher', 'name picture')
    if (!bird) {
      throw new BadRequest('You havent seen this bird .... it doesnt exist...')
    }
    return bird
  }

  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    await newBird.populate('birdWatcher', 'name picture')
    return newBird
  }
}


export const birdsService = new BirdsService()