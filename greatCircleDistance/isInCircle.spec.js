const { expect } = require('chai')

const isInCircle = require('./isInCircle')

const somePlaces = {
    Oxford: {
        latitude: 51.75,
        longitude: 1.262
    },
    London: {
        latitude: 51.5,
        longitude: 0.12333
    },
    Berlin: {
        latitude: 52.5164,
        longitude: 13.3844
    },
    Rome: {
        latitude: 41.9,
        longitude: 12.499
    },
    Venice: {
        latitude: 45.443,
        longitude: 12.31583
    },
    Paris: {
        latitude: 48.864722,
        longitude:  2.348
    },
    Nice: {
        latitude: 43.71111,
        longitude: 7.26
    }
}

describe('testing the isInCircle', () => {
    it('should check that Oxford isn\'t within 300km from Paris', () => {
        expect(isInCircle(somePlaces.Oxford, 300, somePlaces.Paris)).to.be.false
    })

    it('should check that London is within 400km from Paris', () => {
        expect(isInCircle(somePlaces.London, 400, somePlaces.Paris)).to.be.true
    })

    it('should check that London is within 85km from Oxford', () => {
        expect(isInCircle(somePlaces.London, 85, somePlaces.Oxford)).to.be.true
    })

    it('should check that Paris is within 690km from Nice', () => {
        expect(isInCircle(somePlaces.Paris, 690, somePlaces.Nice)).to.be.true
    })

    it('should check that Nice is within 475km from Rome but not 300km', () => {
        expect(isInCircle(somePlaces.Nice, 300, somePlaces.Rome)).to.be.false
        expect(isInCircle(somePlaces.Nice, 475, somePlaces.Rome)).to.be.true
    })

    it('should check that Venice is within 800km from Berlin', () => {
        expect(isInCircle(somePlaces.Venice, 800, somePlaces.Berlin)).to.be.true
    })
})