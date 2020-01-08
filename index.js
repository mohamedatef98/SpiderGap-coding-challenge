const { readFileSync } = require('fs')
const isInCircle = require('./greatCircleDistance')

const DATA_LOCATION = './partners.json'

const partners = JSON.parse(readFileSync(DATA_LOCATION))

const parseCoordinates = (coordinates) => {
    const [latitude, longitude] = coordinates.split(',').map(Number)
    return { latitude, longitude }
}

const centralLondon = parseCoordinates('51.515419,-0.141099')

const partnersWithin100km = partners
    .map(
        (partner) => {
            const partnerOfficesWith100km = partner.offices
                .filter(office => isInCircle(centralLondon, 100, parseCoordinates(office.coordinates))
                )

            return { ...partner, offices: partnerOfficesWith100km }
        })
    .filter(partner => partner.offices.length)
    
    //Get only organization name and addresses
    .map(partner => ({ name: partner.organization, offices: partner.offices.map(office => office.address) }))
    .sort((a, b) => a.name - b.name)

console.log(partnersWithin100km)