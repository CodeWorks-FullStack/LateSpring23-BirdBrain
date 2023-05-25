import { Schema } from "mongoose";


export const SpotterSchema = new Schema(
  {
    birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' },
    watcherId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

SpotterSchema.virtual('watcher', {
  localField: 'watcherId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// NOTE this will prevent the same person from watching a bird twice
// This is saying that only one thing in MongoDB can exist with this watcherId and this birdId (i.e. cant spot a bird twice)
SpotterSchema.index({ watcherId: 1, birdId: 1 }, { unique: true })