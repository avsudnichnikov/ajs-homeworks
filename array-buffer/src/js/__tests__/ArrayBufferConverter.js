import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  const received = `${arrayBufferConverter}`;
  expect(received).toBe(expected);
});
