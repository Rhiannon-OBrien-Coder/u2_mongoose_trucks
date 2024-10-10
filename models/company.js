const { Schema } = require('mongoose')

const Company = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    drivers: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = Company