const { expect } = require('chai')

const deepClone = require('./deepClone')

// expect(val).to.eql does a deepEqual Check, so expect({}).to.eql({}) is true
// expect(val).to.equal does a strict equal check '===', so expect({}).to.equal({}) is false

describe('testing deepClone for objects', () => {

    it('should clone simple object', () => {
        const obj1 = { name: 'John' }
        const clone = deepClone(obj1)

        expect(clone).to.eql(obj1)

        expect(clone).not.to.equal(obj1)
    })

    it('should clone nested objects', () => {
        const name = { first: 'John', last: 'Doe' }
        const obj1 = { name, age: 23 }

        const clone = deepClone(obj1)

        expect(clone).to.eql(obj1)
        expect(clone.name).to.eql(name)

        expect(clone).not.to.equal(obj1)
        expect(clone.name).not.to.equal(name)
    })

    it('should clone arrays objects', () => {
        const hobbies = ['Swimming', 'Gaming', 'Coding']
        const obj1 = { name: 'John', age: 23, hobbies }

        const clone = deepClone(obj1)

        expect(clone).to.eql(obj1)
        expect(clone.hobbies).to.eql(hobbies)

        expect(clone).not.to.equal(obj1)
        expect(clone.hobbies).not.to.equal(hobbies)
    })
})

describe('testing deepClone for arrays', () => {

    it('should clone arrays', () => {
        const array = [1, 2, 3, 4]
        const clone = deepClone(array)

        expect(clone).to.eql(array)

        expect(clone).not.equal(array)
    })

    it('should clone arrays with objects as values', () => {
        const obj1 = { name: 'John' }
        const obj2 = { name: 'Doug' }
        const obj3 = { name: 'Sarah' }
        const array = [obj1, obj2, obj3]
        const clone = deepClone(array)

        expect(clone).to.eql(array)
        expect(clone[0]).to.eql(obj1)
        expect(clone[1]).to.eql(obj2)
        expect(clone[2]).to.eql(obj3)

        expect(clone).not.equal(array)
        expect(clone[0]).not.to.equal(obj1)
        expect(clone[1]).not.to.equal(obj2)
        expect(clone[2]).not.to.equal(obj3)
    })
})

describe('testing deepClones for some primitives', () => {
    it('should clone NaN', () => {
        const number = NaN
        const clone = deepClone(number)

        expect(clone).to.be.NaN
    })

    it('should clone undefined', () => {
        const clone = deepClone(undefined)

        expect(typeof clone).to.equal('undefined')
    })

    it('should clone null', () => {
        const clone = deepClone(null)

        expect(clone).to.eql(null)
    })
})