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