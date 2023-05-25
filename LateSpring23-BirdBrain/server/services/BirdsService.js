import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class BirdsService {

  async getBirds(query) {
    const birds = await dbContext.Birds.find(query)
      .populate('birdWatcher', 'name picture')
      .populate('spotterCount')
      // NOTE this is going default sort in ascending order
      // NOTE IF I added a '-' in front of spotterCount then it would sort by descending order
      .sort('spotterCount')
    return birds
  }

  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId)
      .populate('birdWatcher', 'name picture')
      .populate('spotterCount')
    if (!bird) {
      throw new BadRequest('You havent seen this bird .... it doesnt exist...')
    }
    return bird
  }

  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    await newBird.populate('birdWatcher spotterCount', 'name picture')
    return newBird
  }
}


export const birdsService = new BirdsService()