import reverseKeys from './reverse-keys'

const testObj = {
  foo: 'bar',
  bar: 'foo',
  foobar: 'barfoo',
  barfoo: 'foobar',
}

test('returns a reversed array of the keys of the inputed object', () => {
  expect(reverseKeys(testObj)).toEqual(['barfoo', 'foobar', 'bar', 'foo'])
  expect(reverseKeys(testObj)).not.toEqual(['foo', 'bar', 'foobar', 'barfoo'])
})
