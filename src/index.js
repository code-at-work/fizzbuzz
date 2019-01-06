const { converge, and, cond, identity, T, compose, modulo, equals, always, flip } = require('ramda')

const is_modulo_3 = compose(equals(0), flip(modulo)(3))
const is_modulo_5 = compose(equals(0), flip(modulo)(5))
const is_modulo_3_and_5 = converge(and)([is_modulo_3, is_modulo_5])

module.exports = cond([
  [is_modulo_3_and_5, always("fizzbuzz")],
  [is_modulo_3, always("fizz")],
  [is_modulo_5, always("buzz")],
  [T, identity],
])
