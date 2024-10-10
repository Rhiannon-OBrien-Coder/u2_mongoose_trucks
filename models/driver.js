const { Schema } = require('mongoose')

const Driver = new Schema(
  {
    name: { type: String, required: true },
    hourly_wage: { type: String, required: true },
    hasClassALicense: { type: Boolean, required: true },
    numberOfRoutes: { type: Number, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'company_id' }
  },
  { timestamps: true }
)

module.exports = Driver