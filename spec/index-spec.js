const fizzbuzz = require('../src')

describe("FizzBuzz", () => {
  [
    {input: 1, output: 1},
    {input: 2, output: 2},
    {input: 3, output: "fizz"},
    {input: 4, output: 4},
    {input: 5, output: "buzz"},
    {input: 15, output: "fizzbuzz"},
  ].map(({input, output}) => {
    it("should return the number", () => {
      expect(fizzbuzz(input)).toEqual(output)
    });
  })
})
