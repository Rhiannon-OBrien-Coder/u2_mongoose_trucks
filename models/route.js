const { Schema } = require('mongoose')

const Route = new Schema(
  {
    complete: { type: Boolean, required: true },
    time: { type: Number, required: true },
    distance_inMiles: { type: Number, required: true },
    departingLocation: { type: String, required: true }, 
    arrivalLocation: { type: String, required: true }, 
    company: { type: Schema.Types.ObjectId, ref: 'driver_id' }
  },
  { timestamps: true }
)

module.exports = Route