import { test, expect } from '@playwright/test'

test('toBe positivo', () => {
    const a = 'Spike'
    const b = 'Spike'

    expect(a).toBe(b)
})

test('toBe negativo', () => {
    const a = { name: 'Spike' }
    const b = { name: 'Spike' }

    expect(a).toBe(b)
})

test('toStrictEqual positivo', () => {
    const a = new Cachorro('Spike')
    const b = new Cachorro('Spike')

    console.log(a.constructor.name)
    console.log(b.constructor.name)

    expect(a).toStrictEqual(b)
})

test('toStrictEqual negativo', () => {
    const a = { name: 'Spike' }
    const b = new Cachorro('Spike')

    console.log(a.constructor.name)
    console.log(b.constructor.name)

    expect(a).toStrictEqual(b)
})

test('toEqual positivo', () => {
    const a = { name: 'Spike' }
    const b = new Cachorro('Spike')

    console.log(a.constructor.name)
    console.log(b.constructor.name)

    expect(a).toEqual(b)
})

test('toEqual negativo', () => {
    const a = { name: 'Snoopy' }
    const b = new Cachorro('Spike')

    console.log(a.constructor.name)
    console.log(b.constructor.name)

    expect(a).toEqual(b)
})

class Cachorro {
    constructor(name) {
        this.name = name
    }
}