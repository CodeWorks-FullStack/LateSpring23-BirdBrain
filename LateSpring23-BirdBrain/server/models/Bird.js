import mongoose, { Schema } from "mongoose"

export const BirdSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 2, maxLength: 30 },
    img: { type: String, required: true, maxLength: 500 },
    canFly: { type: Boolean, required: false, default: false },
    size: { type: String, required: true, enum: ['small', 'medium', 'large', 'chunko'] },
    birdWatcherId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  // NOTE you need the toJSON part to even be able to use the virtual
  { timestamps: true, toJSON: { virtuals: true } }
)

// NOTE this virtual is going to attach the creator info so that we are able to populate it on the bird object
BirdSchema.virtual('birdWatcher', {
  // localField exist on the schema
  localField: 'birdWatcherId',
  // foreignField is in mongoDB
  foreignField: '_id',
  // only one creator per object
  justOne: true,
  // what model does this virtual reference 
  ref: 'Account'
})