const mongoose = require('mongoose')
const CompanySchema = require('./company')
const DriverSchema = require('./driver')
const RouteSchema = require('./route')

const Company = mongoose.model('Company', CompanySchema)
const Driver = mongoose.model('Driver', DriverSchema)
const Route = mongoose.model('Route', RouteSchema)

module.exports = {
    Company,
    Driver,
    Route
}