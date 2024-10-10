const db = require('../db')
const { Company, Driver } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const truckco = await Company.find({ name: 'TruckCo' })
  const truckkun = await Company.find({ name: 'Truck-Kun Inc' })

  const drivers = [
      {
        name: 'Fred',
        hourly_wage: 23,
        hasClassALicense: true,
        numberOfRoutes: 3,
        company: truckkun[0]._id
      },
      {
        name: 'George',
        hourly_wage: 24,
        hasClassALicense: true,
        numberOfRoutes: 2,
        company: truckkun[0]._id
      },
      {
        name: 'Ron',
        hourly_wage: 20,
        hasClassALicense: true,
        numberOfRoutes: 4,
        company: truckco[0]._id
      },
      {
        name: 'Percy',
        hourly_wage: 21,
        hasClassALicense: true,
        numberOfRoutes: 3,
        company: truckco[0]._id
      },
  ]

  await Driver.insertMany(drivers)
  console.log('Created drivers with companies!')
}
const run = async () => {
  await main()
  db.close()
}

run()