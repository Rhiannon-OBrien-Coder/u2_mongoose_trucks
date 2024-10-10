// Write your queries here
const db = require('./db')
const { Company } = require('./models')
const { Driver } = require('./models')
const { Route } = require('./models')

  const updateRoute = async () => {
    const updated = await Route.updateOne(
        { complete: false },
        { salary: true }
    )
    console.log(updated)
  }

async function main() {
  try {
    await updateRoute()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()