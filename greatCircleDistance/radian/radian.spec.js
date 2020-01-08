const expect = require('chai').expect

const radian = require('./radian')

describe('testing radian function', () => {
    it('should convert degrees to radians', () => {
        const degrees = [0, 90, 180, 270, 360]
        const radians = degrees.map(radian)

        expect(radians).to.eql([0, Math.PI/2, Math.PI, 3*Math.PI/2, 2*Math.PI])
    })

    it('should convert negative degrees correctly', () => {
        const degree1 = -180
        const radian1 = radian(degree1)

        const degree2 = 180
        const radian2 = radian(degree2)

        expect(radian1).to.eql(Math.PI)
        expect(radian2).to.eql(Math.PI)
    })
})