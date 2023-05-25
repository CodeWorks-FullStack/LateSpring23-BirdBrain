import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BirdSchema } from '../models/Bird.js';
import { SpotterSchema } from '../models/Spotter.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Birds = mongoose.model('Bird', BirdSchema)

  Spotters = mongoose.model('Spotter', SpotterSchema)
}

export const dbContext = new DbContext()
