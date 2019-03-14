const fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz', () => {
  test('should check that jest is working', async () => {
    expect(await fizzbuzz.handle()).toEqual(4)
  })
})
