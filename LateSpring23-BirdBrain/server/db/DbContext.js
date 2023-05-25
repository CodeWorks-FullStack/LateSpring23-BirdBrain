import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BirdSchema } from '../models/Bird.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Birds = mongoose.model('Bird', BirdSchema)
}

export const dbContext = new DbContext()
