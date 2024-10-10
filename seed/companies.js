const db = require('../db')
const { Company } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const companies = [
    {
        name: "TruckCo",
        location: "Georgia",
        drivers: 5
    },
    {
        name: "Truck-Kun Inc",
        location: "Seattle",
        drivers: 305
    },
  ]
  await Company.insertMany(companies)
  console.log('Created companies!')
}


const run = async () => {
  await main()
  db.close()
}

run()