const { expect } = require('@jest/globals')
const { it } = require('jest-circus')
const stringLength = require('./string-length')
const stringReverse = require('./string-reverse')

it('string length', () => {
    expect(stringLength(
        "Test"
    )).toBe(4)
})

test('string length', () => {
    expect(stringLength(
        "Hello world!"
        )).toMatch("Out of range")
})

test('string length', () => {
    expect(stringLength(
        ""
    )).toMatch("Out of range")
})

test('string reverse', () => {
    expect(stringReverse(
        "Mai"
    )).toMatch('iaM')
})
