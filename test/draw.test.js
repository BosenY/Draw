import Draw from '../src'

test('Draw.isDom()', () => {
  expect(Draw.isDom({})).toBe(false)
  expect(Draw.isDom(123)).toBe(false)
  expect(Draw.isDom('123')).toBe(false)
  expect(Draw.isDom({ a: 123 })).toBe(false)
  const container = window.document.createElement('div')
  expect(Draw.isDom(container)).toBe(true)
})

test('Draw id', () => {
  expect(Draw.id).toBe(0)
  new Draw()
  expect(Draw.id).toBe(1)
  new Draw()
  expect(Draw.id).toBe(2)
})

test('maxNum type error', () => {
  const maxNumTypeError = () => { new Draw({ maxNum: 'a' }) }

  expect(maxNumTypeError).toThrow()
  expect(maxNumTypeError).toThrow(TypeError)
  expect(maxNumTypeError).toThrow('Invalid value for option maxNum: expected a number, but got string')
})

test('parent type error', () => {
  const parentTypeError = () => { new Draw({ parent: 'a' }) }

  expect(parentTypeError).toThrow()
  expect(parentTypeError).toThrow(TypeError)
  expect(parentTypeError).toThrow('Invalid value for option parent: expected an Object, but got string')
})
