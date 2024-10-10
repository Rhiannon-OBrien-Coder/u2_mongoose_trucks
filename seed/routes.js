const db = require('../db')
const { Driver , Route } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const fred = await Driver.find({ name: 'Fred' })
  const george = await Driver.find({ name: 'George' })
  const ron = await Driver.find({ name: 'Ron' })
  const percy = await Driver.find({ name: 'Percy' })

  const routes = [
      {
        complete: true,
        time: 9,
        distance_inMiles: 603,
        departingLocation: "Kansas City, MO", 
        arrivalLocation: "Denver, CO",
        driver: fred[0]._id
      },
      {
        complete: false,
        time: 2,
        distance_inMiles: 50,
        departingLocation: "Denver, CO", 
        arrivalLocation: "Estes Park, CO",
        driver: fred[0]._id
      },
      {
        complete: true,
        time: 4,
        distance_inMiles: 250,
        departingLocation: "Kansas City, MO", 
        arrivalLocation: "St. Louis, MO",
        driver: george[0]._id
      },
      {
        complete: false,
        time: 5,
        distance_inMiles: 300,
        departingLocation: "St. Louis, MO", 
        arrivalLocation: "Chicago, IL",
        driver: george[0]._id
      },
      {
        complete: true,
        time: 9,
        distance_inMiles: 603,
        departingLocation: "Kansas City, MO", 
        arrivalLocation: "Denver, CO",
        driver: ron[0]._id
      },
      {
        complete: false,
        time: 2,
        distance_inMiles: 50,
        departingLocation: "Denver, CO", 
        arrivalLocation: "Estes Park, CO",
        driver: ron[0]._id
      },
      {
        complete: true,
        time: 4,
        distance_inMiles: 250,
        departingLocation: "Kansas City, MO", 
        arrivalLocation: "St. Louis, MO",
        driver: percy[0]._id
      },
      {
        complete: false,
        time: 5,
        distance_inMiles: 300,
        departingLocation: "St. Louis, MO", 
        arrivalLocation: "Chicago, IL",
        driver: percy[0]._id
      },
  ]

  await Route.insertMany(routes)
  console.log('Created routes with drivers!')
}
const run = async () => {
  await main()
  db.close()
}

run()