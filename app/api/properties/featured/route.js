import connetcDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties
export const GET = async request => {
  try {
    await connetcDB()

    const properties = await Property.find({
      is_featured: true,
    })

    return new Response(JSON.stringify(properties), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something went wrong', { status: 400 })
  }
}
