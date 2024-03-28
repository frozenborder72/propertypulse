import connetcDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties/search
export const GET = async request => {
  try {
    await connetcDB()

    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location')
    const propertyType = searchParams.get('propertyType')

    const locationPattern = new RegExp(location, 'i')

    // Match locationPattern against database fields
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
        { 'location.zipcode': locationPattern },
      ],
    }

    // Only check for properties if it's not 'All'
    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i')
      query.type = typePattern
    }

    const properties = await Property.find(query)

    console.log(query)

    return new Response(JSON.stringify(properties, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new Response('Something went wrong', { status: 500 })
  }
}
